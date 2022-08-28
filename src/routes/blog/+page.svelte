<script>
    import * as fs from 'fs';
    import * as path from 'path';
    import debounce from 'debounce';
    import { onMount } from 'svelte';
    import { fetchArticles, byMostRecentDate } from '$lib/blog';
    import ArticlePreview from '$lib/components/blog/ArticlePreview.svelte';
    import SEO from '$lib/components/SEO.svelte';
    import { siteData } from '$lib/siteData';

    export let data;

    let {
        articles = [],
        currentArticles = [],
        tags = [],
        tagLimit = 5,
        loading = true,
        searchQuery
    } = data;

    /**
     * Converts a string to an alphanumeric (with spaces) string.
     */
    function alphanumeric(data) {
        return (data || '').replace(/[^0-9a-z ]/gi, '');
    }

    /**
     * Checks if a given query contains any of the given tags.
     */
    function matchesTag(query, tags) {
        for (const tag of tags) {
            if (query.includes(alphanumeric(tag).toLowerCase())) {
                return true;
            }
        }

        return false;
    }

    async function onSearch() {
        const query = alphanumeric(searchQuery).toLowerCase();
        let results = articles;

        if (query) {
            results = articles.filter((article) => {
                return (
                    alphanumeric(article.meta.title || '')
                        .toLowerCase()
                        .includes(query) ||
                    alphanumeric(article.meta.subtitle || '')
                        .toLowerCase()
                        .includes(query) ||
                    matchesTag(query, article.meta.tags || [])
                );
            });
        }

        currentArticles = results.sort(byMostRecentDate);

        if (typeof window !== 'undefined' && window.hasOwnProperty('gtag')) {
            window.gtag('event', 'search', {
                search_term: query,
            });
        }
    }

    onMount(async () => {
        articles = (await fetchArticles()).sort(byMostRecentDate);
        currentArticles = articles;
        tags = [...new Set([].concat(...articles.map((article) => article.meta.tags)))];
        loading = false;
    });
</script>

<SEO
    title="Software, Business, and Investing Articles from Holden Rehg"
    description="I'm writing for readers who are trying to learn more about software development, python, odoo, small business practices, or investing."
    image={`${siteData.url}/images/portraits/self-portrait-1.jpg`}
    useTwitter={true}
    useOpenGraph={true}
/>

<div class="blog-article px-8 pt-10 md:px-20 pb-32">
    <div class="content-wrapper pt-12">
        <div class="mx-auto">
            <div class="md:w-2/3 mx-auto text-center">
                <h2
                    class="text-4xl text-indigo-900 text-vollkorn tracking-tighter"
                >
                    <mark class="bg-indigo-100 hover:opacity-90">
                        Sharing my experiences to help programmers, managers, and business owners.
                    </mark>
                </h2>
                <div class="md:w-3/5 mx-auto flex items-center mt-8 gap-6">
                    <img
                        src="/images/portraits/self-portrait-1.jpg"
                        alt="Portrait of Holden Rehg"
                        class="rounded-full"
                        style="filter: grayscale(35%);"
                        width="80px"
                    />
                    <p class="mt-3 text-base">
                        Subscribe to my newsletter and I'll do what I can to help you build better software.
                    </p>
                </div>
                <div id="revue-embed" class="mt-10">
                    <form action="https://www.getrevue.co/profile/reedrehg/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                        <div class="flex items-center justify-center">
                            <input
                                class="revue-form-field w-full text-lg py-1 px-3 border border-gray-500"
                                placeholder="Your email address..."
                                type="email"
                                name="member[email]"
                                id="member_email"
                            />
                            <input
                                class="px-3 py-1 bg-purple-600 border border-purple-600 text-purple-100 text-lg font-bold"
                                type="submit"
                                value="Subscribe"
                                name="member[subscribe]"
                                id="member_submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <hr class="lg:my-20 w-full my-12 bg-gray-300"/>
            <form on:submit={(event) => event.preventDefault()}>
                <div class="w-full relative">
                    <label for="articleSearch" class="sr-only">Search</label>
                    <img
                        src="/icons/magnifying-glass.svg"
                        alt=""
                        class="absolute"
                        width="20"
                        height="20"
                        style="left: 0; top: 10px; left: 1rem;"
                    />
                    <input
                        on:keyup={debounce(onSearch, 200)}
                        bind:value={searchQuery}
                        type="text"
                        name="articleSearch"
                        id="articleSearch"
                        class="w-full py-2 pl-16 pr-5 text-xl text-900 placeholder-gray-700 border border-gray-400 shadow-sm focus:ring-purple-400 focus:border-purple-400 block rounded-md"
                        placeholder="What are you looking for?"
                        autocomplete="false"
                    />
                </div>
            </form>
            <div class="mt-6">
                {#each tags.slice(0, tagLimit) as tag}
                    <div
                        on:click={() => {
                            searchQuery = tag;
                            debounce(onSearch, 200)();
                        }}
                        class="cursor-pointer bg-gray-300 hover:bg-gray-400 text-xs text-gray-600 mr-2 my-1 inline-block uppercase tracking-wider font-bold px-2 py-1"
                    >
                        {tag}
                    </div>
                {/each}

                {#if tagLimit < tags.length}
                    <button on:click={() => (tagLimit = 1000)} class="ml-4 underline text-purple-600">
                        more tags...
                    </button>
                {:else}
                    <button on:click={() => (tagLimit = 5)} class="ml-4 underline text-purple-600">
                        less tags...
                    </button>
                {/if}
            </div>
            {#if loading}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto mt-16 animate-spin icon icon-tabler icon-tabler-rotate-clockwise-2"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
                    <line x1="5.63" y1="7.16" x2="5.63" y2="7.17" />
                    <line x1="4.06" y1="11" x2="4.06" y2="11.01" />
                    <line x1="4.63" y1="15.1" x2="4.63" y2="15.11" />
                    <line x1="7.16" y1="18.37" x2="7.16" y2="18.38" />
                    <line x1="11" y1="19.94" x2="11" y2="19.95" />
                </svg>
            {:else}
                <div class="md:flex md:flex-wrap md:justify-between">
                    {#if !currentArticles.length}
                        <p class="mt-10 text-xl text-gray-600">
                            Sorry, no articles yet for that query. Send me an email and let me know what
                            you're looking for.
                        </p>
                    {:else}
                        {#each currentArticles as article}
                            <div class="my-4" style="flex: 0 48%;">
                                <ArticlePreview meta={article.meta} />
                            </div>
                        {/each}
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>
