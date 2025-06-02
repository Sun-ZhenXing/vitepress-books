import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './docs/.vitepress/components/**/*.{ts,vue}',
    './docs/**/*.md',
  ],
}
