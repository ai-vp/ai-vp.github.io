---
layout: home
title: AI‑VP
titleTemplate: AI知识库开源生态 · VitePress
hero:
  name: AI‑VP
  text: AI知识库开源生态
  tagline: 面向LLM、RAG、Agent，打造优雅的AI技术文档
  subtitle: 🎉 开源组织
  mockUrl: "ai‑vp.github.io"
  image:
    src: /github.png # 图片路径
    alt: Hero Image # 替代文本
  actions:
    - theme: brand
      text: 快速开始
      link: /zh‑CN/guide/quick‑start
    - theme: alt
      text: 在 GitHub 查看
      link: https://github.com/AI‑VP
      target: _blank
    - theme: alt
      text: 项目列表
      link: /zh‑CN/project/
features:
  - icon: rocket-launch
    color: blue
    title: AI文档主题
    details: 基于VitePress定制主题组件，适合大模型技术知识库
    link: /zh‑CN/project/themes
  - icon: paint-brush
    color: purple
    title: 样式组件库
    details: 配套公共UI组件，亮色暗色双主题完整支持
    link: /zh‑CN/guide/custom‑style
  - icon: globe-alt
    color: green
    title: 国际化
    details: 内置多语言，中文英文双语AI教程文档
    link: /zh‑CN/guide/i18n
  - icon: device-phone-mobile
    color: orange
    title: 响应式
    details: 桌面、平板、手机全部设备自适应展示
  - icon: bolt
    color: amber
    title: 极速构建
    details: Vite底层驱动，热重载开发体验流畅
    link: https://vitejs.dev
    target: _blank
  - icon: magnifying-glass
    color: indigo
    title: 本地全文检索
    details: 内置本地搜索，离线也可以检索知识库内容
    link: /zh‑CN/guide/search
featuresConfig:
  title: 为什么选择 AI‑VP？
  description: 专为AI技术教程、知识库打造的VitePress生态
  extraSection:
    title: 立即开始体验
    description: 使用我们的主题组件，搭建你的AI知识库站点
    tags:
      - AI知识库
      - 精美界面
      - TypeScript
      - 自定义布局
      - 双语支持
      - 移动端适配
quickStart:
  badge: 5 分钟上手
  title: 快速开始
  subtitle: 搭建AI知识库文档
  description: 简单几步，基于AI‑VP主题创建你的AI教程站点
  steps:
    - step: "01"
      icon: arrow-down-tray
      color: "blue"
      title: "安装主题包"
      description: 使用pnpm/npm安装我们的主题
      code: "pnpm add @ai-vp/theme-ak"
    - step: "02"
      icon: cog-8-tooth
      color: "green"
      title: "导入主题配置"
      description: 在VitePress配置文件引入
      code: |
        import { withAkTheme } from '@ai-vp/theme-ak/config'
        export default withAkTheme({
          // 站点配置
        })
    - step: "03"
      icon: rocket-launch
      color: "purple"
      title: "启动开发预览"
      description: 运行本地开发服务预览站点
      code: "pnpm dev"
  helpText: "需要帮助？查阅完整文档"
  helpLink: "/zh-CN/guide/quick-start"
  helpLinkText: "快速开始指南"
---
