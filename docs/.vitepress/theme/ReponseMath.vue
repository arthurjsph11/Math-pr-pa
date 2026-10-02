<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { apercu } from './exercices/calcul'
import { formule } from './exercices/rendu'
import { lire, ecrire } from './stockage'

// Encadré de réponse + clavier mathématique à l'écran (gros boutons pour le doigt et le stylet).
// Sur ordinateur, on tape au clavier ; « Entrée » vérifie.
const modele = defineModel<string>({ default: '' })
const props = defineProps<{ unite?: string; equation?: boolean; desactive?: boolean }>()
const emit = defineEmits<{ valider: [] }>()

const champ = ref<HTMLInputElement>()
const clavierOuvert = ref(false)
let curseur = 0 // position du curseur dans le texte

onMounted(() => {
  // Ouvert d'office sur tablette et téléphone ; le choix d'Arthur est ensuite retenu
  const tactile = window.matchMedia('(pointer: coarse)').matches
  clavierOuvert.value = lire<boolean>('clavier-ouvert', tactile)
})

function basculerClavier() {
  clavierOuvert.value = !clavierOuvert.value
  ecrire('clavier-ouvert', clavierOuvert.value)
}

function retenirCurseur() {
  curseur = champ.value?.selectionStart ?? modele.value.length
}

// longueur : celle du nouveau texte (modele.value n'est mis à jour qu'après le rendu)
function placerCurseur(pos: number, longueur = modele.value.length) {
  curseur = Math.max(0, Math.min(pos, longueur))
  nextTick(() => {
    const el = champ.value
    if (el && document.activeElement === el) el.setSelectionRange(curseur, curseur)
  })
}

function inserer(t: string) {
  if (props.desactive) return
  const v = modele.value
  const pos = Math.min(curseur, v.length)
  const nouveau = v.slice(0, pos) + t + v.slice(pos)
  modele.value = nouveau
  placerCurseur(pos + t.length, nouveau.length)
}

function effacerUn() {
  if (props.desactive) return
  const v = modele.value
  const pos = Math.min(curseur, v.length)
  if (pos === 0) return
  const nouveau = v.slice(0, pos - 1) + v.slice(pos)
  modele.value = nouveau
  placerCurseur(pos - 1, nouveau.length)
}

function toutEffacer() {
  if (props.desactive) return
  modele.value = ''
  placerCurseur(0, 0)
}

// Touches : [affichage, texte inséré, description pour les lecteurs d'écran]
type Touche = { label: string; action: () => void; aide: string; classe?: string }
const t = (label: string, texte: string, aide: string, classe?: string): Touche =>
  ({ label, action: () => inserer(texte), aide, classe })

const touches = computed<Touche[]>(() => [
  t('7', '7', '7'), t('8', '8', '8'), t('9', '9', '9'), t('÷', '÷', 'diviser', 'op'), t('(', '(', 'parenthèse ouvrante', 'op'), t(')', ')', 'parenthèse fermante', 'op'),
  t('4', '4', '4'), t('5', '5', '5'), t('6', '6', '6'), t('×', '×', 'multiplier', 'op'), t('▭⁄▭', '/', 'fraction (barre de fraction)', 'special'), t('xⁿ', '^', 'puissance', 'special'),
  t('1', '1', '1'), t('2', '2', '2'), t('3', '3', '3'), t('−', '-', 'moins', 'op'), t('√', '√(', 'racine carrée', 'special'), t('x', 'x', 'la lettre x', 'special'),
  t('0', '0', '0'), t(',', ',', 'virgule'), t('+', '+', 'plus', 'op'), t('=', '=', 'égal', 'op'),
  { label: '◀', action: () => placerCurseur(curseur - 1), aide: 'curseur à gauche', classe: 'nav' },
  { label: '▶', action: () => placerCurseur(curseur + 1), aide: 'curseur à droite', classe: 'nav' },
  { label: '⌫ Effacer', action: effacerUn, aide: 'effacer un caractère', classe: 'large nav' },
  { label: 'Tout effacer', action: toutEffacer, aide: 'tout effacer', classe: 'large nav' },
  { label: 'x =', action: () => inserer('x = '), aide: 'écrire x =', classe: 'large special' }
])

const vue = computed(() => apercu(modele.value))
const apercuHtml = computed(() => (vue.value.tex ? formule(vue.value.tex, true) : ''))

function surTouche(e: KeyboardEvent) {
  if (e.key === 'Enter') { e.preventDefault(); emit('valider') }
}
</script>

<template>
  <div class="reponse" :class="{ desactive }">
    <div class="ligne">
      <input
        ref="champ"
        v-model="modele"
        type="text"
        class="champ"
        :inputmode="clavierOuvert ? 'none' : 'text'"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        :placeholder="equation ? 'Ex. : x = 5/3' : 'Ex. : 3/4'"
        :disabled="desactive"
        aria-label="Ta réponse"
        @keydown="surTouche"
        @keyup="retenirCurseur"
        @click="retenirCurseur"
        @input="retenirCurseur"
        @select="retenirCurseur"
      />
      <span v-if="unite" class="unite">{{ unite }}</span>
      <button type="button" class="bouton-clavier" :aria-pressed="clavierOuvert" @click="basculerClavier">
        ⌨ {{ clavierOuvert ? 'Cacher le clavier' : 'Clavier maths' }}
      </button>
    </div>

    <div class="apercu" aria-live="polite">
      <template v-if="vue.erreur"><span class="apercu-erreur">{{ vue.erreur }}</span></template>
      <template v-else-if="apercuHtml">
        <span class="apercu-titre">Je lis :</span>
        <span v-html="apercuHtml" />
      </template>
      <span v-else class="apercu-vide">Ta réponse s'affichera ici, écrite comme dans un cahier.</span>
    </div>

    <!-- pointerdown.prevent : le champ garde le curseur quand on touche une touche -->
    <div v-if="clavierOuvert" class="clavier" role="group" aria-label="Clavier mathématique" @pointerdown.prevent>
      <button
        v-for="k in touches"
        :key="k.aide"
        type="button"
        class="touche"
        :class="k.classe"
        :aria-label="k.aide"
        :disabled="desactive"
        @click="k.action"
      >{{ k.label }}</button>
    </div>
    <p v-if="clavierOuvert" class="astuce">
      Pour une fraction compliquée, mets des parenthèses : <code>(1+2)/3</code>. Vérifie dans « Je lis » que c'est bien ce que tu veux.
    </p>
  </div>
</template>

<style scoped>
.reponse { margin: 12px 0; }
.ligne { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.champ {
  flex: 1 1 180px;
  min-height: 52px;
  padding: 8px 14px;
  font-size: 20px;
  font-family: var(--vp-font-family-mono);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 10px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.champ:focus { outline: 3px solid var(--vp-c-brand-soft); }
.unite { font-size: 20px; font-weight: 600; }
.bouton-clavier {
  min-height: 52px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  touch-action: manipulation;
}
.apercu {
  min-height: 56px;
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
}
.apercu :deep(.katex-display) { margin: 0; }
.apercu-titre { font-size: 13px; color: var(--vp-c-text-2); white-space: nowrap; }
.apercu-vide { font-size: 13px; color: var(--vp-c-text-3); }
.apercu-erreur { font-size: 14px; color: var(--encadre-erreur); }

.clavier {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px; /* espace entre les touches : évite d'appuyer sur la voisine au stylet */
  max-width: 520px;
  user-select: none;
  -webkit-user-select: none;
}
.touche {
  min-height: 56px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 22px;
  font-weight: 600;
  touch-action: manipulation; /* pas de zoom au double appui */
  -webkit-tap-highlight-color: transparent;
  transition: background 0.1s, transform 0.05s;
}
.touche:active { background: var(--vp-c-brand-soft); transform: scale(0.96); }
.touche.op { color: var(--vp-c-brand-1); }
.touche.special { color: var(--encadre-methode); }
.touche.nav { font-size: 16px; }
.touche.large { grid-column: span 2; }
.astuce { margin: 6px 0 0 !important; font-size: 13px; color: var(--vp-c-text-2); }
.desactive .champ { opacity: 0.7; }
@media (max-width: 420px) {
  .clavier { gap: 6px; }
  .touche { min-height: 50px; font-size: 19px; }
}
</style>
