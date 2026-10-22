import { defineShikiSetup } from '@slidev/types'
import { createCssVariablesTheme } from 'shiki/core'

// Token colors come from CSS variables so each look can recolor code per slide.
const theme = createCssVariablesTheme({ name: 'stack', variablePrefix: '--shiki-' })

export default defineShikiSetup(() => ({
  themes: { light: theme, dark: theme },
}))
