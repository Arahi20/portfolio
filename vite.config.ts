import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import fs from 'fs';

const generateSitemap = () => ({
  name: 'generate-sitemap',
  writeBundle() {
    const today = new Date().toISOString().split('T')[0];
    const routes = [
      { path: '', priority: '1.0' },
      { path: 'experience', priority: '0.8' },
      { path: 'work', priority: '0.8' },
      { path: 'writing', priority: '0.8' },
      { path: 'education', priority: '0.8' },
    ];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>https://ahmed-rahi.com/${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
    fs.writeFileSync('dist/sitemap.xml', sitemap);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generateSitemap()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    globals: true,
  },
});
