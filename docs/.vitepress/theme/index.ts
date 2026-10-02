import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import 'katex/dist/katex.min.css'
import './custom.css'
import Recap from './Recap.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Recap', Recap)
  }
} satisfies Theme
