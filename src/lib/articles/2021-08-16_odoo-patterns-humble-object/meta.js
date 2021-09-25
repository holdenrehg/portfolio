import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-08-16_odoo-patterns-humble-object',
    title: 'Patterns with Odoo: Humble Object',
    datePosted: '2021-08-16',
    coverImage: '/images/articles/odoo-patterns-humble-object/cover.jpg',
    thumbnailImage: '/images/articles/odoo-patterns-humble-object/cover-min.jpg',
    description: 'Writing cleaner code and better tests in Odoo with the Humble Object pattern.',
    contentSnippet: `
        <blockquote>
            Take a look at the corresponding code for this article in
            the <a href="https://github.com/holdenrehg-samples/sample_odoo_humble_object">holdenrehg-samples/sample_odoo_humble_object</a> repo.
        </blockquote>

        <p>
            Frameworks I've worked with typically fall into two camps with architecture.
        </p>

        <p>
            <strong>1.</strong> You have "free for all" frameworks telling you to do
            mostly whatever you'd like, however you'd like. They chuck all the tools
            on the ground with descriptions of how each work, but they don't care if
            you want to build a house, a canoe, or pave a driveway. Developers
            usually refer to these as "unopinionated".
        </p>
        <p>
            <strong>2.</strong> Then you have the "prefab" style frameworks where
            they put up the frame of your application for you. They often show
            you where to put certain things and often lock you in to certain tools
            or patterns by default. Want to use a steel frame instead of timber?
            Might not be a realistic option to swap that out. Developers call these ones
            "opinionated".
        </p>
        <hr/>
        <p>
            That's enough with the construction analogy. It doesn't line up
            perfectly, but the gist is that you have frameworks that are more like
            a collection of modules or libraries with sets of generalized utilities
            for common tasks. For example, Flask has a routing module...
        </p>
    `,
    backgroundColor: '#000000',
    tags: [Tags.Odoo, Tags.OpenSource, Tags.Python],
    related: [
        '2021-06-03_odoo-docker-quickstart',
        '2019-03-09_odoo-down-for-maintenance',
        '2019-02-16_run-an-odoo-repl',
    ],
});
