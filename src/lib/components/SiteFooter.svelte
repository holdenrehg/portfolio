<script>
    import Socials from '$lib/components/Socials.svelte';
</script>

<div id="site-footer" class="z-40 w-full">
    <footer class="w-full min-h-64 px-8 md:px-20 py-10 bg-gray-800 text-vollkorn">
        <div class="content-wrapper text-indigo-50 text-left max-w-screen-xl">
            <p class="pb-3 text-3xl font-bold uppercase tracking-wider text-roboto">
                <span>Holden Rehg</span>
            </p>
            <div class="flex flex-col gap-1 text-lg">
                <a href="/portfolio" class="hover:underline">
                    <span>Portfolio</span>
                </a>
                <a href="/blog" class="hover:underline">
                    <span>Blog</span>
                </a>
                <a href="/#about-me" class="hover:underline">
                    <span>About Me</span>
                </a>
                <a href="mailto:holdenrehg@gmail.com" class="hover:underline">
                    <span>Email me</span>
                </a>
            </div>

            <Socials class="gap-6 my-12" color="indigo-50" size="26px" />

            <div class="my-1">
                <p class="text-lg">
                    <span>Site built with</span>
                    <a href="https://kit.svelte.dev/" target="_blank">
                        <u>SvelteKit</u>
                    </a>
                </p>
                <p class="text-lg">
                    <span>See the code for this site on</span>
                    <a href="https://github.com/holdenrehg/portfolio/" target="_blank">
                        <u>GitHub</u>
                    </a>
                </p>
            </div>
        </div>
    </footer>
</div>
