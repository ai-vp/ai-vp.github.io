import { vpTheme } from '@ai-vp/vptheme/config'
const isGitHub = process.env.GITHUB_ACTIONS === 'true'
const BASE = isGitHub ? '/themes/' : '/'
export default vpTheme({
  base: '/',

  // 站点配置
  title: 'AI-VP',
  description: '开源AI知识库生态 | 基于VitePress构建LLM、RAG、Agent实战文档',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
  ],

  // 启用暗色模式
  appearance: true,
  // 最后更新时间
  lastUpdated: true,

  // Markdown 代码高亮
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // 多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AI-VP',
      description: '开源AI知识库生态，基于VitePress，写LLM、RAG、Agent、Ollama实战教程',
      link: '/zh-CN/',
      themeConfig: {
        // 顶部导航
       nav: [
              { text: '首页', link: '/zh-CN/' },
              { text: '产品介绍', link: '/zh-CN/intro' },
              { text: '更新日志', link: '/zh-CN/changelog' },
              { text: '关于我们', link: '/zh-CN/about' },
              { text: '支持赞助', link: '/zh-CN/sponsor' },
              { text: '免责声明', link: '/zh-CN/disclaimer' },
            ],
        // 侧边栏
        sidebar: {
          '/zh-CN/': [
            {
              text: '导航菜单',
              items: [
                { text: '产品介绍', link: '/zh-CN/intro' },
                { text: '更新日志', link: '/zh-CN/changelog' },
                { text: '关于我们', link: '/zh-CN/about' },
                { text: '支持赞助', link: '/zh-CN/sponsor' },
                { text: '免责声明', link: '/zh-CN/disclaimer' },
              ]
            }
          ]
        }
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      title: 'AI-VP',
      description: 'Open-source AI knowledge ecosystem built on VitePress for LLM, RAG & Agent',
      link: '/en-US/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'Product Introduction', link: '/en-US/intro' },
          { text: 'About', link: '/en-US/about' },
          { text: 'Changelog', link: '/en-US/changelog' },
          { text: 'Sponsor', link: '/en-US/sponsor' },
          { text: 'Disclaimer', link: '/en-US/disclaimer' },
        ],
        sidebar: {
          '/en-US/': [
            {
              text: 'Our Projects',
              items: [
                { text: 'Home', link: '/en-US/' },
                { text: 'Product Introduction', link: '/en-US/intro' },
                { text: 'About', link: '/en-US/about' },
                { text: 'Changelog', link: '/en-US/changelog' },
                { text: 'Sponsor', link: '/en-US/sponsor' },
                { text: 'Disclaimer', link: '/en-US/disclaimer' },
              ]
            }
          ],
          '/en-US/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Quick Start', link: '/en-US/guide/' },
                { text: 'Homepage', link: '/en-US/guide/home' }
              ]
            }
          ]
        }
      }
    }
  },

  // 全局主题配置
  themeConfig: {
    logo: '/logo.svg',

    langs: {
        notFound: {
        title: '页面未找到',
        content: '抱歉，我们无法找到您要查找的页面。',
        backToHome: '返回首页',
        previousPage: '返回上一页'
      },
      sponsor: {
        selectPaymentMethod: '选择支付方式',
        recentSupporters: '最近支持者',
        totalSupporters: '总支持者',
        totalAmount: '总金额'
      },
      jump: {
        redirecting: '正在跳转到您偏好的语言版本...',
        redirectingSecondary: 'Redirecting to your preferred language...',
        orChooseLanguage: '或选择语言',
        orChooseLanguageSecondary: 'Or choose language',
        countdown: '秒'
      }
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-VP' }
    ],

    footer: {
      copyright: 'Copyright © 2026 <a href="https://github.com/AI-VP">AI-VP Organization</a>'
    }
  }
})
