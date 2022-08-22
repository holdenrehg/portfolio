import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            default: true
        },
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
