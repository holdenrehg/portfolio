<!--

    <Article/>
        props:
            article: object: An object representing an article, with meta data
                content data. This should be the same type of object that is
                returned from the api endpoint /blog/[slug].raw.

 -->
<script>
    import { onMount, beforeUpdate } from 'svelte';
    import { prettyDate } from '$lib/utils/date';
    import { highlightAll } from '$lib/highlight';
    import { siteData } from '$lib/siteData';
    import { fetchArticle } from '$lib/blog';
    import ArticlePreview from './ArticlePreview.svelte';
    import SEO from '$lib/components/SEO.svelte';

    export let article;

    let meta = {};
    let content = {};
    let relatedArticles;

    async function fetchRelated(slugs) {
        return await Promise.all(slugs.map((slug) => fetchArticle(slug, { withContent: false })));
    }

    async function init() {
        meta = article.meta;
        content = article.content;
        relatedArticles = await fetchRelated(article.meta.related);
        highlightAll('code pre');
    }

    onMount(init);
    beforeUpdate(() => {
        if (article.meta.id !== meta.id) {
            init();
        }
    });
</script>

{#if Object.keys(meta).length}
    <SEO
        title={meta.title}
        description={(meta.description || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()}
        image={meta.coverImage
            ? `https://holdenrehg.com${meta.coverImage}`
            : 'https://holdenrehg.com/images/portraits/self-portrait-1.jpeg'}
        useTwitter={true}
        twitterCardType={meta.coverImage ? 'summary_large_image' : 'summary'}
        useOpenGraph={true}
        ogType="article"
        ogPublishTime={new Date(meta.datePosted)}
        ogModifyTime={new Date(meta.dateModified || meta.datePosted)}
    />
{/if}

<div class={Object.keys(meta).length && Object.keys(content).length ? '' : 'invisible'}>
    <div class="blog-article px-8 pt-16 md:px-20 pb-32 bg-white">
        <div class="content-wrapper pt-8">
            <!-- Article Header -->
            <div class="md:w-2/3 md:mx-auto text-lg">
                <p>
                    <a href="/blog" class="underline hover:opacity-75">Articles</a>
                    <span class="mx-1">&gt;</span>
                    <span>{meta.title}</span>
                </p>
            </div>

            <!-- Desktop Cover Image -->
            <div
                style={`background-image: url(${meta.coverImage})`}
                class="hidden bg-cover bg-center w-full h-104 my-10"
                class:md:block={meta.coverImage}
            />

            <!-- Meta Date -->
            <div class="md:w-2/3 md:mx-auto">
                <h1 id="blog-article-title" class="text-4xl font-extrabold mb-0">
                    <mark class="bg-indigo-100 hover:opacity-90 leading-14">
                        {meta.title}
                    </mark>
                </h1>
                {#if meta.subtitle}
                    <h2 id="blog-article-subtitle" class="text-xl mt-0">
                        {meta.subtitle}
                    </h2>
                {/if}
                <div class="mt-8">
                    <div class="inline-block mr-10">
                        <div class="font-bold">Written by</div>
                        <div class="text-lg">Holden Rehg</div>
                    </div>
                    {#if meta.datePosted}
                        <div class="inline-block">
                            <div class="font-bold">Posted on</div>
                            <div class="text-lg">{prettyDate(meta.datePosted)}</div>
                        </div>
                    {/if}
                </div>
            </div>
            <hr class="bg-gray-200 mt-12 mb-16" />

            <!-- Mobile Cover Image -->
            <div
                class="bg-cover bg-center w-full h-104 my-10"
                class:hidden={!meta.coverImage}
                class:md:hidden={meta.coverImage}
                style={`background-image: url(${meta.coverImage})`}
            />

            <!-- Main Article Content -->
            <div class="blog-article-content text-helvetica md:w-2/3 md:mx-auto">
                <div class="relative text-article tracking-article">
                    {@html $$props.article.content.html}
                </div>

                <!-- Article Footer -->
                <div class="border-t border-gray-400 mt-16">
                    <div>
                        <h3><strong>Thanks For Reading</strong></h3>
                        <p>
                            I appreciate you taking the time to read any of my articles. If you're looking for
                            more ramblings, take a look at the<a href="/blog"
                                >entire catalog of articles I've written</a
                            >. Or feel free to give me a follow on
                            <a href="https://twitter.com/reedrehg" rel="noreferrer" target="_blank">Twitter</a>,
                            <a href="https://www.instagram.com/reedrehg/" rel="noreferrer" target="_blank"
                                >Instagram</a
                            >, or
                            <a href="https://www.github.com/holdenrehg/" rel="noreferrer" target="_blank"
                                >Github</a
                            >
                            to see what else I've got going on. Or see my
                            <a href="#site-footer">contact info</a> below if you want to get in touch with me.
                        </p>
                    </div>

                    {#if meta.tags}
                        {#each meta.tags as tag}
                            <div
                                class={`mr-2 my-1 inline-block uppercase tracking-wider font-bold px-3 py-2 text-sm text-white bg-purple-800`}
                            >
                                {tag}
                            </div>
                        {/each}
                    {/if}

                    <div class="mt-8">
                        <span class="pr-5 text-xl align-middle"><strong>Share:</strong></span>
                        <span class="pr-5">
                            <a
                                href={`https://www.linkedin.com/shareArticle?url=${siteData.url}/blog/${
                                    meta.id
                                }&mini=true&title=Holden Rehg's Blog&summary=${encodeURIComponent(
                                    meta.title
                                )}&source=https://holdenrehg.com`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/icons/linkedin.svg"
                                    alt=""
                                    class="bg-blue-500 p-1 cursor-pointer inline-block align-middle"
                                    width="32px"
                                />
                            </a>
                        </span>
                        <span class="pr-5">
                            <a
                                href={`https://twitter.com/intent/tweet?url=${siteData.url}/blog/${
                                    meta.id
                                }&text=${encodeURIComponent(meta.title)} by @reedrehg`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/icons/twitter.svg"
                                    alt=""
                                    class="bg-blue-300 p-1 cursor-pointer inline-block align-middle"
                                    width="32px"
                                />
                            </a>
                        </span>
                    </div>
                    <div class="mt-24">
                        <!-- TODO: Comments section. -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Page Footer -->
    <div class="relative text-center py-40 px-8 md:px-20 bg-purple-50">
        <div class="w-full">
            <div
                class="mx-auto rounded-full bg-cover bg-center border-4 border-gray-400"
                style="background-image: url(/images/portraits/self-portrait-1.jpeg); width: 80px; height: 80px;"
            />
            <p class="mx-auto mt-6 text-xl text-gray-900">Holden Rehg, Author</p>
            {#if meta.datePosted}
                <p class="mx-auto text-lg text-gray-800">Posted {prettyDate(meta.datePosted)}</p>
            {/if}
        </div>
        {#if relatedArticles}
            <div class="mt-10">
                <h3 class="text-3xl font-bold mb-4">Other articles you might like</h3>
                <div class="content-wrapper md:flex md:justify-between mb-8">
                    {#each relatedArticles as relatedArticle}
                        <div class="my-4" style="flex: 0 31%;">
                            <ArticlePreview meta={relatedArticle.meta} />
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>
