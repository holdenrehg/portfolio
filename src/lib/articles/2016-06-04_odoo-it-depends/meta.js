import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2016-06-04_odoo-it-depends',
    title: 'Odoo — It depends',
    subtitle: 'A Use Case For Odoo Compute Functions and Performance',
    datePosted: '2016-06-04',
    coverImage: '/images/articles/odoo-it-depends/cover.jpeg',
    thumbnailImage: '/images/articles/odoo-it-depends/cover-min.jpg',
    description: 'Navigating the tricky minefield of fields computes and dependencies.',
    contentSnippet: `
    <p>When Odoo <a href="http://www.slideshare.net/openobject/odoo-from-v7-to-v8-the-new-api" rel="noreferrer" target="_blank">refactored their API</a> and caused forums to be fill with “new api” “old api” talk, I feel that it really increased the ease of use for developers. Many of the powerful features and tools built into Odoo became even simpler to understand. It also became simpler to write poorly performing code.</p>
    <blockquote>It also became simpler to write poorly performing code.</blockquote>
    <p>In this article I’m going to break down an example specifically for Odoo’s compute functions that show how quickly a dependency chain can get out of hand and affect the entire system. Let’s take a look at defining a simple class...</p>
    `,
    tags: [Tags.Odoo, Tags.Python, Tags.OpenSource, Tags.WebDevelopment],
    related: [
        '2020-01-29_chaining-context-managers-for-mocks',
        '2019-03-27_odoo-field-guide',
        '2019-03-24_a-flask-plus-stripe-saas-template',
    ],
});
