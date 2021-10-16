<script>
    import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
    title="Books written by Holden Rehg"
    image="https://holdenrehg.com/images/portraits/self-portrait-1.jpg"
    useTwitter={true}
    useOpenGraph={true}
/>

<div class="relative pt-16 md:min-height-950">
    <div class="px-8 md:px-20 lg:px-32">
        <div class="pb-16 text-center">
            <h2 class="mb-12 md:mb-0 text-4xl text-vollkorn tracking-tighter" style="line-height: 3.8rem;">
                <mark class="text-purple-900 bg-purple-200">
                    My Books<br />
                </mark>
            </h2>
            <p class="mt-8 text-lg text-left md:text-center md:text-xl leading-8 md:leading-10">
                I wrote my <a class="underline" href="/blog/2016-03-03_managing-multiple-odoo-instances/"
                    >first article</a
                >
                back in 2016 without much thought. I had been working on a specific technology for a year or two
                and wanted to share some tips that I learned. Since then, I've continued to write as much as possible.
                It's led to over 90k views across Medium and
                <a class="underline" href="/blog">my blog</a>. I've really enjoyed talking to everyone who has
                reached out about my articles. I feel like I've really been able to help other developers.
                Recently, I made the jump and started putting together book ideas. This section is where I'm
                going to put published and upcoming books.
            </p>

            <div class="text-left mt-10 py-10 px-8 md:mt-20 md:py-40 md:px-16 bg-gray-200">
                <h2 class="text-xl md:text-4xl font-bold flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline w-12 h-12 mr-2 icon icon-tabler icon-tabler-code"
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
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                    <span>Thinking Like A Programmer</span>
                </h2>
                <h3 class="mt-5 text-lg md:text-2xl">
                    A Beginner's Guide To Problem Solving In Computer Programming
                </h3>
                <div class="mt-2">
                    <mark class="text-lg md:text-xl text-purple-900 bg-purple-200">Coming soon in 2022.</mark>
                </div>
                <hr class="my-10 md:my-6 bg-gray-300" />
                <p class="mt-10 text-base md:text-xl md:leading-10">
                    I'm writing the book that I wish I had when first starting a computer science program in
                    college or before I started my first professional software development job. There's an
                    endless number of languages, technologies, tools, and methodologies. There's also plenty
                    of books, videos, and articles about any specific language or tool. It's pretty easy to
                    find a "How to Program In Ruby" book or tutorial for example. Finding a book that teaches
                    you the skills to adapt to any software development environment are harder to find.
                </p>
                <p class="mt-6 text-base md:text-xl md:leading-10">
                    Over the years, I've learned ways to think about problem solving with code. That way of
                    thinking can be applied to any programming language or stack. I want to teach people who
                    are brand new to programming how to think about approaching programming at a high level.
                    I'll walk through topics like the general ideas behind computing, designing solutions to
                    problems with code, the basic constructs and mechanisms used in nearly every language, and
                    the flow of data throughout programs.
                </p>
                <hr class="my-10 bg-gray-400" />
                <div id="mc_embed_signup">
                    <p class="mb-3 text-lg leading-8">
                        <span class="block"><strong>Sign up to my newsletter below</strong> to follow the project.</span>
                        <span class="block mt-5 md:mt-1"
                            >I'll email you when the book is officially released and some sample chapters
                            along the way.</span
                        >
                    </p>
                    <div id="revue-embed">
                        <form action="https://www.getrevue.co/profile/reedrehg/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                            <div class="revue-form-group mb-3">
                                <label for="member_email" class="block"><strong>Email address</strong></label>
                                <input
                                    class="revue-form-field w-full text-lg mt-1 py-1 px-3"
                                    placeholder="Your email address..."
                                    type="email"
                                    name="member[email]"
                                    id="member_email"
                                />
                            </div>
                            <div class="revue-form-actions mb-3">
                                <input
                                    class="px-3 py-1 bg-purple-600 text-purple-100 text-lg font-bold"
                                    type="submit"
                                    value="Subscribe"
                                    name="member[subscribe]"
                                    id="member_submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
