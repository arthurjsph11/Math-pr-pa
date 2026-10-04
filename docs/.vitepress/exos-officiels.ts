// Exercices officiels classés par leçon.
// Pour ajouter un exercice : déclarer le sujet dans SUJETS (une seule fois),
// puis ajouter une ligne dans EXOS avec le chemin de la leçon (comme dans <FinPartie lecon="…">).
// On ne recopie pas les sujets : on met un lien vers le PDF officiel et on dit quelle question faire.

export interface Sujet {
  titre: string
  examen: string // ex. « Épreuve anticipée de maths (Première) »
  session: string
  url: string // PDF officiel du sujet
  corrige?: string // page ou PDF du corrigé
  source: string // qui publie (Éducation nationale, APMEP…)
}

export interface ExoOfficiel {
  lecon: string
  sujet: keyof typeof SUJETS
  question: string // où le trouver dans le sujet
  resume: string // énoncé en quelques mots (pas recopié)
  plusDur?: string // si l'exercice dépasse un peu la leçon : ce qu'il faut en plus
}

const CORRIGES_EAM = 'https://www.apmep.fr/Epreuve-anticipee-2026'

export const SUJETS = {
  'eam-0-specialite': {
    titre: 'Sujet 0, voie générale, spécialité maths',
    examen: 'Épreuve anticipée de maths (Première)',
    session: 'Sujet d’entraînement officiel (2025)',
    url: 'https://eduscol.education.fr/document/65500/download',
    corrige: CORRIGES_EAM,
    source: 'Éducation nationale (Éduscol), corrigé APMEP'
  },
  'eam-0-techno-a': {
    titre: 'Sujet 0, voie technologique (a)',
    examen: 'Épreuve anticipée de maths (Première)',
    session: 'Sujet d’entraînement officiel (2025)',
    url: 'https://eduscol.education.fr/document/65511/download',
    corrige: CORRIGES_EAM,
    source: 'Éducation nationale (Éduscol), corrigé APMEP'
  },
  'eam-0-techno-b': {
    titre: 'Sujet 0, voie technologique (b)',
    examen: 'Épreuve anticipée de maths (Première)',
    session: 'Sujet d’entraînement officiel (2025)',
    url: 'https://eduscol.education.fr/document/65512/download',
    corrige: CORRIGES_EAM,
    source: 'Éducation nationale (Éduscol), corrigé APMEP'
  }
} satisfies Record<string, Sujet>

const AUTO = 'Partie 1 (automatismes), question '

export const EXOS: ExoOfficiel[] = [
  // ----- Bloc 0 · 1. Priorités et nombres relatifs -----
  { lecon: 'maths/bloc-0/calcul/priorites-relatifs', sujet: 'eam-0-techno-b', question: AUTO + '5', resume: 'Calculer A = 2 / (1 − 2/3) : priorité au dénominateur.' },

  // ----- 2. Fractions -----
  { lecon: 'maths/bloc-0/fractions/calculer-avec-les-fractions', sujet: 'eam-0-specialite', question: AUTO + '1', resume: 'L’inverse du double de 5.' },
  { lecon: 'maths/bloc-0/fractions/calculer-avec-les-fractions', sujet: 'eam-0-specialite', question: AUTO + '2', resume: 'Calculer une expression avec des fractions.' },
  { lecon: 'maths/bloc-0/fractions/calculer-avec-les-fractions', sujet: 'eam-0-techno-b', question: AUTO + '5', resume: 'Calculer A = 2 / (1 − 2/3).' },
  { lecon: 'maths/bloc-0/fractions/calculer-avec-les-fractions', sujet: 'eam-0-techno-b', question: AUTO + '6', resume: 'Calculer 1/100 + 1/1000.' },

  // ----- 3. Puissances et écriture scientifique -----
  { lecon: 'maths/bloc-0/calcul/puissances', sujet: 'eam-0-techno-a', question: AUTO + '4', resume: 'Trouver la seule égalité vraie parmi quatre calculs avec des puissances.' },
  { lecon: 'maths/bloc-0/calcul/puissances', sujet: 'eam-0-techno-a', question: AUTO + '5', resume: 'Une feuille fait 70 × 10⁻³ mm : épaisseur de 2 000 feuilles.' },
  { lecon: 'maths/bloc-0/calcul/puissances', sujet: 'eam-0-techno-a', question: AUTO + '6', resume: 'Comparer les masses de quatre planètes écrites en notation scientifique.' },
  { lecon: 'maths/bloc-0/calcul/puissances', sujet: 'eam-0-techno-b', question: AUTO + '8', resume: 'Valeur approchée de 10³⁰ + 10⁻³⁰.' },

  // ----- 4. Racines carrées -----
  { lecon: 'maths/bloc-0/calcul/racines-carrees', sujet: 'eam-0-specialite', question: AUTO + '7', resume: 'Résoudre x² ≥ 10.', plusDur: 'Demande aussi les inéquations (leçon 10) : les solutions s’écrivent avec √10.' },

  // ----- 5. Développer et factoriser -----
  { lecon: 'maths/bloc-0/calcul-litteral/developper-factoriser', sujet: 'eam-0-techno-a', question: AUTO + '7', resume: 'Ajouter un nombre x, son triple et son carré : quelle expression obtient-on ?' },

  // ----- 7. Équation du premier degré -----
  { lecon: 'maths/bloc-0/equations/equation-premier-degre', sujet: 'eam-0-techno-b', question: AUTO + '10', resume: 'Résoudre 3x = 0.' },
  { lecon: 'maths/bloc-0/equations/equation-premier-degre', sujet: 'eam-0-techno-b', question: AUTO + '12', resume: 'Notes 10, 13, 12 et x (x compte double) : quelle note x pour 15 de moyenne ?' },
  { lecon: 'maths/bloc-0/equations/equation-premier-degre', sujet: 'eam-0-specialite', question: AUTO + '12', resume: 'Moyenne pondérée : trouver le coefficient qui donne 15 de moyenne.' },

  // ----- 8. Isoler une variable -----
  { lecon: 'maths/bloc-0/formules/isoler-une-variable', sujet: 'eam-0-specialite', question: AUTO + '6', resume: 'Isoler une lettre dans 1/x + 1/y = 1/u (comme les résistances en parallèle).' },
  { lecon: 'maths/bloc-0/formules/isoler-une-variable', sujet: 'eam-0-techno-a', question: AUTO + '11', resume: 'Isoler t dans C = (1 + t)².', plusDur: 'Demande les racines carrées (leçon 4).' },

  // ----- 9. Produit nul et fractions -----
  { lecon: 'maths/bloc-0/equations/produit-nul-quotient', sujet: 'eam-0-techno-b', question: AUTO + '11', resume: 'Résoudre 144 / x = 9.' },

  // ----- 10. Inéquations et intervalles -----
  { lecon: 'maths/bloc-0/inequations/inequations-intervalles', sujet: 'eam-0-techno-a', question: AUTO + '8', resume: 'Lire sur deux courbes les solutions de f(x) ≤ g(x).' },
  { lecon: 'maths/bloc-0/inequations/inequations-intervalles', sujet: 'eam-0-specialite', question: AUTO + '7', resume: 'Résoudre x² ≥ 10.', plusDur: 'Demande les racines carrées (leçon 4).' },

  // ----- 11. Proportionnalité et pourcentages -----
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-specialite', question: AUTO + '3', resume: 'Que signifie multiplier un prix par 0,975 ?' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-specialite', question: AUTO + '4', resume: 'Une hausse de 10 % puis une baisse de 10 % : revient-on au prix de départ ?' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-a', question: AUTO + '1', resume: '25 % de la journée en devoirs, dont 80 % pour un exposé : quel pourcentage de la journée ?' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-a', question: AUTO + '2', resume: 'Un prix baisse de 50 % : quelle hausse pour revenir au prix de départ ?' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-a', question: AUTO + '3', resume: 'Un prix passe de 250 € à 200 € : coefficient multiplicateur.' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-b', question: AUTO + '1', resume: 'Un article à 400 € augmente de 20 %.' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-b', question: AUTO + '2', resume: 'Un sac à 130 € baisse de 10 %.' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-b', question: AUTO + '3', resume: 'Deux hausses successives de 20 %.' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-b', question: AUTO + '4', resume: 'Élection : 1/4, 20 % et 1/3 des voix, quelle part pour le dernier candidat ?' },
  { lecon: 'maths/bloc-0/proportionnalite/proportionnalite-pourcentages', sujet: 'eam-0-techno-b', question: AUTO + '7', resume: 'Convertir 75 minutes en heures.' },

  // ----- 13. Fonctions affines -----
  { lecon: 'maths/bloc-0/fonctions/fonctions-affines', sujet: 'eam-0-specialite', question: AUTO + '8', resume: 'Trouver l’équation d’une droite tracée dans un repère.' },
  { lecon: 'maths/bloc-0/fonctions/fonctions-affines', sujet: 'eam-0-specialite', question: AUTO + '9', resume: 'Reconnaître les fonctions affines parmi plusieurs fonctions.' },
  { lecon: 'maths/bloc-0/fonctions/fonctions-affines', sujet: 'eam-0-techno-b', question: AUTO + '9', resume: 'Reconnaître la droite d’équation y = −2x + 5.' },
  { lecon: 'maths/bloc-0/fonctions/fonctions-affines', sujet: 'eam-0-techno-a', question: AUTO + '9', resume: 'Lire sur une courbe le nombre de solutions de f(x) = 0.' }
]

export function exosDeLaLecon(lecon: string) {
  return EXOS.filter((e) => e.lecon === lecon).map((e) => ({ ...e, sujetInfo: SUJETS[e.sujet] as Sujet }))
}
