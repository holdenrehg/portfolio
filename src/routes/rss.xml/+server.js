import { siteData } from '$lib/siteData';
import { findArticles } from '$lib/blog';

function rssXml(articles) {
    return `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
        <channel>
            <title>${siteData.blogTitle}</title>
            <description>${siteData.description}</description>
            <link>${siteData.url}/blog</link>
            <atom:link href="${siteData.url}/rss.xml" rel="self" type="application/rss+xml"/>

            ${articles
                .map((article) => {
                    return `
                        <item>
                            <title>${article.meta.title}</title>
                            <description>${article.meta.description}</description>
                            <link>${siteData.url}/blog/${article.meta.id}</link>
                            <guid isPermaLink="false">${siteData.url}/blog/${article.meta.id}</guid>
                            <pubDate>${new Date(article.meta.datePosted)}</pubDate>
                            <content:encoded>${article.meta.contentSnippet}<br/>
                                <p>
                                    Continue reading the full post at <a rel="nofollow" href="${
                                        siteData.url
                                    }/blog/${article.meta.id}">${siteData.url}</a>.
                                </p>
                            </content:encoded>
                        </item>
                    `;
                })
                .join('')}
        </channel>
    </rss>
    `;
}

export async function GET() {
    const body = rssXml(await findArticles());
    return new Response(body, {
        headers: {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
        }
    });
}
