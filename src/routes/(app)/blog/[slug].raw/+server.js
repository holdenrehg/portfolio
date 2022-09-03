import { fetchArticle } from '$lib/blog';

/**
 * API endpoint /blog/[slug].raw
 *
 * Fetches a single articles's metadata.
 */
export async function GET({ params }) {
    return new Response(
        JSON.stringify(await fetchArticle(params.slug))
    );
}
