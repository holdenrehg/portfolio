import { findArticles } from '$lib/blog';

/**
 * API endpoint /blog/all.raw
 *
 * Fetches meta data for every blog articles.
 *
 * Query Params:
 *     content: boolean: If true, includes the article's html contents. Defaults to true.
 */
export async function get({ query }) {
    const withContent = !query.has('content') ? true : JSON.parse(query.get('content'));

    return {
        body: {
            articles: await findArticles({ withContent: withContent }),
        },
    };
}
