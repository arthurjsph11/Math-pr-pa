<script setup lang="ts">
import { useData, withBase } from 'vitepress'

// Bouton « Accueil » toujours visible dans la barre du haut (sauf sur l'accueil lui-même)
const { frontmatter } = useData()
</script>

<template>
  <a v-if="frontmatter.layout !== 'home'" class="bouton-accueil" :href="withBase('/')" title="Revenir à l'accueil">
    <span aria-hidden="true">🏠</span>
    <span class="texte">Accueil</span>
  </a>
</template>

<style scoped>
.bouton-accueil {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 40px;
  margin-left: 8px;
  padding: 0 14px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 0.2s;
}
.bouton-accueil:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
/* Sur petit écran : seulement la maison, pour garder de la place */
@media (max-width: 420px) {
  .texte { display: none; }
  .bouton-accueil { padding: 0 12px; }
}
</style>
