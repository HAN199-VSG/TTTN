import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Hoặc @vitejs/plugin-vue tùy dự án của bạn
import tailwindcss from '@tailwindcss/vite' // <-- 1. Thêm dòng import này

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Thêm hàm này vào mảng plugins
  ],
})