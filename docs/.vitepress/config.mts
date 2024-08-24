import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloraBot",
  lang: "zh-CN",
  description: "一个新的, 使用 Python 编写的支持插件的 QQBot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '使用', link: '/install' },
      { text: '开发', link: '/developmentplugin' }
    ],

    sidebar: [
      {
        text: '使用',
        items: [
          { text: '安装环境', link: '/installenvironment' },
          { text: '开始使用', link: '/install' },
          { text: '安装插件', link: '/congigplugins' }
        ]
      },
      {
        text: '开发',
        items: [
          { text: '插件开发', link: '/developmentplugin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AEBC08/FloraBot' }
    ]
  }
})
