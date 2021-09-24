import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-03-09_odoo-images-and-attachments-explain-regenerate-assets',
    title: 'Odoo images and attachments — Explaining and regenerating assets',
    subtitle: 'How do assets and bundles actually work',
    datePosted: '2019-03-09',
    description: `
        If you have ever manually moved a filestore from one site to another, or
        migrated a database without the filestore, then you’ve probably had to deal
        with failing or missing assets. This article takes a look at the assets
        system in Odoo controlling all of that.
    `,
    contentSnippet: `
    <p>If you have ever manually moved a filestore from one site to another, or migrated a database without the filestore, then you’ve probably had to deal with failing or missing assets.</p>
    <p>It’s not obvious how assets are stored and served within the Odoo system. There is no manual compilation process like you would expect coming from frontend utilities like <code>npm</code> , <code>webpack</code> , or even a simpler <code>sass --watch</code> process.</p>
    <p>As developers, when we are writing stylesheets or javascript we just reload the page and everything has been minified and concatenated into these large asset bundles. Automagically. <span role="img" aria-label="">🎆</span></p>
    <p>I’m going to try to reveal a little bit of the magic going on behind the scenes and some tricks for regenerating assets bundles.</p>
    <h2>Viewing the bundles</h2>
    <p>
      Open up developer tools on any Odoo instance. In the <code>&lt;head/&gt;</code> you won’t see a ton of <code>link</code> or <code>script</code>
      tags from...
    </p>
    `,
    tags: [Tags.Odoo, Tags.Erp, Tags.OpenSource, Tags.Python, Tags.WebDevelopment],
    related: [
        '2020-03-29_daily-odoo-team-routine',
        '2019-03-27_odoo-field-guide',
        '2019-03-09_odoo-down-for-maintenance',
    ],
    backgroundColor: '#132929',
});
