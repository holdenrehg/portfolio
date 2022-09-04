<script>
    import { onMount } from 'svelte';
    import RecentArticles from '$lib/components/blog/RecentArticles.svelte';
    import SEO from '$lib/components/SEO.svelte';
    import { siteData } from '$lib/siteData';

    onMount(async () => {
        const header = document.querySelector('#modal-header');
        const moveTarget = document.querySelector('#modal-move-target');

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

<div class="relative md:min-height-950">
    <div>
        <div class="pt-16 md:px-20 lg:px-56 px-8 bg-yellow-100" style="
            background-size: 100% 100%, 2vw 2vw, 2vw 2vw;
            background-image:
                linear-gradient(0deg, hsla(0, 0%, 100%, 0), 0, hsla(0, 0%, 100%, 0)),
                linear-gradient(rgba(230, 183, 150, 0.35) 1px, transparent 0),
                linear-gradient(90deg, rgba(230, 183, 150, 0.1) 1px, transparent 0);
        ">
            <div class="pb-32 relative z-0">
                <!-- Modal -->
                <div id="modal-move-target" class="relative z-0">
                    <!-- Shadows -->
                    <div class="absolute top-4 left-4" style="z-index: -1;">
                        <div class="bg-gray-400 border-2 border-gray-900 select-none"></div>
                    </div>
                    <div class="absolute top-2 left-2" style="z-index: -1;">
                        <div class="bg-gray-100 border-2 border-gray-900 select-none"></div>
                    </div>

                    <div class="z-50 top-0 left-0">
                        <div class="flex flex-col bg-gray-100 border-2 border-gray-900 select-none">
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
                            <div class="flex flex-col sm:flex-row px-6 md:px-20 py-8 gap-5 lg:gap-10">
                                <div>
                                    <div class="mx-auto sm:mx-0 w-32 text-center leading-4">
                                        <img src="/images/portraits/self-portrait-1.jpg" alt="me" class="rounded-full border-4 border-gray-100"/>
                                        <p style="font-size: 10px">
                                            Hey, that's me.
                                        </p>
                                    </div>
                                </div>
                                <div class="text-mono flex flex-col flex-1 gap-5 text-gray-600" style="font-size: 12px;">
                                    <p class="mx-auto sm:mx-0" style="font-size: 18px;"><strong>Welcome. 👋🏻</strong></p>
                                    <hr class="w-full bg-gray-400"/>
                                    <p>My name is Holden, I'm an Engineering Manager at PlayStation with about {new Date().getYear() - new Date('05/01/2013').getYear()} years experience in tech, <a href="/blog" class="text-yellow-600">I sometimes write</a>, I studied at ISU, I like to cook, and I like to eat even more.</p>
                                    <p>That's all you probably need to know, but feel free to read <a href="/#about-me" class="text-yellow-600">more about me</a> or <a href="/blog" class="text-yellow-600">read ramblings from my blog</a>.</p>
                                    <hr class="w-full bg-gray-200"/>
                                    <p><mark class="bg-orange-50 font-bold">NOTE</mark> I am no longer offering freelancing or consulting services and no longer work with Odoo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute -top-14 w-full h-full flex justify-center items-center" style="z-index: -1">
                    <div>
                        <img src="/images/giphy.gif" width="250" alt="a dog waving"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:px-20 lg:px-56 px-8">
            <div class="pb-20 pt-16">
                <RecentArticles mode="links" count="6" />
            </div>

            <hr class="mb-20 bg-indigo-800"/>

            <div id="about-me" class="mb-20">
                <h2 class="text-xl text-gray-700 mb-2"><strong>More about me</strong></h2>
                <div class="md:flex justify-between ">
                    <div class="text-lg leading-9 flex flex-col gap-4" style="flex: 0 60%;">
                        <p>
                            I started programming {new Date().getYear() - new Date('05/01/2011').getYear()} years ago
                            while in high school. The first website started as a pretty basic Wordpress blog, but turned
                            into a freelance business where I built websites for local businesses. It felt like the
                            best option especially compared to other job opportunities available. There was not too
                            many options for a 16 year old in my town.
                        </p>
                        <p>
                            Solving problems and working with business owners felt good. At least once you get to
                            the solution. So I stuck with it and <a
                                class="text-yellow-600"
                                href="http://iastate.edu"
                                target="_blank">studied software engineering</a
                            >
                            &nbsp;in school. Every chance I had I worked. I can't remember a week throughout school
                            where I didn't have some sort of job or work, even up to 30-40 hours a week at times. This
                            meant countless side projects, a school IT job, teching assistant for classes, remote startup
                            gigs, and summer internships.
                        </p>
                        <p>
                            All of this led to working at <a
                                class="text-yellow-600"
                                href="https://bluestingray.com"
                                target="_blank">a software firm</a
                            >
                            near my home town in
                            <a class="text-yellow-600" href="https://goo.gl/maps/ULgf7s3zvintX9fs5" target="_blank"
                                >St. Louis, MO</a
                            >, receiving a percentage of the company as part owner and building a new team from
                            scratch focusing on ERP systems for small businesses.
                        </p>
                        <p>
                            Over 5 five years, we would build up the team to 5 developers, a project manager, and
                            a support team member. The overall revenue of the company quadrupled, with roughly half
                            of that coming from the ERP team.
                        </p>
                        <p>
                            During that time, I had a few itches to scratch. I started my own business
                            for consulting, freelancing, and writing. I also started buying rental real estate in
                            my home town.
                        </p>
                        <p>
                            I spent roughly 2 years freelancing. It was an interesting and useful experience.
                            I learned about working in software from a new perspective and learned about my own
                            ambitions. After looking back at the end of those 2 years, I decided to go a different direction
                            and chase a dream of working in the games industry. When I started college, I was excited
                            about the potential of working in games, but was convinced that it's not impossible. Outside of
                            applying for a handful of jobs at big studios, I didn't do much to pursue it.
                        </p>
                        <p>
                            On top of that, I wanted to double down on a role in tech. Throughout my entire career, I
                            had always done more than what a typical programmer would do. I decided to move forward
                            with engineering management specifically, because that's where I felt I could have the
                            biggest impact and it was a part of my job that I enjoyed the most.
                        </p>
                        <p>
                            That's where we are at today. In 2022, I started work at PlayStation. I still manage a few
                            rental properties, answer the one off email asking for my advice, and
                            <a href="/blog" class="text-yellow-600">write blog posts</a>, but most of my time is spent
                            focused on building the best products possible at PlayStation.
                        </p>
                    </div>
                    <div style="flex: 0 34%;">
                        <h3 class="text-xl font-extrabold pt-12 md:pt-0">
                            <span
                                class="pb-2 border-b-8 border-yellow-500 border-opacity-25 hover:border-opacity-50 transition-all"
                            >
                                Milestones
                            </span>
                        </h3>
                        <div class="flex flex-col gap-5 mt-10 text-md">
                            <p>
                                <span class="w-12 inline-block font-bold">2010</span>Built my first website and
                                wrote my first line of code.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2011</span>Started freelance website
                                development for local businesses while in high school.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2012</span>Enrolled in the Software
                                Engineering program at
                                <a class="text-yellow-600" href="http://iastate.edu" target="_blank">
                                    Iowa State University
                                </a>.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2015</span>Became a Partner and lead
                                developer at the
                                <a class="text-yellow-600" href="https://bluestingray.com" target="_blank"
                                    >Blue Stingray</a
                                >
                                software development firm.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2017</span>Started Buster Technologies
                                LLC to create business software solutions and provide software
                                contracting/consulting.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2019</span>Bought my first rental
                                property.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2020</span>Left my job and became a
                                fully independent business owner.
                            </p>
                            <p>
                                <span class="w-12 inline-block font-bold">2022</span>Quit freelancing. Started work at PlayStation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
