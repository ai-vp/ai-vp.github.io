---
layout: home
title: AI‑VP
titleTemplate: Open Source AI Knowledge Ecosystem · VitePress
hero:
  name: AI‑VP
  text: Open Source AI Knowledge Ecosystem
  tagline: Build elegant AI technical docs for LLM, RAG and Agent
  subtitle: 🎉 Open Source Organization
  mockUrl: "ai-vp.github.io"
  image:
    src: /github.png
    alt: Hero Image
  actions:
    - theme: brand
      text: Get Started
      link: /en-US/guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/AI-VP
      target: _blank
    - theme: alt
      text: Projects
      link: /en-US/project/
features:
  - icon: rocket-launch
    color: blue
    title: AI Docs Theme
    details: Custom VitePress theme components for large model knowledge base
    link: /en-US/project/themes
  - icon: paint-brush
    color: purple
    title: UI Component Library
    details: Shared UI components with full light / dark theme support
    link: /en-US/guide/custom-style
  - icon: globe-alt
    color: green
    title: Internationalization
    details: Built-in i18n for bilingual AI tutorials (EN / CN)
    link: /en-US/guide/i18n
  - icon: device-phone-mobile
    color: orange
    title: Responsive Layout
    details: Fully adaptive for desktop, tablet and mobile devices
  - icon: bolt
    color: amber
    title: Blazing Fast Build
    details: Powered by Vite, smooth hot-reload development experience
    link: https://vitejs.dev
    target: _blank
  - icon: magnifying-glass
    color: indigo
    title: Local Full-text Search
    details: Built-in offline search for your knowledge base
    link: /en-US/guide/search
featuresConfig:
  title: Why AI‑VP?
  description: VitePress ecosystem built specifically for AI tutorials & knowledge bases
  extraSection:
    title: Try It Now
    description: Build your AI knowledge site with our theme components
    tags:
      - AI Knowledge Base
      - Beautiful UI
      - TypeScript
      - Custom Layout
      - Bilingual Support
      - Mobile Friendly
quickStart:
  badge: 5 Minutes Setup
  title: Quick Start
  subtitle: Build AI Knowledge Documentation
  description: Create your AI tutorial site in a few simple steps with AI‑VP
  steps:
    - step: "01"
      icon: arrow-down-tray
      color: "blue"
      title: "Install Theme Package"
      description: Install the theme via pnpm / npm
      code: "pnpm add @ai-vp/theme-ak"
    - step: "02"
      icon: cog-8-tooth
      color: "green"
      title: "Import Theme Config"
      description: Import theme in your VitePress config
      code: |
        import { withAkTheme } from '@ai-vp/theme-ak/config'
        export default withAkTheme({
          // site config
        })
    - step: "03"
      icon: rocket-launch
      color: "purple"
      title: "Start Dev Preview"
      description: Run local dev server and preview site
      code: "pnpm dev"
  helpText: "Need help? Read full docs"
  helpLink: "/en-US/guide/quick-start"
  helpLinkText: "Quick Start Guide"
---
