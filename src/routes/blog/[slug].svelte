<script context="module">
    export const hydate = false;

    export async function load({ page, fetch }) {
        const res = await fetch(`/blog/${page.params.slug}.raw`);
        const body = await res.json();

        return {
            props: {
                article: body,
            },
        };
    }
</script>

<script>
    import Article from '$lib/components/blog/Article.svelte';

    export let article;
</script>

<Article meta={article.meta} content={article.content} />
