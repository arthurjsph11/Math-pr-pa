// Tous les exercices du site. Pour un nouveau thème : créer banque-<theme>.ts,
// l'ajouter ici, et ajouter le thème dans THEMES (types.ts).
import { exercicesFractions } from './banque-fractions'
import type { ModeleExo } from './types'

export const tousLesExercices: ModeleExo[] = [...exercicesFractions]

export const trouverExercice = (id: string) => tousLesExercices.find((e) => e.id === id)
