import type { Frac, Forme } from './calcul'

// Un exercice tiré au hasard (mêmes questions, nombres différents à chaque « Nouvel exercice »).
// Les textes peuvent contenir des formules : $...$ dans la ligne, $$...$$ centrée.
export interface Exo {
  enonce: string
  // Réponse tapée
  attendu?: Frac
  forme?: Forme
  unite?: string // affichée après l'encadré (ex. « Ω »)
  // QCM : chaque mauvaise réponse = une erreur fréquente, expliquée si on la choisit
  choix?: { tex: string; juste?: boolean; explication: string }[]
  bonne: string // bonne réponse en LaTeX (pour le carnet d'erreurs)
  indices: [string, string]
  solution: string
  verification?: string // équations : bloc replié « Vérifier mon résultat »
}

export interface ModeleExo {
  id: string
  theme: string // clé du thème, ex. « fractions » (regroupement du carnet d'erreurs)
  niveau: 1 | 2 | 3
  titre: string
  creer: () => Exo
}

export const NIVEAUX = { 1: 'Application', 2: 'Entraînement', 3: 'Approfondissement' } as const

export const THEMES: Record<string, { nom: string; lien: string }> = {
  fractions: { nom: 'Fractions', lien: '/maths/bloc-0/fractions/exercices-fractions' }
}

// Hasard
export const hasard = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1))
export const auHasard = <T>(liste: T[]): T => liste[Math.floor(Math.random() * liste.length)]
export function melanger<T>(liste: T[]): T[] {
  const l = [...liste]
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [l[i], l[j]] = [l[j], l[i]]
  }
  return l
}
