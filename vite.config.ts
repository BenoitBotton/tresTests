import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas' || ['primitive'].includes(tag),
          ...templateCompilerOptions,
        },
      },
    }
  )],
})
