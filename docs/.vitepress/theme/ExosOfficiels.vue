<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { exosDeLaLecon } from '../exos-officiels'

// Liste des exercices d'examens officiels sur le thème d'une leçon.
// Usage : <ExosOfficiels lecon="maths/bloc-0/calcul/puissances" />
const props = defineProps<{ lecon: string }>()
const exos = computed(() => exosDeLaLecon(props.lecon))
</script>

<template>
  <div class="exos-officiels">
    <p class="titre">🎓 Exercices officiels sur ce thème</p>
    <ul v-if="exos.length">
      <li v-for="(e, i) in exos" :key="i">
        <p class="resume">{{ e.resume }}</p>
        <p class="ou">
          <strong>{{ e.sujetInfo.examen }}</strong> · {{ e.sujetInfo.titre }} · {{ e.question }}
        </p>
        <p v-if="e.plusDur" class="plus-dur">⚠️ Un peu plus loin que la leçon : {{ e.plusDur }}</p>
        <p class="liens">
          <a :href="e.sujetInfo.url" target="_blank" rel="noopener">📄 Ouvrir le sujet</a>
          <a v-if="e.sujetInfo.corrige" :href="e.sujetInfo.corrige" target="_blank" rel="noopener">✅ Corrigé</a>
        </p>
      </li>
    </ul>
    <p v-else class="vide">
      Pas encore d'exercice officiel classé sur ce thème. Les sujets du brevet en contiennent souvent :
      voir les <a :href="withBase('/maths/exos-officiels/epreuves')">épreuves complètes</a>.
    </p>
  </div>
</template>

<style scoped>
.exos-officiels {
  margin: 24px 0;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.titre { margin: 0 0 8px !important; font-weight: 700; color: var(--vp-c-brand-1); }
ul { list-style: none; padding: 0 !important; margin: 0 !important; }
li { padding: 10px 0; border-top: 1px solid var(--vp-c-divider); margin: 0 !important; }
li:first-child { border-top: 0; }
p { margin: 2px 0 !important; }
.resume { font-weight: 600; }
.ou, .plus-dur, .vide { font-size: 14px; color: var(--vp-c-text-2); }
.liens { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px !important; }
.liens a {
  display: inline-block;
  padding: 8px 14px; /* grands boutons pour le tactile */
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
</style>
