<script setup lang="ts">
import { ref } from 'vue'

// Vidéo YouTube en miniature cliquable : l'image de la vidéo s'affiche d'abord,
// la vidéo ne se charge (youtube-nocookie) qu'au clic sur la miniature.
defineProps<{ id: string; titre: string; chaine: string; duree?: string; vedette?: boolean }>()
const lancee = ref(false)
</script>

<template>
  <figure class="video" :class="{ vedette }">
    <p v-if="vedette" class="badge">⭐ La meilleure pour commencer</p>
    <div class="cadre">
      <iframe
        v-if="lancee"
        :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`"
        :title="titre"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
      <button v-else type="button" class="miniature" :aria-label="`Lancer la vidéo : ${titre}`" @click="lancee = true">
        <img :src="`https://i.ytimg.com/vi/${id}/hqdefault.jpg`" :alt="titre" loading="lazy" />
        <span class="lecture" aria-hidden="true">▶</span>
        <span v-if="duree" class="duree">{{ duree }}</span>
      </button>
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
.miniature { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; cursor: pointer; background: #000; }
.miniature img { width: 100%; height: 100%; object-fit: cover; display: block; transition: opacity 0.2s; }
.miniature:hover img { opacity: 0.85; }
.lecture {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 72px; height: 50px; border-radius: 14px;
  background: rgba(220, 38, 38, 0.92); color: #fff; font-size: 24px;
  display: flex; align-items: center; justify-content: center;
}
.duree {
  position: absolute; right: 8px; bottom: 8px; padding: 2px 6px; border-radius: 4px;
  background: rgba(0, 0, 0, 0.8); color: #fff; font-size: 13px; font-weight: 600;
}
figcaption { margin-top: 6px; font-size: 14px; color: var(--vp-c-text-2); }
</style>
