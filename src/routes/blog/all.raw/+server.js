import { findArticles } from '$lib/blog';

/**
 * API endpoint /blog/all.raw
 *
 * Fetches meta data for every blog articles.
 */
export async function GET() {
    return new Response(JSON.stringify({
        articles: await findArticles(),
    }));
}
