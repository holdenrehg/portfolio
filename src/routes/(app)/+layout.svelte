<script>
    export const prerender = true;

    import '../../styles';
    import SiteHeader from '$lib/components/SiteHeader.svelte';
    import SiteFooter from '$lib/components/SiteFooter.svelte';

    const mode = process.env.NODE_ENV;


    /**
     * Generates the <script/> tags needed for google analytics.
     *
     * This is done this way because adding a <script/> tag to the body of the
     * layout will error out (svelte tries to process it) and I don't see a
     * way to easily espace it.
     */
    function googleAnalyticsScripts() {
        const tag = 'script';

        return `
            <${tag} async="" src="https://www.googletagmanager.com/gtag/js?id=G-ZVW2NCS07K"></${tag}>
            <${tag}>
                if (true) {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        window.dataLayer && window.dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'G-ZVW2NCS07K', { send_page_view: false });
                }
            </${tag}>
        `;
    }
</script>

<div class="overflow-x-scroll md:overflow-x-hidden mx-auto">
    <div class="max-w-screen-xl mx-auto">
        <SiteHeader />
        <div class="md:hidden w-full h-20" />
    </div>
    <div class="relative">
        <main class="max-w-screen-xl mx-auto">
            <slot />
            <div class="clear-both" />
        </main>
        <SiteFooter />
    </div>
</div>

{#if mode === 'production'}
    {@html googleAnalyticsScripts()}
{/if}
