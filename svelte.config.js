import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        target: '#svelte',
        adapter: adapter({
            precompress: true,
        }),
    },

    preprocess: [
        sveltePreprocess({
            defaults: { style: 'postcss' },
            postcss: true,
        }),
    ],

    prerender: {
        enabled: true,
        crawl: true,
        force: true,
        pages: ['*'],
    },
};

export default config;
