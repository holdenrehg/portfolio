import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        target: '#svelte',
        adapter: adapter(),
    },

    preprocess: [
        sveltePreprocess({
            defaults: { style: 'postcss' },
            postcss: true,
        }),
    ],
};

export default config;
