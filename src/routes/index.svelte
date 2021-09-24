<script>
    import PortraitGallery from '$lib/components/PortraitGallery.svelte';
    import RecentArticles from '$lib/components/blog/RecentArticles.svelte';
    import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
    title="Holden Rehg: I'm a Software Developer, Freelancer, and Blogger"
    description="Building Simpler Software, Helping Companies Build Software With Python and Odoo, and Blogging About It"
    image="https://holdenrehg.com/images/portraits/self-portrait-1.jpeg"
    useTwitter={true}
    useOpenGraph={true}
/>

<div class="relative pt-16 lg:px-20 md:min-height-950">
    <div class="px-8 md:px-20 lg:px-32">
        <div class="pb-16 text-center">
            <h2
                class="mb-12 md:mb-0 text-4xl text-indigo-900 text-vollkorn tracking-tighter"
                style="line-height: 3.8rem;"
            >
                <mark class="bg-yellow-100 hover:opacity-90">
                    Holden Rehg.<br />
                    Web Programmer &amp; Freelancer.<br />
                    Based in the U.S.A.
                </mark>
            </h2>
            <div class="md:flex justify-evenly items-center">
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
            </div>
        </div>

        <hr class="mb-20 bg-indigo-900 opacity-25" style="opacity: 12%;" />

        <div class="pb-20">
            <RecentArticles mode="links" count="6" />
        </div>

        <hr class="mb-20 bg-indigo-900 opacity-25" style="opacity: 12%;" />

        <div id="about-me" class="mb-20">
            <h2 class="text-xl text-gray-700 mb-2"><strong>A little about me</strong></h2>
            <div class="md:flex justify-between ">
                <div class="text-lg leading-9" style="flex: 0 60%;">
                    <p>
                        I started programming {new Date().getYear() - new Date('05/01/2011').getYear()} years ago
                        while in high school. The first website started as a pretty basic Wordpress blog, but turned
                        into a freelance business where I built websites for local businesses. It felt like the
                        best option especially compared to other job opportunities available. There was not too
                        many options for a 16 year old in my town.
                    </p>
                    <p class="mt-4">
                        Solving problems and working with business owners felt good. At least once you get to
                        the solution. So I stuck with it and <a
                            class="underline"
                            href="http://iastate.edu"
                            target="_blank">studied software engineering</a
                        >
                        &nbsp;in school. Every chance I had I worked. I can't remember a week throughout school
                        where I didn't have some sort of job or work, even up to 30-40 hours a week at times. This
                        meant countless side projects, a school IT job, teching assistant for classes, remote startup
                        gigs, and summer internships.
                    </p>
                    <p class="mt-4">
                        All of this led to working at <a
                            class="underline"
                            href="https://bluestingray.com"
                            target="_blank">a software firm</a
                        >
                        near my home town in
                        <a class="underline" href="https://goo.gl/maps/ULgf7s3zvintX9fs5" target="_blank"
                            >St. Louis, MO</a
                        >, receiving a percentage of the company as part owner and building a new team from
                        scratch focusing on ERP systems for small businesses.
                    </p>
                    <p class="mt-4">
                        Over 5 five years, we would build up the team to 5 developers, a project manager, and
                        a support team member. The overall revenue of the company quadruple, with roughly half
                        of that coming from the ERP team.
                    </p>
                    <p class="mt-4">
                        During that time, I also had a few other itches to scratch. I started my own business
                        for consulting, freelancing, and writing. I also started buying rental real estate in
                        my home town.
                    </p>
                    <p class="mt-4">
                        And that's where we're at today. Spending my time still trying to help businesses with
                        software needs, writing about software, and managing a few small rental properties.
                        Hoping to help out a few people while also keeping myself happy and fullfilled.
                    </p>
                </div>
                <div style="flex: 0 34%;">
                    <h3 class="text-xl font-extrabold pt-12 md:pt-0">
                        <span
                            class="pb-2 border-b-8 border-indigo-800 border-opacity-25 hover:border-opacity-50 transition-all"
                        >
                            Milestones
                        </span>
                    </h3>
                    <div class="flex flex-col gap-5 mt-10 text-md md:text-lg">
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
                            <a class="underline" href="http://iastate.edu" target="_blank">
                                Iowa State University
                            </a>.
                        </p>
                        <p>
                            <span class="w-12 inline-block font-bold">2015</span>Became a Partner and lead
                            developer at the
                            <a class="underline" href="https://bluestingray.com" target="_blank"
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
