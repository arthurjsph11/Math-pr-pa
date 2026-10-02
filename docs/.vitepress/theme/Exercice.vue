<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ReponseMath from './ReponseMath.vue'
import { corriger, apercu, type Verdict } from './exercices/calcul'
import { rendreTexte, formule } from './exercices/rendu'
import { trouverExercice } from './exercices'
import { NIVEAUX, melanger, type Exo } from './exercices/types'
import { lireSuivi, ecrireSuivi, noterErreur, type SuiviExo } from './exercices/memoire'

// Un exercice interactif : énoncé tiré au hasard, encadré de réponse (ou QCM),
// indices progressifs, corrigé caché, carnet d'erreurs.
//   <Exercice id="fractions-simplifier" :numero="1" />
const props = defineProps<{ id: string; numero?: number; carnetCle?: string }>()
const emit = defineEmits<{ reussi: [] }>()

const modele = trouverExercice(props.id)
const exo = ref<Exo | null>(null)
const choixMelanges = ref<NonNullable<Exo['choix']>>([])
const saisie = ref('')
const verdict = ref<Verdict | null>(null)
const indices = ref(0) // 0 = aucun, 1, 2, 3 = solution complète affichée
const resolu = ref(false)
const voirCorrige = ref(false)
const choixFaux = ref<Set<number>>(new Set())
const explication = ref('')
const suivi = ref<SuiviExo>({ essais: 0, reussites: 0, dernierIndices: 0 })
const derniereReponseFausse = ref('')
let cleInstance = ''
let rateCetteFois = false

function nouvelExercice() {
  if (!modele) return
  const e = modele.creer()
  exo.value = e
  choixMelanges.value = e.choix ? melanger(e.choix) : []
  saisie.value = ''
  verdict.value = null
  indices.value = 0
  resolu.value = false
  voirCorrige.value = false
  choixFaux.value = new Set()
  explication.value = ''
  derniereReponseFausse.value = ''
  rateCetteFois = false
  cleInstance = props.carnetCle ?? `${props.id}:${Date.now()}`
}

// Les nombres sont tirés seulement dans le navigateur (pas pendant la fabrication du site)
onMounted(() => {
  suivi.value = lireSuivi(props.id)
  nouvelExercice()
})

const memoireTexte = computed(() => {
  const s = suivi.value
  if (!s.essais) return ''
  if (s.dernierResultat === 'reussi') {
    return s.dernierIndices === 0 ? 'La dernière fois : réussi sans indice ✓'
      : s.dernierIndices >= 3 ? 'La dernière fois : réussi après avoir vu la solution'
      : `La dernière fois : réussi avec ${s.dernierIndices} indice${s.dernierIndices > 1 ? 's' : ''}`
  }
  return 'La dernière fois : pas encore réussi'
})

function enregistrerSuivi(changement: Partial<SuiviExo>) {
  suivi.value = { ...suivi.value, ...changement }
  ecrireSuivi(props.id, suivi.value)
}

function noter(ta: string) {
  if (!modele || !exo.value) return
  noterErreur({
    cle: cleInstance,
    id: modele.id,
    theme: modele.theme,
    titre: modele.titre,
    enonce: exo.value.enonce,
    ta,
    bonne: exo.value.bonne,
    indices: indices.value,
    date: new Date().toISOString()
  })
}

function rate(ta: string) {
  rateCetteFois = true
  derniereReponseFausse.value = ta
  enregistrerSuivi({ essais: suivi.value.essais + 1, dernierResultat: 'rate', dernierIndices: indices.value })
  noter(ta)
}

function reussite() {
  resolu.value = true
  enregistrerSuivi({
    essais: suivi.value.essais + 1,
    reussites: suivi.value.reussites + 1,
    dernierResultat: 'reussi',
    dernierIndices: indices.value
  })
  emit('reussi')
}

function verifier() {
  const e = exo.value
  if (!e?.attendu || !e.forme || resolu.value) return
  const v = corriger(saisie.value, e.attendu, e.forme)
  verdict.value = v
  if (v.etat === 'juste') reussite()
  else if (v.etat === 'faux') rate(apercu(saisie.value).tex ?? saisie.value)
}

function choisir(i: number) {
  const c = choixMelanges.value[i]
  if (resolu.value || choixFaux.value.has(i)) return
  if (c.juste) {
    explication.value = c.explication
    reussite()
  } else {
    choixFaux.value = new Set([...choixFaux.value, i])
    explication.value = c.explication
    rate(c.tex)
  }
}

function indiceSuivant() {
  indices.value++
  // Solution complète regardée sans avoir trouvé : l'exercice va dans le carnet pour être refait
  if (indices.value === 3 && !resolu.value) {
    if (!rateCetteFois) {
      rateCetteFois = true
      enregistrerSuivi({ essais: suivi.value.essais + 1, dernierResultat: 'rate', dernierIndices: 3 })
    }
    noter(derniereReponseFausse.value || '\\text{pas de réponse (solution regardée)}')
  }
}

const html = (s: string) => rendreTexte(s)
</script>

<template>
  <div v-if="modele" class="exercice" :class="{ resolu }">
    <div class="tete">
      <span class="numero">{{ numero ? `Exercice ${numero}` : 'Exercice' }}</span>
      <span class="niveau" :class="'n' + modele.niveau">{{ NIVEAUX[modele.niveau] }}</span>
      <span class="titre">{{ modele.titre }}</span>
    </div>
    <p v-if="memoireTexte" class="memoire">{{ memoireTexte }}</p>

    <div v-if="!exo" class="chargement">Préparation de l'exercice…</div>
    <template v-else>
      <p class="enonce" v-html="html(exo.enonce)" />

      <p class="essayer">✏️ <strong>À toi d'essayer</strong> avant de regarder les indices.</p>

      <!-- QCM -->
      <div v-if="exo.choix" class="qcm">
        <button
          v-for="(c, i) in choixMelanges"
          :key="c.tex"
          type="button"
          class="choix"
          :class="{ faux: choixFaux.has(i), juste: resolu && c.juste }"
          :disabled="resolu || choixFaux.has(i)"
          @click="choisir(i)"
        >
          <span v-html="formule(c.tex)" />
        </button>
      </div>
      <div v-if="exo.choix && explication" class="retour" :class="resolu ? 'ok' : 'ko'">
        <strong>{{ resolu ? 'Juste !' : 'Pas tout à fait.' }}</strong>
        <span v-html="html(' ' + explication)" />
        <span v-if="!resolu"> Essaie une autre réponse.</span>
      </div>

      <!-- Réponse tapée -->
      <template v-else-if="!exo.choix">
        <ReponseMath v-model="saisie" :unite="exo.unite" :equation="exo.forme === 'equation'" :desactive="resolu" @valider="verifier" />
        <button v-if="!resolu" type="button" class="bouton principal" @click="verifier">Vérifier ma réponse</button>
        <div v-if="verdict" class="retour" :class="{ ok: verdict.etat === 'juste', presque: verdict.etat === 'presque', ko: verdict.etat === 'faux', info: verdict.etat === 'illisible' }">
          {{ verdict.message }}
          <span v-if="verdict.etat === 'faux'"> Réessaie, ou prends un indice. (Noté dans ton carnet d'erreurs.)</span>
        </div>
      </template>

      <!-- Indices progressifs puis solution -->
      <div class="aides">
        <div v-if="indices >= 1" class="indice"><strong>Indice 1.</strong> <span v-html="html(exo.indices[0])" /></div>
        <div v-if="indices >= 2" class="indice"><strong>Indice 2.</strong> <span v-html="html(exo.indices[1])" /></div>
        <div v-if="indices >= 3 || voirCorrige" class="solution">
          <p class="solution-titre">Corrigé</p>
          <div v-html="html(exo.solution)" />
          <details v-if="exo.verification" class="verif">
            <summary>Vérifier mon résultat</summary>
            <div v-html="html(exo.verification)" />
          </details>
        </div>

        <div class="boutons">
          <template v-if="!resolu">
            <button v-if="indices === 0" type="button" class="bouton" @click="indiceSuivant">💡 Indice 1</button>
            <button v-else-if="indices === 1" type="button" class="bouton" @click="indiceSuivant">💡 Indice 2</button>
            <button v-else-if="indices === 2" type="button" class="bouton" @click="indiceSuivant">Voir la solution complète</button>
          </template>
          <button v-else-if="indices < 3 && !voirCorrige" type="button" class="bouton" @click="voirCorrige = true">Voir le corrigé</button>
          <button type="button" class="bouton nouvel" @click="nouvelExercice">🎲 Nouvel exercice</button>
        </div>
        <p v-if="indices > 0 && indices < 3 && !resolu" class="compteur">Indices utilisés : {{ indices }} sur 2</p>
      </div>
    </template>
  </div>
  <p v-else class="introuvable">Exercice « {{ id }} » introuvable.</p>
</template>

<style scoped>
.exercice {
  margin: 24px 0;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-left: 5px solid var(--vp-c-brand-1);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.exercice.resolu { border-left-color: var(--vp-c-success-1); }
.tete { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.numero { font-weight: 700; }
.titre { color: var(--vp-c-text-2); }
.niveau { padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; color: #fff; }
.niveau.n1 { background: var(--encadre-propriete); }
.niveau.n2 { background: var(--encadre-definition); }
.niveau.n3 { background: var(--encadre-methode); }
.memoire { margin: 6px 0 0 !important; font-size: 13px; color: var(--vp-c-text-2); }
.enonce { font-size: 16px; }
.essayer { margin: 4px 0 !important; font-size: 14px; color: var(--vp-c-text-2); }

.qcm { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin: 12px 0; }
.choix {
  min-height: 64px;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 18px;
  touch-action: manipulation;
}
.choix:not(:disabled):hover { border-color: var(--vp-c-brand-1); }
.choix.faux { border-color: var(--encadre-erreur); opacity: 0.6; text-decoration: line-through; }
.choix.juste { border-color: var(--vp-c-success-1); background: var(--vp-c-success-soft); }

.bouton {
  min-height: 48px;
  padding: 8px 18px;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-weight: 600;
  touch-action: manipulation;
}
.bouton:hover { border-color: var(--vp-c-brand-1); }
.bouton.principal { margin-top: 4px; background: var(--vp-c-brand-3); color: var(--vp-c-white); border: none; }
.bouton.principal:hover { background: var(--vp-c-brand-2); }
.boutons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
.retour { margin-top: 10px; padding: 10px 14px; border-radius: 8px; font-weight: 500; }
.retour.ok { background: var(--vp-c-success-soft); color: var(--vp-c-success-1); }
.retour.presque { background: var(--vp-c-warning-soft); color: var(--vp-c-warning-1); }
.retour.ko { background: color-mix(in srgb, var(--encadre-erreur) 12%, transparent); color: var(--encadre-erreur); }
.retour.info { background: var(--vp-c-default-soft); }
.retour.ok :deep(*), .retour.ko :deep(*) { color: inherit; }
.indice { margin-top: 10px; padding: 8px 12px; border-radius: 8px; background: color-mix(in srgb, var(--encadre-application) 12%, transparent); }
.solution { margin-top: 10px; padding: 10px 14px; border-radius: 8px; border-left: 4px solid var(--encadre-propriete); background: var(--vp-c-bg); }
.solution-titre { margin: 0 0 4px !important; font-weight: 700; color: var(--encadre-propriete); }
.verif { margin-top: 8px; }
.verif summary { cursor: pointer; font-weight: 600; min-height: 40px; display: flex; align-items: center; }
.compteur { margin: 6px 0 0 !important; font-size: 13px; color: var(--vp-c-text-2); }
</style>
