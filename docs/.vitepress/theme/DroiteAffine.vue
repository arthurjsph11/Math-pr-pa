<script setup lang="ts">
import { ref, computed } from 'vue'

// Droite y = a x + b sur un repère de -6 à 6, avec curseurs pour a et b
// et le « triangle de pente » : on avance de 1, on monte (ou descend) de a.
const a = ref(1)
const b = ref(2)
const T = 6 // demi-largeur du repère
const PX = 25 // pixels par unité
const X = (x: number) => 160 + x * PX
const Y = (y: number) => 160 - y * PX
const graduations = Array.from({ length: 2 * T + 1 }, (_, i) => i - T)
const ligne = computed(() => ({ x1: X(-T), y1: Y(a.value * -T + b.value), x2: X(T), y2: Y(a.value * T + b.value) }))
const ecrire = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ','))
const equation = computed(() => {
  const pa = a.value === 1 ? '' : a.value === -1 ? '−' : ecrire(a.value).replace('-', '−')
  const pb = b.value === 0 ? '' : b.value > 0 ? ` + ${ecrire(b.value)}` : ` − ${ecrire(-b.value)}`
  return a.value === 0 ? `y = ${ecrire(b.value).replace('-', '−')}` : `y = ${pa}x${pb}`
})
</script>

<template>
  <div class="droite">
    <div class="curseurs">
      <label>a (pente) = {{ ecrire(a) }} <input v-model.number="a" type="range" min="-3" max="3" step="0.5" /></label>
      <label>b (ordonnée à l'origine) = {{ ecrire(b) }} <input v-model.number="b" type="range" min="-4" max="4" step="1" /></label>
    </div>
    <svg viewBox="0 0 320 320" role="img" :aria-label="`Droite d'équation ${equation}`">
      <defs>
        <clipPath id="cadre-droite"><rect x="10" y="10" width="300" height="300" /></clipPath>
      </defs>
      <g class="grille">
        <line v-for="g in graduations" :key="'v' + g" :x1="X(g)" :x2="X(g)" :y1="Y(T)" :y2="Y(-T)" />
        <line v-for="g in graduations" :key="'h' + g" :x1="X(-T)" :x2="X(T)" :y1="Y(g)" :y2="Y(g)" />
      </g>
      <line class="axe" :x1="X(-T)" :x2="X(T)" :y1="Y(0)" :y2="Y(0)" />
      <line class="axe" :x1="X(0)" :x2="X(0)" :y1="Y(-T)" :y2="Y(T)" />
      <text :x="X(T) - 8" :y="Y(0) - 6" class="nom-axe">x</text>
      <text :x="X(0) + 6" :y="Y(T) + 12" class="nom-axe">y</text>
      <g clip-path="url(#cadre-droite)">
        <line class="trait" v-bind="ligne" />
        <path class="pente" :d="`M${X(0)} ${Y(b)} H${X(1)} V${Y(a + b)}`" />
        <circle :cx="X(0)" :cy="Y(b)" r="5" class="point" />
      </g>
      <text :x="X(0.5)" :y="Y(b) + 16" text-anchor="middle" class="etiquette">1</text>
      <text :x="X(1) + 8" :y="Y(b + a / 2) + 4" class="etiquette">{{ ecrire(a) }}</text>
    </svg>
    <p class="equation"><strong>{{ equation }}</strong></p>
    <p class="aide">Le point rouge est sur l'axe vertical, à la hauteur b. Le petit triangle :
      quand on avance de 1 vers la droite, la droite monte de a (ou descend si a est négatif).</p>
  </div>
</template>

<style scoped>
.droite { margin: 20px 0; padding: 16px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.curseurs { display: flex; flex-wrap: wrap; gap: 16px 28px; margin-bottom: 8px; }
.curseurs label { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; font-weight: 600; }
.curseurs input { width: 170px; height: 32px; }
svg { width: 100%; max-width: 360px; display: block; margin: 0 auto; }
.grille line { stroke: var(--vp-c-divider); stroke-width: 1; }
.axe { stroke: var(--vp-c-text-2); stroke-width: 1.5; }
.nom-axe { fill: var(--vp-c-text-2); font-size: 13px; font-style: italic; }
.trait { stroke: var(--encadre-definition); stroke-width: 3; }
.pente { fill: none; stroke: var(--encadre-application); stroke-width: 2.5; stroke-dasharray: 5 4; }
.point { fill: var(--encadre-erreur); }
.etiquette { fill: var(--encadre-application); font-size: 13px; font-weight: 700; }
.equation { text-align: center; font-size: 20px; margin: 8px 0 4px; }
.aide { font-size: 14px; color: var(--vp-c-text-2); text-align: center; }
</style>
