import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/css/const.less')}";`
      }
    }
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
    ]
  },
})
