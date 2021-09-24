import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import { fetchArticle } from '$lib/blog';

/**
 * API endpoint /blog/all.raw
 *
 * Fetches meta data for every blog articles.
 *
 * Query Params:
 *     content: boolean: If true, includes the article's html contents. Defaults to true.
 */
export async function get({ query }) {
    const articlesPath = 'src/lib/articles';
    const isDir = (src) => lstatSync(src).isDirectory();
    const slugs = readdirSync(articlesPath).filter((fileName) => isDir(join(articlesPath, fileName)));
    const withContent = !query.has('content') ? true : JSON.parse(query.get('content'));

    return {
        body: {
            articles: await Promise.all(
                slugs.map((slug) => fetchArticle(slug, { withContent: withContent })),
            ),
        },
    };
}
