import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-09-20_rule-of-three',
    title: 'The Rule of Three: Applying abstractions and patterns',
    datePosted: '2021-09-30 10:45 AM',
    dateModified: '2022-09-10 3:00 PM',
    coverImage: '/images/articles/rule-of-three/cover.jpg',
    thumbnailImage: '/images/articles/rule-of-three/cover-min.jpg',
    description:
        'Avoid complicating code that you write until you recongize a repeating pattern that can be refactored. The rule of three is a guideline to avoid wasting time until you see patterns across three or more projects.',
    contentSnippet: `
    <p>
        <span class="first-letter">It</span> taken me so long to reach a point where I don't hold a set of patterns
        up on a pedestal accepting them as the holy laws of programming. Thinking that only the best software is written
        using an elegant combination of these highly regarded software patterns, without any code fitting nicely into
        a guiding principle.
    </p>

    <p>
        I still struggle with it, every once in a while catching myself designing some facade into a generalized
        system, that ultimately I'm only going to use once or that may never see the light of day.
    </p>

    <h2 id="why-think-in-design-patterns">Why are we taught to think in software design patterns?</h2>

    <p>
        Many developers seem to be taught, including me throughout college, a large set of design patterns and
        principles for "good" software. These are solutions that can be applied to common problems in software
        development. This leads to the thought processes like:
    </p>

    <ul>
        <li>I need to write code to connect to a database.</li>
        <li>
            The D in SOLID says code shouldn't directly depend on low level modules, so I must abstract my
            database code out.
        </li>
        <li>The most common pattern used for an abstraction like this is the Adapter pattern.</li>
        <li>
            Create a connection method, a database facade, an adapter interface, and an adapter implementation for
            mysql.
        </li>
    </ul>

    <p>All of a sudden we end up with something like this...</p>
    `,
    tags: [
        Tags.SoftwareCraftsmanship,
        Tags.Productivity,
    ],
    related: [
        '2021-08-16_odoo-patterns-humble-object',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
        '2021-08-27_risk-of-invulnerable-software-teams',
    ],
});
