<script>
    import { onMount } from 'svelte';
    import PortraitGallery from '$lib/components/PortraitGallery.svelte';
    import RecentArticles from '$lib/components/blog/RecentArticles.svelte';
    import SEO from '$lib/components/SEO.svelte';
    import { siteData } from '$lib/siteData';

    onMount(async () => {
        const header = document.querySelector('#modal-header');
        const moveTarget = document.querySelector('#modal-move-target');

        // const modal = document.querySelector('#modal-main');
        // const body = document.querySelector('body');
        moveTarget.classList.remove('hidden');
        // moveTarget.style.left = ((body.clientWidth / 2) - (modal.clientWidth / 2)) + 'px';
        // moveTarget.style.top = ((body.clientHeight / 2) - (modal.clientHeight / 2)) + 'px';

        header.addEventListener('dragstart', (event) => {
            const dummy = document.createElement('div');
            event.dataTransfer.setDragImage(dummy, -10000, -10000);

            const currentLeft = Number(moveTarget.style.left.replace('px', ''));
            const currentTop = Number(moveTarget.style.top.replace('px', ''));
            header.dataset.dragStartX = event.clientX - currentLeft;
            header.dataset.dragStartY = event.clientY - currentTop;
        });

        header.addEventListener('drag', (event) => {
            if(event.clientX !== 0 || event.clientY !== 0) {
                moveTarget.style.left = (event.clientX - Number(header.dataset.dragStartX)) + 'px';
                moveTarget.style.top = (event.clientY - Number(header.dataset.dragStartY)) + 'px';
            }
        });

        header.addEventListener('dragend', () => {
            delete header.dataset.dragStartX;
            delete header.dataset.dragStartY;
        });
    });
</script>

<SEO
    title="Holden Rehg: I'm a Software Developer, Freelancer, and Blogger"
    description="Building Simpler Software, Helping Companies Build Software With Python and Odoo, and Blogging About It"
    image={`${siteData.url}/images/portraits/self-portrait-1.jpg`}
    useTwitter={true}
    useOpenGraph={true}
/>

<div
    class="overflow-hidden p-10 bg-yellow-100"
    style="
        height: 100vh;
        background-image:
            linear-gradient(0deg, hsla(0, 0%, 100%, 0), 0, hsla(0, 0%, 100%, 0)),
            linear-gradient(rgba(230, 183, 150, 0.65) 1px, transparent 0);
        background-size: 100% 100%, 2vw 2vw, 2vw 2vw;
    ">

    <!-- Icons -->
    <div class="flex flex-col gap-8">
        <div class="cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/408/408162.png" width="36"/>
            Email Me
        </div>
        <div class="cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/408/408171.png" width="36"/>
            Twitter
        </div>
        <div class="cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/408/408170.png" width="34"/>
            LinkedIn
        </div>
        <div class="cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/4021/4021924.png" width="36"/>
            Portfolio
        </div>
    </div>

    <!-- Modal -->
    <div class="relative">
        <div id="modal-move-target" class="absolute hidden left-1/2">
            <!-- Shadows -->
            <div class="absolute top-4 left-4">
                <div class="w-104 h-80 bg-gray-400 border-2 border-gray-900 select-none"></div>
            </div>
            <div class="absolute top-2 left-2">
                <div class="w-104 h-80 bg-gray-100 border-2 border-gray-900 select-none"></div>
            </div>

            <div class="absolute top-0 left-0">
                <div id="modal-main" class="w-104 h-80 flex flex-col bg-gray-100 border-2 border-gray-900 select-none">
                    <!-- Modal Header -->
                    <div
                        id="modal-header"
                        draggable="true"
                        class="w-full cursor-move flex justify-between px-2 py-1 text-xs text-center border-b-2 border-gray-900 bg-gradient-to-b from-gray-50 to-gray-300"
                    >
                        <div class="flex flex-1 items-center gap-1">
                            <div class="w-4 h-4 border-2 border-gray-900 cursor-pointer rounded-full bg-gradient-to-b from-red-200 to-red-400"></div>
                            <div class="w-4 h-4 border-2 border-gray-900 cursor-pointer rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400"></div>
                            <div class="w-4 h-4 border-2 border-gray-900 cursor-pointer rounded-full bg-gradient-to-b from-green-200 to-green-400"></div>
                        </div>
                        <div class="flex-1 text-gray-800">1 New Message</div>
                        <div class="flex-1"></div>
                    </div>
                    <!-- Modal Body -->
                    <div class="px-10 flex flex-col flex-1 justify-center items-center text-center text-gray-600">
                        <p class="text-lg"><strong>Hi. Welcome to Holden's Site.</strong></p>
                        <p class="text-xs">Filled with information which some is useful and plenty is not.</p>
                        <ul class="pt-8 text-left">
                            <li class="py-1"><a class="cursor-pointer hover:text-yellow-700" href="#">&gt; Who am I?</a></li>
                            <li class="py-1"><a class="cursor-pointer hover:text-yellow-700" href="#">&gt; What have I worked on?</a></li>
                            <li class="py-1"><a class="cursor-pointer hover:text-yellow-700" href="#">&gt; Read my blog!</a></li>
                            <li class="py-1"><a class="cursor-pointer hover:text-yellow-700" href="#">&gt; holdenrehg@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Toolbar -->
    <div class="fixed bottom-0 left-0 w-full flex justify-center">
        <div class="flex w-full gap-8 justify-center bg-gray-200 bg-opacity-60 py-2">
            <div class="cursor-pointer flex flex-col justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/408/408162.png" width="36"/>
                Email Me
            </div>
            <div class="cursor-pointer flex flex-col justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/408/408171.png" width="36"/>
                Twitter
            </div>
            <div class="cursor-pointer flex flex-col justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/408/408170.png" width="34"/>
                LinkedIn
            </div>
            <div class="cursor-pointer flex flex-col justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4021/4021924.png" width="36"/>
                Portfolio
            </div>
        </div>
    </div>
</div>

<!-- <div class="relative pt-16 lg:px-20 md:min-height-950">
    <div class="px-8 md:px-20 lg:px-32">
        <div class="pb-16 text-center"> -->
            <!-- <h2
                class="mb-12 md:mb-0 text-4xl text-indigo-900 text-vollkorn tracking-tighter"
                style="line-height: 3.8rem;"
            >
                <mark class="bg-yellow-100 hover:opacity-90">
                    Holden Rehg.<br />
                    Web Programmer &amp; Freelancer.<br />
                    Based in the U.S.A.
                </mark>
            </h2> -->
            <!-- <div class="md:flex justify-evenly items-center">
                <div class="md:flex flex-col text-center md:text-left md:w-1/4">
                    <div class="my-8 md:my-4">
                        <strong class="text-lg text-gray-700">Biography</strong>
                        <p class="mt-1 text-gray-800">
                            Hello. For the last {new Date().getYear() - new Date('05/01/2011').getYear()} years,
                            I've been professionally writing or studying software and web development. Since 2015,
                            I've been focusing on software solutions for small to medium sized businesses.
                        </p>
                    </div>
                    <div class="my-8 md:my-4">
                        <strong class="text-lg text-gray-700">Contact</strong>
                        <p class="mt-1 text-gray-800">
                            <a
                                class="block hover:underline"
                                href="https://www.google.com/maps/place/St.+Louis,+MO/@38.6530795,-90.313673,12z/data=!3m1!4b1!4m5!3m4!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042"
                                >St. Louis, MO, US</a
                            >
                            <a class="block hover:underline" href="mailto:holdenrehg@gmail.com"
                                >holdenrehg@gmail.com</a
                            >
                            <span class="block phone-number" title="+1 618 691 9180" />
                        </p>
                    </div>
                    <div class="my-8 md:my-4">
                        <strong class="text-lg text-gray-700">Education</strong>
                        <p class="mt-1 text-gray-800">
                            I studied Software Engineering at <a href="https://iastate.edu"
                                >Iowa State University</a
                            >.
                        </p>
                    </div>
                </div>
                <div class="relative mx-auto md:mt-12 md:w-1/2">
                    <div class="center-gallery relative mx-auto bg-transparent">
                        <div class="mx-auto text-center pt-12">
                            <PortraitGallery />
                        </div>
                        <div class="mt-5 mb-20 mx-auto" style="width: 200px;">
                            <a href="mailto:holdenrehg@gmail.com">
                                <mark class="text-lg text-vollkorn bg-purple-100 hover:opacity-90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="inline pr-2 w-8 h-8 icon icon-tabler icon-tabler-send"
                                        width="44"
                                        height="44"
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
                                    <span>Send me an email and ask about how we can work together.</span>
                                </mark>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="md:flex flex-col text-center md:text-right md:w-1/4">
                    <div class="my-8 md:my-4">
                        <strong class="text-sm text-gray-700">Years experience</strong>
                        <p class="text-gray-800 text-vollkorn text-4xl tracking-tighter mt-3">
                            <span
                                class="border-b-8 border-indigo-800 border-opacity-25 hover:border-opacity-50 transition-all"
                            >
                                {new Date().getYear() - new Date('05/01/2011').getYear()} Years
                            </span>
                        </p>
                    </div>
                    <div class="my-8 md:my-4">
                        <strong class="text-lg text-gray-700">Favorite tech</strong>
                        <p class="mt-1 text-gray-800">
                            Web development technology is constantly shape shifting and evolving, so I've used
                            a broad range of tools. Most recently I've been using a lot of&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://python.org">Python</a
                            >,&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://odoo.com">Odoo</a>,&nbsp;
                            <a
                                class="whitespace-no-wrap underline"
                                href="https://flask.palletsprojects.com/en/2.0.x/">Flask</a
                            >,&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://www.postgresql.org/"
                                >PostgreSQL</a
                            >,&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://vuejs.org/">Vue.js</a
                            >,&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://github.com">Github</a
                            >,&nbsp;
                            <a class="whitespace-no-wrap underline" href="https://travis-ci.org/">Travis CI</a
                            >, and
                            <a class="whitespace-no-wrap underline" href="https://www.docker.com/">Docker</a>.
                        </p>
                    </div>
                    <div class="my-8 md:my-4">
                        <strong class="text-lg text-gray-700">Services</strong>
                        <p class="mt-1 text-gray-800">
                            <span class="block">Consulting.</span>
                            <span class="block">Custom Software Development.</span>
                            <span class="block">Project Planning.</span>
                            <span class="block">Quality Control.</span>
                            <span class="block">Training.</span>
                        </p>
                    </div>
                </div>
            </div> -->
        <!-- </div>
    </div>
</div> -->
