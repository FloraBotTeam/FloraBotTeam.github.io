import { defineConfig } from 'vitepress'
import locales from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloraBot",
  locales: locales.locales,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
    ]
  }
})
