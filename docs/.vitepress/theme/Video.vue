<script setup lang="ts">
// Vidéo YouTube intégrée (youtube-nocookie : pas de cookies de pub tant qu'on ne lance pas).
defineProps<{ id: string; titre: string; chaine: string; vedette?: boolean }>()
</script>

<template>
  <figure class="video" :class="{ vedette }">
    <p v-if="vedette" class="badge">⭐ La meilleure pour commencer</p>
    <div class="cadre">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${id}`"
        :title="titre"
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <figcaption>
      <strong>{{ titre }}</strong> · {{ chaine }} ·
      <a :href="`https://www.youtube.com/watch?v=${id}`" target="_blank" rel="noopener">ouvrir sur YouTube</a>
    </figcaption>
  </figure>
</template>

<style scoped>
.video { margin: 20px 0; }
.vedette {
  padding: 12px;
  border-radius: 12px;
  border: 2px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.badge { margin: 0 0 8px !important; font-weight: 700; color: var(--vp-c-brand-1); }
.cadre { position: relative; aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; background: #000; }
iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
figcaption { margin-top: 6px; font-size: 14px; color: var(--vp-c-text-2); }
</style>
