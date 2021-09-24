import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-03-24_a-flask-plus-stripe-saas-template',
    title: 'A Flask + Stripe SaaS template',
    subtitle: 'Bootstrapped template for Flask and Stripe integration',
    datePosted: '2019-03-24',
    coverImage: '/images/articles/a-flask-plus-stripe-saas-template/cover.jpg',
    thumbnailImage: '/images/articles/a-flask-plus-stripe-saas-template/cover-min.jpg',
    description: 'Lessons learned while integrating Flask and Stripe together, with examples.',
    contentSnippet: `
    <p>
      Recently I’ve been working on
      side projects, away from the large,
      “enterprisey” code bases that I typically deal with at work. I tried out
      quite a few different setups since it’s so easy to get caught in a loop,
      using the same tools, patterns, and ideas over and over within a single
      project/system you work on. It’s nice to break out of that every once in
      a while and see other ideas.
    </p>
    <p>
      After going through a few frameworks, experimenting with different
      architecture patterns, and thinking about ways to organize projects I
      ended up building a small application called Buster with Flask.
    </p>
    <p>
      It’s more like Flask + friends because of the libraries, but you’ll see
      more about that as you get into this guide.
    </p>
    <p>
      After I deciding I was going to use Flask, I search around for some
      direction on basic things like...
    </p>
    `,
    tags: [Tags.Docker, Tags.Flask, Tags.Python, Tags.OpenSource],
    related: [
        '2020-01-29_chaining-context-managers-for-mocks',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
        '2018-09-22_write-better-code-outside-in',
    ],
});
