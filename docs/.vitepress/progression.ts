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
    chapitre: 'Bloc 0 · Les bases du calcul',
    lienChapitre: '/maths/bloc-0/',
    lecons: [
      { cle: 'maths/bloc-0/calcul/priorites-relatifs', parties: 3 },
      { cle: 'maths/bloc-0/fractions/calculer-avec-les-fractions', parties: 3 },
      { cle: 'maths/bloc-0/calcul/puissances', parties: 3 },
      { cle: 'maths/bloc-0/calcul/racines-carrees', parties: 3 },
      { cle: 'maths/bloc-0/calcul-litteral/developper-factoriser', parties: 3 },
      { cle: 'maths/bloc-0/calcul-litteral/identites-remarquables', parties: 3 },
      { cle: 'maths/bloc-0/equations/equation-premier-degre', parties: 3 },
      { cle: 'maths/bloc-0/formules/isoler-une-variable', parties: 3 },
      { cle: 'maths/bloc-0/equations/produit-nul-quotient', parties: 3 },
      { cle: 'maths/bloc-0/inequations/inequations-intervalles', parties: 3 },
      { cle: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', parties: 3 },
      { cle: 'maths/bloc-0/systemes/systemes-deux-equations', parties: 3 },
      { cle: 'maths/bloc-0/fonctions/fonctions-affines', parties: 3 }
    ]
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
