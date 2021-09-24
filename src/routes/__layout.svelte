<script>
    import '../styles';
    import SiteHeader from '$lib/components/SiteHeader.svelte';
    import SiteFooter from '$lib/components/SiteFooter.svelte';
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
