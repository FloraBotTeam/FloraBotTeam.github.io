import { defineConfig } from 'vitepress'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import locales from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloraBot Docs",
  locales: locales.locales,
  head: [['link',{rel:'icon',href:'/logo.png'}]],
  themeConfig: {
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
    ],
    search: {
      provider: 'local'
    }
  },
  markdown:{
    config(md) {
      md.use(InlineLinkPreviewElementTransform)
    }
  },
  vite: {
    optimizeDeps:{
      exclude: [
        '@nolebase/vitepress-plugin-inline-link-preview/client',
        'vitepress'
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/*'
      ]
    }
  }
})
