// Où j'en suis : affiché sur la page d'accueil.
// L'avancement est calculé à partir des parties terminées (boutons « J'ai terminé la partie »),
// enregistrées sur l'appareil. Synchronisé entre appareils à l'étape 5 (Supabase).

export interface Matiere {
  nom: string
  icone: string
  lien: string
  chapitre: string | null // chapitre en cours (null = pas commencé)
  lienChapitre?: string
  lecons?: { cle: string; parties: number }[] // leçons du chapitre en cours
}

export const matieres: Matiere[] = [
  {
    nom: 'Maths',
    icone: '📐',
    lien: '/maths/',
    chapitre: 'Bloc 0 · Résoudre une équation du premier degré',
    lienChapitre: '/maths/bloc-0/equations/equation-premier-degre',
    lecons: [{ cle: 'maths/bloc-0/equations/equation-premier-degre', parties: 3 }]
  },
  {
    nom: 'Physique',
    icone: '⚡',
    lien: '/physique/',
    chapitre: null
  },
  {
    nom: 'Chimie',
    icone: '🧪',
    lien: '/physique/',
    chapitre: null
  }
]
