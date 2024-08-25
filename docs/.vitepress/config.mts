import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloraBot",
  lang: "zh-CN",
  description: "一个新的, 使用 Python 编写的支持插件的Bot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '使用',
        items: [
          { text: '开始', link: '/installenvironment' },
          {text:'第三方插件列表',link:'/plugins-list'}
        ] 
      },
      { text: '插件开发', link: '/developmentplugin'},
      { text: '关于', link: '/about' },
      { text: '参考文档' ,
        items: [
          { text: 'CQHTTP', link: 'https://docs.go-cqhttp.org/' },
          { text: 'OneBot11', link: 'https://11.onebot.dev/' }
        ]
      }
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
      },
      {
        text: '关于',
        items: [
          { text: '关于项目', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
    ]
  }
})
