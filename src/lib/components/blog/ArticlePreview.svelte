<script>
    import { prettyDate } from '$lib/utils/date';
    import { ellipsis } from '$lib/utils/text';

    export let meta;
</script>

{#if meta.coverImage}
    <a
        sveltekit:prefetch
        href={`/blog/${meta.id}`}
        class="block opacity-90 cursor-pointer hover:underline hover:opacity-100"
    >
        <div class="w-full mb-4 bg-gray-200 overflow-hidden" style="max-height: 16rem;">
            <img src={meta.thumbnailImage} alt="" class="w-full my-auto mx-auto" loading="lazy" />
        </div>
        <p class="text-xs md:text-base text-gray-600">{prettyDate(meta.datePosted)}</p>
        <p class="text-lg md:text-xl font-bold">{meta.title}</p>
        <p class="md:text-lg mt-3 text-gray-600">{ellipsis(meta.description, 210)}</p>
        <div class="mt-4">
            {#if meta.tags}
                {#each meta.tags as tag}
                    <div
                        class={`mr-2 my-1 inline-block uppercase tracking-wider font-bold px-2 py-1 text-xs text-gray-600 bg-gray-200`}
                    >
                        {tag}
                    </div>
                {/each}
            {/if}
        </div>
    </a>
{:else}
    <!-- "no cover image" article preview style has a dark background, light -->
    <!-- font, bigger padding to stand out. -->
    <a
        sveltekit:prefetch
        href={`/blog/${meta.id}`}
        class="block py-16 cursor-pointer hover:underline hover:opacity-100 md:min-height-400"
        style={`background-color: ${meta.backgroundColor}; color: ${meta.textDecorationColor}`}
    >
        <div class="flex flex-col items-center justify-center h-full text-center py-6 px-3 md:px-10">
            <p class="text-xs opacity-70 md:text-base">{prettyDate(meta.datePosted)}</p>
            <p class="text-lg md:text-xl font-bold">{meta.title}</p>
            <p class="mt-3 opacity-70 md:text-lg">{ellipsis(meta.description, 210)}</p>
            <div class="mt-6 md:mt-12">
                {#if meta.tags}
                    {#each meta.tags as tag}
                        <div
                            class={`mr-2 my-1 inline-block uppercase tracking-wider font-bold px-2 py-1 text-xs text-gray-600 bg-gray-200`}
                        >
                            {tag}
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </a>
{/if}
