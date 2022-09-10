import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { syncFindArticleSlugs } from './src/lib/blog.js';
import * as fs from 'fs';
import * as path from 'path';

const articleSlugs = syncFindArticleSlugs(fs, path);
const config = {
    kit: {
        adapter: staticAdapter(),
        files: {
            lib: './src/lib',
        },
        prerender: {
            default: true,
            entries: [
                ...articleSlugs.map(slug => `/blog/${slug}`),
                ...articleSlugs.map(slug => `/blog/${slug}.raw`),
                '/blog/all.raw',
                '/sitemap.xml',
            ],
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
