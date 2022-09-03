<script>
    import Socials from '$lib/components/Socials.svelte';

    export let menuOpen = false;
</script>

<div id="site-header" class="relative">
    <div class="mx-auto">
        <!-- Desktop Menu -->
        <div
            class="hidden md:flex justify-between items-center px-8 md:px-20 py-8 text-helvetica text-indigo-900 font-semibold mx-auto"
            style="font-size: 0.96rem;"
        >
            <div class="flex flex-col gap-1">
                <div>
                    <a class="cursor-pointer hover:underline" href="/portfolio">
                        <!-- tablericons: notebook -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-notebook"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
                            />
                            <line x1="13" y1="8" x2="15" y2="8" />
                            <line x1="13" y1="12" x2="15" y2="12" />
                        </svg>
                        <span>Portfolio</span>
                    </a>
                </div>
                <div>
                    <a class="cursor-pointer hover:underline" href="/blog">
                        <!-- tablericons: news -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-news"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
                            />
                            <line x1="8" y1="8" x2="12" y2="8" />
                            <line x1="8" y1="12" x2="12" y2="12" />
                            <line x1="8" y1="16" x2="12" y2="16" />
                        </svg>
                        <span>Blog</span>
                    </a>
                </div>
                <div>
                    <a class="cursor-pointer hover:underline" href="/#about-me">
                        <!-- tablericons: user -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-user"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <span>About me</span>
                    </a>
                </div>
                <div>
                    <a class="cursor-pointer hover:underline" href="mailto:holdenrehg@gmail.com">
                        <!-- tablericons: send -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline mr-2 w-5 h-5 icon icon-tabler icon-tabler-send"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path
                                d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
                            />
                        </svg>
                        <span>Email me</span>
                    </a>
                </div>
            </div>

            <div
                class="uppercase absolute left-0 right-0 mx-auto flex flex-col text-center items-center text-indigo-900"
                style="width: 200px;"
            >
                <a href="/">
                    <span class="block text-knewave text-3xl">HR</span>
                    <span class="block text-sm tracking-normal font-bold">Holden Rehg</span>
                </a>
            </div>

            <Socials class="gap-8" color="indigo-900" size="26px" />
        </div>

        <hr class="px-20 mx-auto mt-5 bg-indigo-900" style="opacity: 12%;" />

        <!-- Mobile Menu -->
        <div class="fixed top-0 inset-x-0 transition transform origin-top-right z-50 border-b md:hidden">
            <div
                class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                class:rounded-sm={menuOpen}
                class:shadow-lg={menuOpen}
            >
                <div class="pt-5 pb-6 px-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <div>
                                <a
                                    href="/"
                                    class="cursor-pointer opacity-75 hover:opacity-100 text-knewave text-3xl"
                                >
                                    <img src="/images/cartoon.jpg" class="inline pr-3 h-10 align-middle" />
                                    <span class="align-middle">HR</span>
                                </a>
                            </div>
                        </div>
                        <div class="-mr-2">
                            <button
                                on:click={() => (menuOpen = false)}
                                type="button"
                                class="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                                class:hidden={!menuOpen}
                            >
                                <span class="sr-only">Close menu</span>
                                <svg
                                    class="h-10 w-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <button
                                on:click={() => (menuOpen = true)}
                                type="button"
                                class="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                                class:hidden={menuOpen}
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open menu</span>
                                <svg
                                    class="h-10 w-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-8" class:hidden={!menuOpen}>
                        <nav class="grid gap-y-8">
                            <a
                                href="/portfolio"
                                class="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50"
                                on:click={() => (menuOpen = false)}
                            >
                                <!-- tablericons: notebook -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-notebook"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
                                    />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                                <span>Portfolio</span>
                            </a>
                            <a
                                href="/blog"
                                class="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50"
                                on:click={() => (menuOpen = false)}
                            >
                                <!-- tablericons: news -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-news"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
                                    />
                                    <line x1="8" y1="8" x2="12" y2="8" />
                                    <line x1="8" y1="12" x2="12" y2="12" />
                                    <line x1="8" y1="16" x2="12" y2="16" />
                                </svg>
                                <span>Blog</span>
                            </a>
                            <a
                                href="/#about-me"
                                class="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50"
                                on:click={() => (menuOpen = false)}
                            >
                                <!-- tablericons: user -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-user"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span>My story</span>
                            </a>
                            <a
                                href="mailto:holdenrehg@gmail.com"
                                class="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50"
                                on:click={() => (menuOpen = false)}
                            >
                                <!-- tablericons: send -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline mr-2 w-5 h-5 icon icon-tabler icon-tabler-send"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                    <path
                                        d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
                                    />
                                </svg>
                                <span>Email me</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
