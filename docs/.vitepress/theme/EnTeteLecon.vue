<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

// Affiché en haut de chaque page dont le frontmatter contient « lecon: »
const { frontmatter } = useData()
const lecon = computed(() => frontmatter.value.lecon)

const STATUTS: Record<string, string> = {
  brouillon: 'Brouillon',
  'relue-arthur': 'Relue par Arthur',
  'relue-prof': 'Relue par le prof'
}
</script>

<template>
  <div v-if="lecon" class="entete">
    <div class="etiquettes">
      <span class="etiquette" :class="'statut-' + lecon.statut">{{ STATUTS[lecon.statut] ?? lecon.statut }}</span>
      <span v-if="lecon.niveau" class="etiquette neutre">Niveau : {{ lecon.niveau }}</span>
      <span v-if="lecon.duree" class="etiquette neutre">≈ {{ lecon.duree }} min</span>
      <span v-if="lecon.bts" class="etiquette bts" title="Notion utile au BTS FED">BTS</span>
    </div>
    <div v-if="lecon.prerequis?.length" class="prerequis">
      <strong>Prérequis :</strong>
      <ul>
        <li v-for="p in lecon.prerequis" :key="p.texte">
          <a v-if="p.lien" :href="withBase(p.lien)">{{ p.texte }}</a>
          <span v-else>{{ p.texte }} <em class="a-venir">(leçon à venir)</em></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.entete {
  margin-bottom: 24px;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.etiquettes { display: flex; flex-wrap: wrap; gap: 8px; }
.etiquette {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
}
.neutre { background: var(--vp-c-default-soft); color: var(--vp-c-text-2); }
.statut-brouillon { background: var(--vp-c-warning-soft); color: var(--vp-c-warning-1); }
.statut-relue-arthur { background: var(--vp-c-tip-soft); color: var(--vp-c-tip-1); }
.statut-relue-prof { background: var(--vp-c-success-soft); color: var(--vp-c-success-1); }
.bts { background: var(--encadre-application); color: #fff; }
.prerequis { margin-top: 12px; font-size: 14px; }
.prerequis ul { margin: 4px 0 0; padding-left: 20px; }
.prerequis li { margin: 2px 0; }
.a-venir { color: var(--vp-c-text-3); }
</style>
