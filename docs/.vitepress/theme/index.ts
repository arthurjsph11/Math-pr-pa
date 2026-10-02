import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import 'katex/dist/katex.min.css'
import './custom.css'
import Recap from './Recap.vue'
import EnTeteLecon from './EnTeteLecon.vue'
import FinPartie from './FinPartie.vue'
import Balance from './Balance.vue'
import Video from './Video.vue'
import BoutonImprimer from './BoutonImprimer.vue'
import BoutonAccueil from './BoutonAccueil.vue'

export default {
  extends: DefaultTheme,
  // En-tête de leçon (statut, prérequis, BTS) ajouté automatiquement en haut des leçons
  // + bouton « Accueil » toujours visible dans la barre du haut
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(EnTeteLecon),
      'nav-bar-title-after': () => h(BoutonAccueil)
    }),
  enhanceApp({ app }) {
    app.component('Recap', Recap)
    app.component('FinPartie', FinPartie)
    app.component('Balance', Balance)
    app.component('Video', Video)
    app.component('BoutonImprimer', BoutonImprimer)
  }
} satisfies Theme
