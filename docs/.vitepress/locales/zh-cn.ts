import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: "一个新的, 使用 Python 编写的支持插件的Bot",
  cleanUrls:true, //开启纯净链接 //
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: nav(),
    logo: '/logo.png',
    sidebar: {
        '/guide/': { base: '/', items: sidebarGuide() },
        '/develop/': { base: '/', items: sidebarDevelop() }
        '/': { base: '/', items: other() }
    },

    editLink: {
        pattern: 'https://github.com/FloraBotTeam/FloraBotTeam.github.io/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
        prev: '上一页',
        next: '下一页'
    },

    outline: {
        label: '页面导航'
    },

    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
        }
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/FloraBotTeam/FloraBot' }
      ],

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: { 
        message: 'Released under the MIT License.',  
        // 自动更新时间
        copyright: `Copyright © 2024-${new Date().getFullYear()} present FloraBot Team.`, 
      }, 
}
})

function nav() {
    return [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/introduction'},
        { text: '开发', link: '/develop/plugin_develop' },
        { text: '插件列表', link: '/guide/plugin_list'},
        { text: '参考文档' ,
            items: [
              { text: 'CQHTTP', link: 'https://docs.go-cqhttp.org/' },
              { text: 'OneBot11', link: 'https://11.onebot.dev/' }
            ]
          }
    ];
}

function sidebarGuide() {
    return [
        {
            text: '开始使用',
            collapsed: false,
            items: [
                { text: '介绍', link: 'guide/introduction', activeMatch: '/guide/' },
                { text: '安装', link: 'guide/install', activeMatch: '/guide/' },
                { text: '插件', link: 'guide/plugin', activeMatch: '/guide/' },
                { text: '插件列表', link: 'guide/plugin_list', activeMatch: '/guide/' },
                { text: '对接框架', link: 'guide/integration', activeMatch: '/guide/' },
                { text: '内置命令', link: 'guide/command', activeMatch: '/guide/' },
            ]
        }, 
        {
            text: '开发',
            collapsed: false,
            items: [{ text: '插件开发', link: 'develop/plugin_develop', activeMatch: '/develop/' }]

        }
    ]
}
function sidebarDevelop() {
    return [
        {
            text: '开发',
            collapsed: false,
            items: [
                { text: '编写插件', link: 'develop/plugin_develop', activeMatch: '/develop/' }
            ]
        }
    ]
}
function other() {
  return [
    { text: '关于项目', link: 'about', activeMatch: '/' }
  ]
}
