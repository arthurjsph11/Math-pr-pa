// Ce que le site retient des exercices, sur cet appareil (navigateur).
// À l'étape 5, ces données seront synchronisées avec Supabase.
import { lire, ecrire } from '../stockage'

// Suivi d'un exercice : essais, réussites, indices utilisés
export interface SuiviExo {
  essais: number
  reussites: number
  dernierIndices: number // indices utilisés la dernière fois (0, 1, 2, ou 3 = solution vue)
  dernierResultat?: 'reussi' | 'rate'
}
const cleSuivi = (id: string) => `exercice:${id}`
export const lireSuivi = (id: string) =>
  lire<SuiviExo>(cleSuivi(id), { essais: 0, reussites: 0, dernierIndices: 0 })
export const ecrireSuivi = (id: string, s: SuiviExo) => ecrire(cleSuivi(id), s)

// Carnet d'erreurs
export interface ErreurCarnet {
  cle: string // identifiant unique de l'erreur
  id: string // exercice (modèle)
  theme: string
  titre: string
  enonce: string // énoncé avec les nombres de ce jour-là
  ta: string // ta réponse (LaTeX ou texte)
  bonne: string // bonne réponse en LaTeX
  indices: number
  date: string // ISO
  refaitJuste?: boolean
}
const CLE_CARNET = 'carnet-erreurs'
export const lireCarnet = () => lire<ErreurCarnet[]>(CLE_CARNET, [])
export const ecrireCarnet = (c: ErreurCarnet[]) => {
  ecrire(CLE_CARNET, c)
  window.dispatchEvent(new Event('carnet-change'))
}

// Ajoute l'erreur, ou met à jour celle qui a la même clé
export function noterErreur(e: ErreurCarnet) {
  const carnet = lireCarnet().filter((x) => x.cle !== e.cle)
  carnet.unshift(e)
  ecrireCarnet(carnet)
}
export function modifierErreur(cle: string, changement: Partial<ErreurCarnet>) {
  ecrireCarnet(lireCarnet().map((x) => (x.cle === cle ? { ...x, ...changement } : x)))
}
export function retirerErreur(cle: string) {
  ecrireCarnet(lireCarnet().filter((x) => x.cle !== cle))
}
