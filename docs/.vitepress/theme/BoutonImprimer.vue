<script setup lang="ts">
function imprimer() {
  window.print()
}
</script>

<template>
  <button type="button" class="bouton-imprimer" @click="imprimer">
    🖨️ Imprimer / enregistrer en PDF
  </button>
</template>

<style scoped>
.bouton-imprimer {
  min-height: 48px;
  padding: 10px 20px;
  border-radius: 24px;
  font-weight: 600;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.bouton-imprimer:hover { background: var(--vp-c-brand-soft); }
</style>
