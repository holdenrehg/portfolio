import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-10-08_odoo-manifest-asset-bundles',
    title: 'Odoo 15 Manifest Asset Bundles',
    datePosted: '2021-10-07 8:12 AM',
    coverImage: '/images/articles/odoo-manifest-asset-bundles/cover.jpg',
    thumbnailImage: '/images/articles/odoo-manifest-asset-bundles/cover-min.jpg',
    description: `
        In the last few weeks I have migrated over 30 modules from version 14 to version
        15 of Odoo. Throughout all of those migrations, the way that asset bundling works
        in version 15 has been the most significant change.
    `,
    contentSnippet: `
        <p>
            In the last few weeks I have migrated over 30 modules from version 14 to version 15 of Odoo. This seems to
            be part of our painstaking yearly ritual as Odoo developers to attempt to keep our projects up to date
            with the latest annual release.
        </p>
        <p>
            As some people may know, I believe there are better options as a community than to do annual,
            non-backwards compatible releases without automated tooling provided as an upgrade path. I&#39;ve talked
            about that a bit in my <a
                href="https://www.holdenrehg.com/blog/2021-09-09_how-i-manage-local-development-odoo-projects"
                >managing hundreds of local development projects article</a
            >.
        </p>
        <p>
            But this year specifically I have less to complain about at least. Out of 30+ modules migrated, across a
            big spectrum of features, there were very few changes between 14 and 15. I&#39;m really hoping that other
            developers have the same experience as they go through this process.
        </p>
        <h3>The two biggest changes I&#39;ve seen</h3>
        <p>I ran into 2 big changes that affect us developers day to day.</p>
        <h4>1. OWL</h4>
        <p>
            This is a big change. For anyone who hasn&#39;t heard, Odoo built a new frontend JavaScript framework
            called <a href="https://github.com/odoo/owl">OWL</a>. Luckily, for anyone not interested in migrated all
            of their old JS code, it appears the old frontend system has not been entirely scrapped (yet). All of the
            JavaScript that I migrated still worked properly. Over time, it&#39;s going to make a lot more sense to
            use OWL though.
        </p>
        <h4>2. Asset bundling</h4>
        <p>The second is asset bundling. This is what I wanted to talk about with this article.</p>
        <p>
            Odoo creates &quot;asset bundles&quot; that get loaded into the frontend of the application. Each bundle
            contains different sets of assets. The assets are either JavaScript or CSS. As developers, we need a way
            to hook into this bundles and say &quot;put my custom JS or CSS code into a bundle&quot;.
        </p>
    `,
    tags: [
        Tags.Python,
        Tags.Odoo,
    ],
    related: [
        "2021-09-20_rule-of-three",
        "2021-08-16_odoo-patterns-humble-object",
        "2021-06-03_odoo-docker-quickstart",
    ],
});
