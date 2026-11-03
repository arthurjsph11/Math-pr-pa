<script setup lang="ts">
import { ref, computed } from 'vue'

// Parabole y = a x² + b x + c sur un repère de -6 à 6, avec curseurs pour a, b et c.
// Affiche le discriminant, les racines (points où la courbe coupe l'axe des x),
// le sommet et l'axe de symétrie.
const a = ref(-1)
const b = ref(2)
const c = ref(3)
const T = 6 // demi-largeur du repère
const PX = 25 // pixels par unité
const X = (x: number) => 160 + x * PX
const Y = (y: number) => 160 - y * PX
const graduations = Array.from({ length: 2 * T + 1 }, (_, i) => i - T)
const f = (x: number) => a.value * x * x + b.value * x + c.value

const ecrire = (n: number) => {
  const r = Math.round(n * 100) / 100
  return (Number.isInteger(r) ? String(r) : r.toFixed(2).replace(/0$/, '').replace('.', ',')).replace('-', '−')
}

const courbe = computed(() => {
  const points: string[] = []
  for (let i = 0; i <= 240; i++) {
    const x = -T + (i * 2 * T) / 240
    const y = Math.max(-40, Math.min(40, f(x))) // on coupe très loin du cadre
    points.push(`${i ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`)
  }
  return points.join(' ')
})

const delta = computed(() => b.value * b.value - 4 * a.value * c.value)
const alpha = computed(() => -b.value / (2 * a.value))
const beta = computed(() => f(alpha.value))
const racines = computed(() => {
  if (a.value === 0) return []
  if (delta.value < 0) return []
  if (delta.value === 0) return [alpha.value]
  const r = Math.sqrt(delta.value)
  return [(-b.value - r) / (2 * a.value), (-b.value + r) / (2 * a.value)].sort((p, q) => p - q)
})

const equation = computed(() => {
  const terme = (k: number, lettre: string, premier: boolean) => {
    if (k === 0) return ''
    const signe = k < 0 ? (premier ? '−' : ' − ') : premier ? '' : ' + '
    const v = Math.abs(k)
    const nombre = lettre && v === 1 ? '' : ecrire(v)
    return signe + nombre + lettre
  }
  const t1 = terme(a.value, 'x²', true)
  const t2 = terme(b.value, 'x', !t1)
  const t3 = terme(c.value, '', !t1 && !t2)
  return 'y = ' + (t1 + t2 + t3 || '0')
})

const phrase = computed(() => {
  if (a.value === 0) return "a = 0 : ce n'est plus une parabole mais une droite. Le second degré exige a ≠ 0."
  const d = `Δ = ${ecrire(delta.value)}`
  if (delta.value < 0) return `${d} < 0 : la parabole ne touche jamais l'axe des x. Aucune solution.`
  if (delta.value === 0) return `${d} : la parabole touche l'axe des x en un seul point, son sommet. Une solution : x = ${ecrire(alpha.value)}.`
  return `${d} > 0 : la parabole coupe l'axe des x en deux points. Deux solutions : x = ${ecrire(racines.value[0])} et x = ${ecrire(racines.value[1])}.`
})
</script>

<template>
  <div class="parabole">
    <div class="curseurs">
      <label>a = {{ ecrire(a) }} <input v-model.number="a" type="range" min="-2" max="2" step="0.5" /></label>
      <label>b = {{ ecrire(b) }} <input v-model.number="b" type="range" min="-6" max="6" step="1" /></label>
      <label>c = {{ ecrire(c) }} <input v-model.number="c" type="range" min="-6" max="6" step="1" /></label>
    </div>
    <svg viewBox="0 0 320 320" role="img" :aria-label="`Parabole d'équation ${equation}`">
      <defs>
        <clipPath id="cadre-parabole"><rect x="10" y="10" width="300" height="300" /></clipPath>
      </defs>
      <g class="grille">
        <line v-for="g in graduations" :key="'v' + g" :x1="X(g)" :x2="X(g)" :y1="Y(T)" :y2="Y(-T)" />
        <line v-for="g in graduations" :key="'h' + g" :x1="X(-T)" :x2="X(T)" :y1="Y(g)" :y2="Y(g)" />
      </g>
      <line class="axe" :x1="X(-T)" :x2="X(T)" :y1="Y(0)" :y2="Y(0)" />
      <line class="axe" :x1="X(0)" :x2="X(0)" :y1="Y(-T)" :y2="Y(T)" />
      <text :x="X(T) - 8" :y="Y(0) - 6" class="nom-axe">x</text>
      <text :x="X(0) + 6" :y="Y(T) + 12" class="nom-axe">y</text>
      <g clip-path="url(#cadre-parabole)">
        <line v-if="a !== 0" class="symetrie" :x1="X(alpha)" :x2="X(alpha)" :y1="Y(T)" :y2="Y(-T)" />
        <path class="trait" :d="courbe" />
        <circle v-for="(r, i) in racines" :key="i" :cx="X(r)" :cy="Y(0)" r="6" class="racine" />
        <circle v-if="a !== 0" :cx="X(alpha)" :cy="Y(beta)" r="5" class="sommet" />
      </g>
    </svg>
    <p class="equation"><strong>{{ equation }}</strong></p>
    <p class="bilan">{{ phrase }}</p>
    <p v-if="a !== 0" class="aide">
      <span class="pastille sommet-p"></span> Sommet S({{ ecrire(alpha) }} ; {{ ecrire(beta) }}), c'est
      {{ a > 0 ? 'le point le plus bas (minimum)' : 'le point le plus haut (maximum)' }}.
      En pointillés : l'axe de symétrie x = {{ ecrire(alpha) }}.
      <span class="pastille racine-p"></span> Les racines.
    </p>
    <p class="aide">Essaie : change seulement c. La courbe monte ou descend sans changer de forme,
      et le nombre de points sur l'axe des x change. C'est exactement ce que mesure Δ.</p>
  </div>
</template>

<style scoped>
.parabole { margin: 20px 0; padding: 16px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.curseurs { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-bottom: 8px; }
.curseurs label { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; font-weight: 600; min-width: 90px; }
.curseurs input { width: 170px; height: 32px; }
svg { width: 100%; max-width: 360px; display: block; margin: 0 auto; }
.grille line { stroke: var(--vp-c-divider); stroke-width: 1; }
.axe { stroke: var(--vp-c-text-2); stroke-width: 1.5; }
.nom-axe { fill: var(--vp-c-text-2); font-size: 13px; font-style: italic; }
.trait { fill: none; stroke: var(--encadre-definition); stroke-width: 3; }
.symetrie { stroke: var(--encadre-application); stroke-width: 2; stroke-dasharray: 5 4; }
.racine { fill: var(--encadre-erreur); }
.sommet { fill: var(--encadre-application); }
.equation { text-align: center; font-size: 20px; margin: 8px 0 4px; }
.bilan { text-align: center; font-weight: 600; margin: 4px 0; }
.aide { font-size: 14px; color: var(--vp-c-text-2); text-align: center; margin: 4px 0; }
.pastille { display: inline-block; width: 10px; height: 10px; border-radius: 50%; vertical-align: middle; }
.sommet-p { background: var(--encadre-application); }
.racine-p { background: var(--encadre-erreur); }
</style>
