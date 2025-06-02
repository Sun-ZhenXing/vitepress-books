import type { MarkdownItStylizeOptions } from '@mdit/plugin-stylize'

export const stylizeConfig: MarkdownItStylizeOptions['config'] = [
  {
    matcher: /@.{1,99}/,
    replacer: ({ tag, content }) => {
      if (tag !== 'em') {
        return null
      }
      // 定义 @def
      if (content === '@def') {
        return {
          attrs: { type: 'tip' } as Record<string, string>,
          content: '定义',
          tag: 'Badge',
        }
      }
      // TODO @TODO
      if (content === '@TODO') {
        return {
          attrs: { type: 'danger' } as Record<string, string>,
          content: 'TODO',
          tag: 'Badge',
        }
      }
      // @note:.+
      if (content.startsWith('@note:')) {
        return {
          attrs: { type: 'warning' } as Record<string, string>,
          content: content.split(':')[1],
          tag: 'Badge',
        }
      }
      // @@.+
      if (content.startsWith('@@')) {
        return {
          attrs: {} as Record<string, string>,
          content: content.split('@@')[1],
          tag: content.split('@@')[1],
        }
      }
      return null
    }
  },
]
