<!--

<RecentArticles/>
    props:
        mode: grid|links: Set the view mode.
        count: Number of articles to display.

 -->
<script>
    import { onMount } from 'svelte';
    import { prettyDate } from '$lib/utils/date';
    import { fetchArticles, byMostRecentDate } from '$lib/blog';
    import ArticlePreview from '$lib/components/blog/ArticlePreview.svelte';

    export let count = 6;
    export let recentArticles = [];

    onMount(async () => {
        recentArticles = (await fetchArticles()).sort(byMostRecentDate).splice(0, count);
    });
</script>

<!-- `links` mode -->
{#if $$props.mode === 'links'}
    <div class="text-gray-900">
        <strong class="block text-gray-700 pb-3">
            I like to write, so check out some of my recent articles:
        </strong>
        <ul class="list-disc ml-3">
            {#each recentArticles as article}
                <li class="m-0 px-0 py-1">
                    <a href={`/blog/${article.meta.id}`} class="hover:text-indigo-800 hover:underline">
                        <span>{article.meta.title}</span>
                        <span class="text-xs text-gray-500">&nbsp;{prettyDate(article.meta.datePosted)}</span>
                    </a>
                </li>
            {/each}
        </ul>
        <a class="block pt-3 text-gray-700 hover:underline" href="/blog">
            <strong>-&gt; Or click here to see all my articles.</strong>
        </a>
    </div>
{/if}

<!-- `grid` mode -->
{#if $$props.mode === 'grid'}
    <div>
        <div class="mt-6 md:flex md:flex-wrap justify-between">
            {#each recentArticles as article}
                <div class="my-4" style="flex: 0 30%;">
                    <ArticlePreview meta={article.meta} />
                </div>
            {/each}
        </div>
    </div>
{/if}
