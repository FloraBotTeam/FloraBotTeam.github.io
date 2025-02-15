import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: "一个新的, 使用 Python 编写的支持插件的Bot",
  themeConfig: {
    nav: nav(),

    sidebar: {
        '/guide/': { base: '/', items: sidebarGuide() },
        '/develop/': { base: '/', items: sidebarDevelop() }
    },

    editLink: {
        pattern: 'https://github.com/FloraBotTeam/FloraBotDocs',
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
    darkModeSwitchTitle: '切换到深色模式'
}
})

function nav() {
    return [
        { text: '指南',
        items: [
            { text: '使用', link: '/guide/install' },
            { text: '插件列表', link: '/guide/plugin_list' }
          ] 
        },
        { text: '开发', link: '/develop/plugin_develop' },
        { text: '关于', link: '/guide/about' },
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
            text: '开始',
            collapsed: false,
            items: [
                { text: '开始安装', link: 'guide/install', activeMatch: '/guide/' },
                { text: '安装插件', link: 'guide/install_plugins', activeMatch: '/guide/' },
                { text: '对接框架', link: 'guide/integration', activeMatch: '/guide/' }
            ]
        }, 
        {
            text: '开发',
            collapsed: false,
            items: [{ text: '插件开发', link: 'develop/plugin_develop', activeMatch: '/develop/' }]

        },
        { text: '关于', link: 'guide/about', activeMatch: '/guide/' },
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