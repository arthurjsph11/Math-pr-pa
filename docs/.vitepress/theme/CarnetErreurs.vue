<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import Exercice from './Exercice.vue'
import { THEMES } from './exercices/types'
import { rendreTexte, formule } from './exercices/rendu'
import { lireCarnet, modifierErreur, retirerErreur, type ErreurCarnet } from './exercices/memoire'

// Page « Mon carnet d'erreurs » : les exercices ratés, regroupés par thème.
// « Refaire » propose le même exercice avec d'autres nombres.
const carnet = ref<ErreurCarnet[]>([])
const charge = ref(false)
const ouverts = ref<Set<string>>(new Set())

const recharger = () => { carnet.value = lireCarnet() }
onMounted(() => {
  recharger()
  charge.value = true
  window.addEventListener('carnet-change', recharger)
  window.addEventListener('storage', recharger)
})
onBeforeUnmount(() => {
  window.removeEventListener('carnet-change', recharger)
  window.removeEventListener('storage', recharger)
})

const parTheme = computed(() => {
  const groupes = new Map<string, ErreurCarnet[]>()
  for (const e of carnet.value) {
    if (!groupes.has(e.theme)) groupes.set(e.theme, [])
    groupes.get(e.theme)!.push(e)
  }
  return [...groupes.entries()].map(([theme, erreurs]) => ({
    theme,
    nom: THEMES[theme]?.nom ?? theme,
    lien: THEMES[theme]?.lien,
    erreurs,
    restantes: erreurs.filter((e) => !e.refaitJuste).length
  }))
})

function refaire(cle: string) {
  ouverts.value = new Set([...ouverts.value, cle])
}
function fermer(cle: string) {
  const s = new Set(ouverts.value)
  s.delete(cle)
  ouverts.value = s
}
function reussi(cle: string) {
  modifierErreur(cle, { refaitJuste: true })
}
function retirer(cle: string) {
  retirerErreur(cle)
  fermer(cle)
}

const date = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
const html = (s: string) => rendreTexte(s)
const tex = (s: string) => formule(s)
</script>

<template>
  <div class="carnet">
    <p v-if="!charge">Chargement…</p>
    <div v-else-if="!carnet.length" class="vide">
      <p><strong>Ton carnet est vide.</strong></p>
      <p>Quand tu rates un exercice (ou que tu regardes la solution sans avoir trouvé), il arrive ici, avec ta réponse et la bonne.
        Tu pourras le refaire avec d'autres nombres.</p>
      <p><a :href="withBase('/maths/bloc-0/fractions/exercices-fractions')">Aller aux exercices sur les fractions</a></p>
    </div>

    <section v-for="g in parTheme" :key="g.theme" class="theme">
      <h2 :id="'theme-' + g.theme">{{ g.nom }}
        <span class="compte">{{ g.restantes }} à refaire<template v-if="g.erreurs.length > g.restantes"> · {{ g.erreurs.length - g.restantes }} refait{{ g.erreurs.length - g.restantes > 1 ? 's' : '' }} juste</template></span>
      </h2>
      <p v-if="g.lien" class="lien-theme"><a :href="withBase(g.lien)">Revoir les exercices de ce thème</a></p>

      <article v-for="e in g.erreurs" :key="e.cle" class="erreur" :class="{ refait: e.refaitJuste }">
        <div class="tete">
          <strong>{{ e.titre }}</strong>
          <span class="date">{{ date(e.date) }}</span>
          <span v-if="e.refaitJuste" class="badge-ok">✓ Refait juste</span>
        </div>
        <p class="enonce" v-html="html(e.enonce)" />
        <div class="comparaison">
          <div class="ta">
            <span class="etiquette">Ta réponse</span>
            <span v-html="tex(e.ta)" />
          </div>
          <div class="bonne">
            <span class="etiquette">La bonne réponse</span>
            <span v-html="tex(e.bonne)" />
          </div>
        </div>
        <p v-if="e.indices" class="indices">Indices utilisés : {{ e.indices >= 3 ? 'solution regardée' : e.indices }}</p>

        <div class="boutons">
          <button v-if="!ouverts.has(e.cle)" type="button" class="bouton principal" @click="refaire(e.cle)">🔁 Refaire (autres nombres)</button>
          <button v-else type="button" class="bouton" @click="fermer(e.cle)">Fermer</button>
          <button v-if="e.refaitJuste" type="button" class="bouton" @click="retirer(e.cle)">Retirer du carnet</button>
        </div>
        <Exercice v-if="ouverts.has(e.cle)" :id="e.id" :carnet-cle="e.cle" @reussi="reussi(e.cle)" />
      </article>
    </section>
  </div>
</template>

<style scoped>
.vide { padding: 16px; border-radius: 10px; background: var(--vp-c-bg-soft); }
.theme h2 { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px; }
.compte { font-size: 14px; font-weight: 500; color: var(--vp-c-text-2); }
.lien-theme { font-size: 14px; }
.erreur {
  margin: 16px 0;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  border-left: 5px solid var(--encadre-erreur);
}
.erreur.refait { border-left-color: var(--vp-c-success-1); }
.tete { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.date { font-size: 13px; color: var(--vp-c-text-2); }
.badge-ok { padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; background: var(--vp-c-success-soft); color: var(--vp-c-success-1); }
.comparaison { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
.comparaison > div { padding: 8px 12px; border-radius: 8px; display: flex; flex-direction: column; gap: 4px; overflow-x: auto; }
.ta { background: color-mix(in srgb, var(--encadre-erreur) 10%, transparent); }
.bonne { background: var(--vp-c-success-soft); }
.etiquette { font-size: 12px; font-weight: 700; color: var(--vp-c-text-2); }
.indices { font-size: 13px; color: var(--vp-c-text-2); margin: 0 !important; }
.boutons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.bouton {
  min-height: 48px;
  padding: 8px 18px;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-weight: 600;
  touch-action: manipulation;
}
.bouton.principal { background: var(--vp-c-brand-3); color: var(--vp-c-white); border: none; }
@media (max-width: 520px) { .comparaison { grid-template-columns: 1fr; } }
</style>
