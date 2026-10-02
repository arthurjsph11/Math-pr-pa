<script setup lang="ts">
import { ref, computed } from 'vue'

// Le grand carré de côté (a + b), découpé en a², b² et deux rectangles a × b.
const a = ref(4)
const b = ref(2)
const echelle = computed(() => 260 / (a.value + b.value))
const pa = computed(() => a.value * echelle.value)
const pb = computed(() => b.value * echelle.value)
</script>

<template>
  <div class="identite">
    <div class="curseurs">
      <label>a = {{ a }} <input v-model.number="a" type="range" min="1" max="8" step="1" /></label>
      <label>b = {{ b }} <input v-model.number="b" type="range" min="1" max="8" step="1" /></label>
    </div>
    <svg :viewBox="`0 0 300 300`" role="img" aria-label="Carré de côté a plus b découpé en quatre morceaux">
      <g transform="translate(20 20)">
        <rect x="0" y="0" :width="pa" :height="pa" class="carre-a" />
        <rect :x="pa" y="0" :width="pb" :height="pa" class="rect-ab" />
        <rect x="0" :y="pa" :width="pa" :height="pb" class="rect-ab" />
        <rect :x="pa" :y="pa" :width="pb" :height="pb" class="carre-b" />
        <text :x="pa / 2" :y="pa / 2 + 6" text-anchor="middle">a²</text>
        <text :x="pa + pb / 2" :y="pa / 2 + 6" text-anchor="middle">ab</text>
        <text :x="pa / 2" :y="pa + pb / 2 + 6" text-anchor="middle">ab</text>
        <text :x="pa + pb / 2" :y="pa + pb / 2 + 6" text-anchor="middle">b²</text>
      </g>
    </svg>
    <p class="calcul">
      (a + b)² = ({{ a }} + {{ b }})² = <strong>{{ (a + b) ** 2 }}</strong><br />
      a² + 2ab + b² = {{ a * a }} + {{ 2 * a * b }} + {{ b * b }} = <strong>{{ a * a + 2 * a * b + b * b }}</strong><br />
      <span class="piege">a² + b² = {{ a * a + b * b }} : il manque les deux rectangles, {{ 2 * a * b }}.</span>
    </p>
  </div>
</template>

<style scoped>
.identite { margin: 20px 0; padding: 16px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.curseurs { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 8px; }
.curseurs label { display: flex; align-items: center; gap: 10px; font-weight: 600; }
.curseurs input { width: 160px; height: 32px; }
svg { width: 100%; max-width: 320px; display: block; margin: 0 auto; }
.carre-a { fill: color-mix(in srgb, var(--encadre-definition) 35%, transparent); stroke: var(--vp-c-text-1); }
.carre-b { fill: color-mix(in srgb, var(--encadre-propriete) 35%, transparent); stroke: var(--vp-c-text-1); }
.rect-ab { fill: color-mix(in srgb, var(--encadre-application) 35%, transparent); stroke: var(--vp-c-text-1); }
text { fill: var(--vp-c-text-1); font-size: 18px; font-weight: 700; }
.calcul { text-align: center; line-height: 1.9; }
.piege { color: var(--encadre-erreur); }
</style>
