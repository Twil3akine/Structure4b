// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// @ts-ignore
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            // @ts-ignore
            langs: ['c'],
        },
    },
    vite: {
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
            }
        }
    }
});