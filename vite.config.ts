import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@pages': new URL('./src/pages', import.meta.url).pathname,
      '@routes': new URL('./src/routes', import.meta.url).pathname,
      '@utils': new URL('./src/utils', import.meta.url).pathname,
    }
  }
})