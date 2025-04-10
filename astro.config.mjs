// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
// @ts-ignore
import { fileURLToPath } from 'url';
import cloudflare from '@astrojs/cloudflare';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
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
            // @ts-ignore
            langs: ['c'],
        },
    },
    vite: {
        // base: '/',
        server: {
            host: '0.0.0.0',
            watch: {
                usePolling: true,
                interval: 500,
            },
        },
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