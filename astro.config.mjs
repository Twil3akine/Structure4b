// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

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
                interval: 2000,
            },
        },
    }
});