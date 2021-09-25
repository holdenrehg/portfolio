import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2016-03-03_managing-multiple-odoo-instances',
    title: 'Managing multiple Odoo instances',
    datePosted: '2016-03-03',
    coverImage: '/images/articles/managing-multiple-odoo-instances/cover.jpeg',
    thumbnailImage: '/images/articles/managing-multiple-odoo-instances/cover-min.jpg',
    description:
        'Getting started with a more complicated set of Odoo instances and servers, and how to handle that.',
    contentSnippet: `
        <h2>Update — Jan 27th, 2019</h2>
        <p>This article will still have relevant information if you are running Odoo directly on your machine or server, but I recommend reading a more updated article like <a href="/blog/2019-01-27_dockerized-odoo-development">Easier Odoo Development</a> if you are in the position to containerize your application. — Holden</p>
        <hr/>

        <h2>Managing Odoo Instances</h2>
        <p>Getting started with hosting Odoo can be tricky especially when trying to manage multiple instances, manage multiple editions (Odoo 8, Odoo 9 Community, Odoo 9 Enterprise), and keep a smooth development workflow. I spent some time breaking down a simpler way to install and organize Odoo on our development server and thought I would share it with any one in the community who might be interested.</p>
        <p>I’m going to explain a quick example of setting up Odoo 9 Community and Odoo 9 Enterprise on a blank server, setting up a postgres server, defining service scripts, defining Odoo configurations, and running both instances from source.</p>
        <blockquote>This process could easily apply across multiple systems, but I will be using Ubuntu 14.04 so adapt commands as needed.</blockquote>

        <h3>The Database</h3>
        <p>Odoo uses a postgresql server to store data so we need to first install and setup our database server...</p>
    `,
    tags: [Tags.DevTools, Tags.Software, Tags.Odoo, Tags.Erp],
    related: [
        '2019-01-27_dockerized-odoo-development',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
        '2020-03-29_daily-odoo-team-routine',
    ],
});
