<script>
    import { onMount } from 'svelte';

    const speed = 1000;
    export let currentIndex = 0;
    export const portraitPaths = [
        '/images/portraits/self-portrait-1.jpg',
        '/images/portraits/self-portrait-2.jpg',
        '/images/portraits/self-portrait-3.jpg',
        '/images/portraits/self-portrait-4.jpg',
    ];

    /**
     * Display the next portrait image.
     */
    const nextPortrait = () => {
        currentIndex = (currentIndex + 1) % portraitPaths.length;
    };

    onMount(() => {
        const timer = setInterval(nextPortrait, speed);
        return () => clearInterval(timer);
    });
</script>

<div
    class="relative w-64 h-72 mx-auto bg-gray-100 shadow-xl border border-gray-500 border-dotted rounded-full overflow-hidden"
>
    {#each portraitPaths as portraitSrc, index}
        <img
            src={portraitSrc}
            alt="Portrait of Holden Rehg"
            class="absolute"
            class:hidden={currentIndex !== index}
            style="bottom: -20px; filter: grayscale(65%);"
        />
    {/each}
</div>
