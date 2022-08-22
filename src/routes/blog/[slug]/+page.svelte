<script context="module">
    export const hydate = false;

    export async function load({ params, fetch }) {
        const res = await fetch(`/blog/${params.slug}.raw`);
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

    export let data;

    let {article} = data;
</script>

<Article meta={article.meta} content={article.content} />
