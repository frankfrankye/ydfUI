import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue()
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src') // setting alias
    }
  },
})
