import { fetchArticle } from '$lib/blog';

/**
 * API endpoint /blog/[slug].raw
 *
 * Fetches a single articles's metadata.
 *
 * Query Params:
 *     content: boolean: If true, includes the article's html contents. Defaults to true.
 */
export async function get({ params, query }) {
    const slug = params.slug;
    const withContent = !query.has('content') ? true : JSON.parse(query.get('content'));
    return {
        body: await fetchArticle(slug, { withContent: withContent }),
    };
}
