import { align } from '@mdit/plugin-align'
import { attrs } from '@mdit/plugin-attrs'
import { demo, MarkdownItDemoOptions } from '@mdit/plugin-demo'
import { footnote } from '@mdit/plugin-footnote'
import { icon, iconifyRender, MarkdownItIconOptions } from '@mdit/plugin-icon'
import { katex } from '@mdit/plugin-katex'
import { plantuml } from '@mdit/plugin-plantuml'
import { MarkdownItStylizeOptions, stylize } from '@mdit/plugin-stylize'
import { tasklist } from '@mdit/plugin-tasklist'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'
import tailwindcss from '@tailwindcss/vite'
import { slug as slugify } from 'github-slugger'
import path from 'node:path'
import process from 'node:process'
import AutoSidebarPlugin from 'vite-plugin-vitepress-auto-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { refactorSidebar } from './utils/catalog'
import { stylizeConfig } from './utils/stylize'


const isDev = process.env.npm_lifecycle_event?.endsWith('dev') ?? false
const HOST = process.env.HOST_URL ?? 'https://blog.alexsun.top'
const BASE = process.env.BASE_URL ?? '/vitepress-template/'
const REPO = process.env.REPO_URL ?? 'https://github.com/Sun-ZhenXing/vitepress-template'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "鸭梨文档模板",
  description: "VitePress 全功能模板",
  lang: 'zh-Hans',
  base: BASE,

  srcExclude: isDev ? [] : ['**/TODO.md', 'private/**/*.md'],

  router: {
    prefetchLinks: false,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    editLink: isDev ? {
      pattern: `${REPO}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页面',
    } : undefined,

    footer: {
      message: `基于
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC-BY-NC-SA 4.0</a> 协议共享知识 |
        构建时间：${new Date().toLocaleString()}`,
      copyright: `版权所有 ©${new Date().getFullYear()} Alex Sun`,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sun-ZhenXing' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: isDev ? undefined : {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选择',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上一个',
              navigateDownKeyAriaLabel: '下一个',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭搜索框',
            },
          },
        },
      },
    },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
    headers: {
      slugify,
    },
    anchor: {
      slugify,
    },
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache({
          dir: path.join(import.meta.dirname, 'cache/twoslash'),
        }),
      }) as any,
    ],
    config(md) {
      md.use(tabsMarkdownPlugin)
        .use(katex)
        .use(footnote)
        .use(plantuml)
        .use(demo, <MarkdownItDemoOptions>{
          openRender: (tokens) => {
            const text = tokens
              .filter((token) => token.type === 'demo_close')
              .map((token) => token.info)[0] || ''
            return `<details class="details custom-block"><summary>${text}</summary>`
          },
          closeRender: () => '</details>',
        })
        .use(attrs)
        .use(align)
        .use(tasklist)
        .use(icon, <MarkdownItIconOptions>{
          render: iconifyRender,
        })
        .use(stylize, <MarkdownItStylizeOptions>{
          config: stylizeConfig,
        })
    },
    async shikiSetup(highlighter) {
      await highlighter.loadLanguage('jinja')
    },
  },
  sitemap: {
    hostname: `${HOST}${BASE}`,
    lastmodDateOnly: true,
  },

  ignoreDeadLinks: 'localhostLinks',

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['iconify-icon'].includes(tag),
      }
    }
  },

  vite: {
    plugins: [
      tailwindcss() as any,
      AutoSidebarPlugin({
        collapsed: false,
        titleFromFile: true,
        sideBarResolved: (data) => {
          return refactorSidebar(data)
        },
      }),
    ],
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
        strictRequires: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
})
