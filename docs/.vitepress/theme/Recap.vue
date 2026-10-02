<script setup lang="ts">
import { withBase } from 'vitepress'
import { matieres } from '../progression'
</script>

<template>
  <section class="recap">
    <h2 class="recap-titre">Où j'en suis</h2>
    <div class="recap-grille">
      <div v-for="m in matieres" :key="m.nom" class="recap-carte">
        <a class="recap-matiere" :href="withBase(m.lien)">
          <span class="recap-icone">{{ m.icone }}</span>{{ m.nom }}
        </a>

        <template v-if="m.chapitre">
          <p class="recap-label">Chapitre en cours</p>
          <a class="recap-chapitre" :href="withBase(m.lienChapitre ?? m.lien)">{{ m.chapitre }}</a>
          <div class="recap-barre" role="progressbar" :aria-valuenow="m.avancement" aria-valuemin="0" aria-valuemax="100">
            <div class="recap-rempli" :style="{ width: m.avancement + '%' }"></div>
          </div>
          <p class="recap-pourcent">{{ m.avancement }} % du chapitre</p>
        </template>

        <p v-else class="recap-vide">Pas encore commencé</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.recap {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 48px;
}
.recap-titre {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 16px;
  padding-top: 0;
  border-top: none;
}
.recap-grille {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.recap-carte {
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.recap-matiere {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.recap-icone { font-size: 22px; }
.recap-label {
  margin: 14px 0 2px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
}
.recap-chapitre {
  display: block;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  line-height: 1.4;
}
.recap-chapitre:hover { text-decoration: underline; }
.recap-barre {
  margin-top: 12px;
  height: 10px;
  border-radius: 5px;
  background: var(--vp-c-default-soft);
  overflow: hidden;
}
.recap-rempli {
  height: 100%;
  border-radius: 5px;
  background: var(--vp-c-brand-1);
}
.recap-pourcent {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
.recap-vide {
  margin: 14px 0 0;
  color: var(--vp-c-text-3);
  font-style: italic;
}
@media (max-width: 640px) {
  .recap { padding: 0 16px 40px; }
}
</style>
