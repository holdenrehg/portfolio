import { findArticles } from '$lib/blog';

/**
 * API endpoint /blog/all.raw
 *
 * Fetches meta data for every blog articles.
 *
 * Query Params:
 *     content: boolean: If true, includes the article's html contents. Defaults to true.
 */
export async function GET({ url }) {
    const withContent = !url.searchParams.has('content') ? true : JSON.parse(url.searchParams.get('content'));

    return new Response(JSON.stringify({
        articles: await findArticles({ withContent: withContent }),
    }));
}
