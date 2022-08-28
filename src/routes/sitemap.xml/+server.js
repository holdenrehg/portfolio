import { siteData } from '$lib/siteData';
import { findArticles } from '$lib/blog';

function sitemapXml(routes) {
    return `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        >
            ${routes.map((route) => {
                return `<url>
                    <loc>${siteData.url}/${route.name}</loc>
                    <changefreq>${route.frequency}</changefreq>
                    <priority>0.7</priority>
                </url>`;
            }).join('')}
        </urlset>
    `;
}

export async function GET() {
    const staticRoutes = ['', 'books', 'work-with-me', 'portfolio', 'blog'];
    const articles = await findArticles();
    const body = sitemapXml([
        ...staticRoutes.map((route) => {
            return { name: route, frequency: 'yearly' };
        }),
        ...articles.map((article) => {
            return { name: `blog/${article.meta.id}`, frequency: 'daily' };
        }),
    ]);

    return new Response(body, {
        headers: {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
        },
    });
}
