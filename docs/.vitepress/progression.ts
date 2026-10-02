// Où j'en suis : affiché sur la page d'accueil.
// Pour l'instant mis à jour à la main ; deviendra automatique à l'étape 5 (Supabase).

export interface Matiere {
  nom: string
  icone: string
  lien: string
  chapitre: string | null // chapitre en cours (null = pas commencé)
  lienChapitre?: string
  avancement: number // avancement du chapitre en cours, en %
}

export const matieres: Matiere[] = [
  {
    nom: 'Maths',
    icone: '📐',
    lien: '/maths/',
    chapitre: 'Bloc 0 · Résoudre une équation du premier degré',
    lienChapitre: '/maths/bloc-0/',
    avancement: 0
  },
  {
    nom: 'Physique',
    icone: '⚡',
    lien: '/physique/',
    chapitre: null,
    avancement: 0
  },
  {
    nom: 'Chimie',
    icone: '🧪',
    lien: '/physique/',
    chapitre: null,
    avancement: 0
  }
]
