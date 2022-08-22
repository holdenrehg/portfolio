<script>
    import { onMount } from 'svelte';
    import { siteData } from '$lib/siteData';

    export let title;
    export let description;
    export let image;
    export let url = undefined; // defaults to window.location.href
    export let follow = true;

    export let useTwitter = false;
    export let twitterCardType = 'summary';
    export let twitterHandle = siteData.twitter;
    export let twitterTitle = undefined; // defaults to title
    export let twitterDescription = undefined; // default to description
    export let twitterImage = undefined; // defaults to image

    export let useOpenGraph = false;
    export let ogType = 'website';
    export let ogTitle = undefined; // defaults to title
    export let ogDescription = undefined; // defaults to description
    export let ogUrl = undefined; // defaults to url
    export let ogPublishTime = undefined;
    export let ogModifyTime = undefined;
    export let ogTags = [];
    export let ogImage = undefined; // defaults to image

    let schema;

    /**
     * Generates the <script/> tag for SEO schema.
     *
     * This is done this way because adding a <script/> tag to the body of the
     * layout will error out (svelte tries to process it) and I don't see a
     * way to easily espace it.
     */
    function generateSchemaOrg() {
        const tag = 'script';
        const data = JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `"${ogUrl || url}"`,
            },
            headline: `"${ogTitle || title}"`,
            description: `"${(ogDescription || description || '')
                .replace(/\n/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()}}"`,
            image: `"${ogImage || image}"`,
            datePublished: `"${ogPublishTime}"`,
            dateModified: `"${ogModifyTime || ogPublishTime}"`,
            author: {
                '@type': 'Person',
                name: 'Holden Rehg',
            },
            publisher: {
                '@type': 'Organization',
                name: `"${ogTitle || title}"`,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteData.url}/images/portraits/self-portrait-1.jpg`,
                },
            },
        });

        return `<${tag} type="application/ld+json">${data}</${tag}>`;
    }

    onMount(() => {
        url = url || window.location.href;
        schema = generateSchemaOrg();
    });
</script>

<svelte:head>
    {#if title}
        <title>{title}</title>
        <meta itemprop="name" content={title} />
    {/if}

    {#if description}
        <meta name="description" content={description} />
        <meta itemprop="description" content={description} />
    {/if}

    {#if image}
        <meta itemprop="image" content={image} />
    {/if}

    {#if follow}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
    {:else}
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
    {/if}

    {#if useTwitter}
        <meta name="twitter:card" content={twitterCardType} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={twitterTitle || title} />
        <meta name="twitter:description" content={twitterDescription || description} />
        {#if twitterImage || image}
            <meta property="twitter:image" content={twitterImage || image} />
            <meta property="twitter:image:src" content={twitterImage || image} />
        {/if}
    {/if}

    {#if useOpenGraph}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta propety="og:url" content={ogUrl} />
        {#if ogImage || image}
            <meta property="og:image" content={ogImage || image} />
        {/if}
        {#if ogType === 'article'}
            {#if ogTags.length}
                <meta property="article:tag" content={ogTags.split(',')} />
            {/if}
            {#if ogPublishTime}
                <meta property="article:published_time" content={ogPublishTime.toISOString()} />
                {#if schema}
                    {@html schema}
                {/if}
            {/if}
            {#if ogModifyTime}
                <meta
                    property="article:modified_time"
                    content={(ogModifyTime || ogPublishTime).toISOString()}
                />
            {/if}
        {/if}
    {/if}
</svelte:head>
