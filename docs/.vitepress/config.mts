import { defineConfig } from 'vitepress'
import markdownItKatex from '@vscode/markdown-it-katex'
import markdownItContainer from 'markdown-it-container'

// Adresse du site sur GitHub Pages : https://arthurjsph11.github.io/Math-pr-pa/
const BASE = '/Math-pr-pa/'

// Encadrés colorés utilisables dans les leçons :
//   ::: definition Titre facultatif
//   contenu
//   :::
const ENCADRES: Record<string, string> = {
  definition: 'Définition',
  propriete: 'Propriété',
  demonstration: 'Démonstration',
  methode: 'Méthode',
  erreur: 'Erreur fréquente',
  application: 'À quoi ça sert ?',
  memo: 'Mémo',
  essai: "À toi d'essayer",
  verifier: 'À VÉRIFIER',
  source: 'Sources'
}

export default defineConfig({
  lang: 'fr-FR',
  title: 'Mes révisions prépa',
  description: "Mon site pour comprendre les maths, du niveau Seconde jusqu'à la prépa ATS",
  base: BASE,
  cleanUrls: true,
  // Date « Mis à jour le » : calculée seulement lors de la publication par GitHub (CI)
  lastUpdated: !!process.env.CI,

  markdown: {
    config: (md) => {
      md.use((markdownItKatex as any).default ?? markdownItKatex)
      for (const [type, titreParDefaut] of Object.entries(ENCADRES)) {
        md.use(markdownItContainer, type, {
          render(tokens: any[], idx: number) {
            const token = tokens[idx]
            if (token.nesting === 1) {
              const titre = token.info.trim().slice(type.length).trim() || titreParDefaut
              return `<div class="encadre encadre-${type}"><p class="encadre-titre">${md.utils.escapeHtml(titre)}</p>\n`
            }
            return '</div>\n'
          }
        })
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Maths', link: '/maths/', activeMatch: '/maths/' },
      { text: 'Physique-chimie', link: '/physique/', activeMatch: '/physique/' },
      { text: "📒 Carnet d'erreurs", link: '/maths/carnet-erreurs' }
    ],

    // Un sommaire latéral différent pour chaque espace
    sidebar: {
      '/maths/': [
        {
          text: 'Maths',
          items: [
            { text: 'Présentation', link: '/maths/' },
            { text: "📒 Mon carnet d'erreurs", link: '/maths/carnet-erreurs' }
          ]
        },
        {
          text: 'Bloc 0 : bases de Seconde',
          collapsed: false,
          items: [
            { text: 'Présentation du bloc', link: '/maths/bloc-0/' },
            {
              text: 'Équations · Bases',
              items: [
                { text: 'Résoudre une équation du 1er degré', link: '/maths/bloc-0/equations/equation-premier-degre' }
              ]
            },
            {
              text: 'Fractions · Bases',
              items: [
                { text: 'Exercices sur les fractions', link: '/maths/bloc-0/fractions/exercices-fractions' }
              ]
            }
          ]
        },
        {
          text: 'Programme de rattrapage',
          collapsed: true,
          items: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ text: `Bloc ${n} (à venir)` }))
        }
      ],
      '/physique/': [
        {
          text: 'Physique-chimie',
          items: [{ text: 'Présentation', link: '/physique/' }]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
          modal: {
            displayDetails: 'Afficher les détails',
            resetButtonTitle: 'Effacer la recherche',
            backButtonTitle: 'Fermer la recherche',
            noResultsText: 'Aucun résultat pour',
            footer: {
              selectText: 'choisir',
              navigateText: 'naviguer',
              closeText: 'fermer'
            }
          }
        }
      }
    },

    // Traductions de l'interface en français
    outline: { level: [2, 3], label: 'Sur cette page' },
    docFooter: { prev: 'Page précédente', next: 'Page suivante' },
    lastUpdated: { text: 'Mis à jour le' },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer en mode clair',
    darkModeSwitchTitle: 'Passer en mode sombre',
    sidebarMenuLabel: 'Sommaire',
    returnToTopLabel: 'Revenir en haut',
    langMenuLabel: 'Langue',
    notFound: {
      title: 'PAGE INTROUVABLE',
      quote: "Cette page n'existe pas (encore).",
      linkText: "Retour à l'accueil"
    }
  }
})
