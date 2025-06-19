<!--

<Socials/>
    props:
        class: Classes applied to the root element/
        color: Tailwind color applied to icon svg's. Ex. color="indigo-50".
        size: Combined width and height size applied to icon svg's.

-->

<div class={`flex ${$$props.class}`}>
    <a href="https://linkedin.com/in/holdenrehg" target="_blank" title="LinkedIn">
        <!-- tablericons: brand-linkedin -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`stroke-current text-${$$props.color} icon icon-tabler icon-tabler-brand-linkedin`}
            width={$$props.size}
            height={$$props.size}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    </a>
    <a href="https://bsky.app/profile/reedrehg.bsky.social" target="_blank" title="Bluesky (reedrehg.bsky.social)">
        <!-- tablericons: brand-bluesky -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
            />
        </svg>
    </a>
    <a href="https://twitter.com/reedrehg" target="_blank" title="Twitter (@reedrehg)">
        <!-- tablericons: brand-twitter -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`stroke-current text-${$$props.color} icon icon-tabler icon-tabler-brand-twitter`}
            width={$$props.size}
            height={$$props.size}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
        </svg>
    </a>
    <a href="/rss.xml" target="_blank" title="RSS Feed">
        <!-- tablericons: rss -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`stroke-current text-${$$props.color} icon icon-tabler icon-tabler-rss`}
            width={$$props.size}
            height={$$props.size}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="19" r="1" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <path d="M4 11a9 9 0 0 1 9 9" />
        </svg>
    </a>
    <a href="https://github.com/holdenrehg" target="_blank" title="Github (holdenrehg)">
        <!-- tablericons: brand-github -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`stroke-current text-${$$props.color} icon icon-tabler icon-brand-github`}
            width={$$props.size}
            height={$$props.size}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            />
        </svg>
    </a>
</div>
