import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-us',
  description: "一个新的, 使用 Python 编写的支持插件的Bot",
  themeConfig: {
    nav: nav(),

    sidebar: {
        '/en-us/guide/': { base: '/en-us/', items: sidebarGuide() },
        '/en-us/develop/': { base: '/en-us/', items: sidebarDevelop() }
    },

    editLink: {
        pattern: 'https://github.com/FloraBotTeam/FloraBot',
        text: 'Edit this page on GitHub'
    },

    docFooter: {
        prev: 'Previous Page',
        next: 'Next Page'
    },

    outline: {
        label: 'Page Navigation'
    },

    lastUpdated: {
        text: 'Last Updated on',
        formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
        }
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
    ],

    langMenuLabel: 'Languages',
    returnToTopLabel: 'Back to Top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to Light Mode',
    darkModeSwitchTitle: 'Switch to Dark Mode'
}
})

function nav() {
  return [
      { text: 'Guide',
      items: [
          { text: 'Installation', link: '/en-us/guide/install' },
          { text: 'Plugin List', link: '/en-us/guide/plugin_list.md' }
        ] 
      },
      { text: 'Development', link: '/en-us/develop/plugin_develop' },
      { text: 'About', link: '/en-us/guide/about' },
      { text: 'Reference Documents',
          items: [
            { text: 'CQHTTP', link: 'https://docs.go-cqhttp.org/ ' },
            { text: 'OneBot11', link: 'https://11.onebot.dev/ ' }
          ]
        }
  ];
}
function sidebarGuide() {
  return [
      {
          text: 'Getting Started',
          collapsed: false,
          items: [
              { text: 'Installation', link: 'guide/install', activeMatch: '/en-us/guide/' },
              { text: 'Installing Plugins', link: 'guide/install_plugins', activeMatch: '/en-us/guide/' },
              { text: 'Integrating with Frameworks', link: 'guide/integration', activeMatch: '/en-us/guide/' }
          ]
      }, 
      {
          text: 'Development',
          collapsed: false,
          items: [{ text: 'Plugin Development', link: 'develop/plugin_develop', activeMatch: '/en-us/develop/' }]
      },
      { text: 'About', link: 'guide/about', activeMatch: '/en-us/guide/' },
  ]
}
function sidebarDevelop() {
  return [
      {
          text: 'Development',
          collapsed: false,
          items: [
              { text: 'Writing Plugins', link: '/en-us/develop/plugin_develop', activeMatch: '/en-us/develop/' }
          ]
      }
  ]
}
