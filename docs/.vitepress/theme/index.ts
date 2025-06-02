// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import type { Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import DefaultTheme from 'vitepress/theme'

// Global styles
import '@shikijs/vitepress-twoslash/style.css'
import 'katex/dist/katex.min.css'

// Import custom styles
import '../styles/index.scss'
import '../styles/tailwind.css'
import '../styles/theme.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.use(TwoslashFloatingVue)
  }
} satisfies Theme
