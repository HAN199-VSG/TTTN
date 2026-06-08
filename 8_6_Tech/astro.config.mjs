import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false, // Ép Astro dùng file global.css thủ công của bạn
  })],
});