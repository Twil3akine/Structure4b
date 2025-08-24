import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { fileURLToPath } from 'url';
import cloudflare from '@astrojs/cloudflare';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    output: 'server',
    adapter: cloudflare(),
    integrations: [
        mdx({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        }),
        react(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: ['c'],
        },
    },
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                ...(import.meta.env.PROD ? { 'react-dom/server' : 'react-dom/server.edge' } : {}),
            }
        },
        plugins: [
            svgr(),
        ]
    }
});