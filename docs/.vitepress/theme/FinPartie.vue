<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lire, ecrire, cleParties } from './stockage'

// Bouton en fin de partie : enregistre que la partie est terminée.
const props = defineProps<{ lecon: string; numero: number; total: number }>()
const terminee = ref(false)

onMounted(() => {
  terminee.value = lire<number[]>(cleParties(props.lecon), []).includes(props.numero)
})

function basculer() {
  const faites = new Set(lire<number[]>(cleParties(props.lecon), []))
  if (terminee.value) faites.delete(props.numero)
  else faites.add(props.numero)
  ecrire(cleParties(props.lecon), [...faites].sort())
  terminee.value = !terminee.value
}
</script>

<template>
  <div class="fin-partie" :class="{ terminee }">
    <button type="button" @click="basculer">
      <template v-if="terminee">✓ Partie {{ numero }} sur {{ total }} terminée (toucher pour annuler)</template>
      <template v-else>J'ai terminé la partie {{ numero }} sur {{ total }}</template>
    </button>
    <p v-if="terminee && numero < total" class="pause">
      Bien joué. Tu peux faire une pause ici : ta progression est enregistrée.
    </p>
  </div>
</template>

<style scoped>
.fin-partie { margin: 32px 0; text-align: center; }
button {
  min-height: 48px;
  padding: 10px 22px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 15px;
  background: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  transition: background 0.2s;
}
button:hover { background: var(--vp-c-brand-2); }
.terminee button { background: var(--vp-c-success-soft); color: var(--vp-c-success-1); }
.pause { margin-top: 8px; font-size: 14px; color: var(--vp-c-text-2); }
</style>
