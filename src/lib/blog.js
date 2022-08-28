export const Tags = {
    Budgeting: 'budgeting',
    Business: 'business',
    BusinessDevelopment: 'business development',
    BusinessStrategy: 'business strategy',
    CloudComputing: 'cloud computing',
    DevTools: 'devtools',
    Docker: 'docker',
    Entrepreneurship: 'entrepreneurship',
    Erp: 'erp',
    FinancialIndependence: 'financial independence',
    Flask: 'flask',
    Investments: 'investments',
    Leadership: 'leadership',
    Nginx: 'nginx',
    OpenSource: 'open source',
    Odoo: 'odoo',
    Productivity: 'productivity',
    ProjectManagement: 'project management',
    Python: 'python',
    Refactoring: 'refactoring',
    SaaS: 'software as a service',
    SmallBusiness: 'small business',
    Software: 'software',
    SoftwareCraftsmanship: 'software craftsmanship',
    SoftwareTesting: 'software testing',
    Stripe: 'stripe',
    UnitTesting: 'unit testing',
    WebDevelopment: 'web development',
};

/**
 * Dynamically import an articles details based on its slug id.
 */
export async function fetchArticle(slug, { withContent = true } = {}) {
    slug = slug.replace('.js', '');  // bug from the static build process, appends .js
    const meta = (await import(`$lib/articles/${slug}/meta.js`)).default;

    if (withContent) {
        const content = (await import(`$lib/articles/${slug}/Content.svelte`)).default.render();
        return {
            meta: meta,
            content: content,
        };
    }

    return {
        meta: meta,
    };
}

/**
 * Fetch all article information from the blog via the /blog/all.raw endpoint.
 *
 *     fetchArticles()
 *         [
 *             {meta: { ... }, content: {html: ...}},
 *             {meta: { ... }, content: {html: ...}},
 *             {meta: { ... }, content: {html: ...}},
 *         ]
 */
export async function fetchArticles() {
    const res = await fetch(`/blog/all.raw`);
    const body = await res.json();

    return body.articles;
}

export async function findArticleSlugs() {
    return syncFindArticleSlugs(
        await import('fs'),
        await import('path'),
    );
}

export function syncFindArticleSlugs(fs, path) {
    const articlesPath = 'src/lib/articles';
    const isDir = (src) => fs.lstatSync(src).isDirectory();
    const slugs = fs.readdirSync(articlesPath).filter((fileName) => isDir(path.join(articlesPath, fileName)));

    return slugs;
}

/**
 * Finds articles on the filesystem and pulls information from them.
 *
 * This depends on the filesystem and node, so cannot be used from the frontend.
 */
export async function findArticles({ slugs = undefined } = {}) {
    if (slugs === undefined) slugs = await findArticleSlugs();
    const articles = await Promise.all(slugs.map((slug) => fetchArticle(slug)));

    return articles;
}

/**
 * Compare function for two articles, sorts by most recent articles to
 * oldest articles.
 *
 *     articles = await fetchArticles()
 *     articles = articles.sort(byMostRecentDate)
 */
export function byMostRecentDate(articleA, articleB) {
    return new Date(articleB.meta.datePosted) - new Date(articleA.meta.datePosted);
}

export class Meta {
    /**
     * The fields that are required to create a Meta object.
     */
    static required = ['id', 'title', 'description', 'contentSnippet', 'datePosted'];

    /**
     * Default values for the Meta object fields.
     */
    static defaults = {
        backgroundColor: '#292b2b',
        textDecorationColor: '#a0aec0',
    };

    /**
     * Construct a new Meta object, validating that all required fields were
     * included, and setting properties.
     *
     * These objects are expected to store the following information:
     *     - id (str): unique id that will be use for the url
     *     - title (str): main title of the article
     *     - subtitle (str): subtitle of the article
     *     - description (str): short description of the article
     *     - datePosted (str): date posted formatted as YYYY-MM-DD
     *     - coverImage (str): src path to the cover image
     *     - tags (str): comma separated list of tags to describe the article
     */
    constructor(data) {
        // check for required fields...
        for (const field of Meta.required) {
            if (!data[field]) throw Error(`Field ${field} is required for Meta.`);
        }

        // set user-defined values on the object
        for (const field of Object.keys(data)) {
            this[field] = data[field];
        }

        // set any defaults
        for (const field of Object.keys(Meta.defaults)) {
            if (!this.hasOwnProperty(field)) {
                this[field] = Meta.defaults[field];
            }
        }
    }
}
