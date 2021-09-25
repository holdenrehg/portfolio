import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-02-02_writing-tests-in-odoo',
    title: 'Writing tests in Odoo',
    subtitle: 'Organizing, Writing, and Running Automated Tests',
    datePosted: '2019-02-02',
    coverImage: '/images/articles/writing-tests-in-odoo/cover.jpeg',
    thumbnailImage: '/images/articles/writing-tests-in-odoo/cover-min.jpg',
    description: "Odoo comes with it's own suite of testing tools. Let's talk about how to use them.",
    contentSnippet: `
    <h2>Introduction</h2>
    <p>Testing with Odoo, in any version, is not 100% straight forward. There are some different tricks and requirements that aren’t always made clear.</p>
    <p>So I wanted to write up everything that my team and I at <a href="https://bluestingray.com" rel="noreferrer" target="_blank">Blue Stingray</a> have learned about Odoo testing over the last few years. We’ve luckily been able to learn a ton.</p>
    <p>This is not an explanation on <strong>what</strong> to test. There are plenty of great articles and books out there for what should you be testing, and maybe I’ll write up a summary of those one day. But for now, this is strictly an explanation on how to organize, write, and run some example tests in Odoo.</p>
    <p>I will try to thoroughly cover:</p>
    <ul>
        <li>Setting up a module for tests</li>
        <li>Writing a test within the Odoo framework boundaries</li>
        <li>Running your Odoo / module test suite</li>
    </ul>
    <h2>Requirements</h2>
    <p>What do you need?</p>
    <ul>
        <li>A running instance of Odoo.</li>
        <li>A custom Odoo module (I’ll provide a sample).</li>
    </ul>
    <p>I will be referencing Odoo 12, but Odoo 9 to 12 have pretty similar testing frameworks. There were no huge changes between recent versions...</p>
    `,
    tags: [Tags.SoftwareTesting, Tags.WebDevelopment, Tags.Odoo, Tags.Python, Tags.UnitTesting],
    related: [
        '2020-03-29_daily-odoo-team-routine',
        '2020-01-29_chaining-context-managers-for-mocks',
        '2019-03-09_odoo-down-for-maintenance',
    ],
});
