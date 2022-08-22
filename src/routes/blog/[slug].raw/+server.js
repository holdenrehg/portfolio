import { fetchArticle } from '$lib/blog';

/**
 * API endpoint /blog/[slug].raw
 *
 * Fetches a single articles's metadata.
 *
 * Query Params:
 *     content: boolean: If true, includes the article's html contents. Defaults to true.
 */
export async function GET({ params, url }) {
    const slug = params.slug;
    const withContent = !url.searchParams.has('content') ? true : JSON.parse(url.searchParams.get('content'));
    const body = await fetchArticle(slug, { withContent: withContent });

    return new Response(JSON.stringify(body));
}
