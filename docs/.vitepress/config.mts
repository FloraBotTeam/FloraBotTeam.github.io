import { defineConfig } from 'vitepress'
import locales from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloraBot Docs",
  locales: locales.locales,
  base: "/FloraBotDocs/",
  themeConfig: {
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
    ],
    search: {
      provider: 'local'
    }
  }
})
