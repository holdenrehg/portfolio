import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-09-04_guide-to-erp',
    title: 'A guide to ERP (infographic)',
    datePosted: '2019-09-04',
    coverImage: '/images/articles/guide-to-erp/cover.jpg',
    thumbnailImage: '/images/articles/guide-to-erp/cover-min.jpg',
    description: 'A short history of ERP systems and a prediction for the future.',
    contentSnippet: `
    <p>
      The simplest possible definition
      of an ERP system generally would be a program that business leaders use
      to organize and run the majority of their business.
    </p>
    <p>
      That’s how I would describe an ERP system today, but they have a long
      history and different meanings to different businesses.
    </p>
    <p>
      The complete journey of ERP is an interesting story. It was created out
      of a need when early mainframe computers came into existence and
      businesses required better organizational tools. At the rise of every
      major technological innovation, ERP has always been forced to adapt and
      evolve. Even if a little bit behind the curve, it has done that up to
      today.
    </p>
    <p>
      I’m going to explain the evolution of ERP at each of those major points
      throughout its journey to become...
    </p>
    `,
    tags: [Tags.Erp, Tags.CloudComputing, Tags.SmallBusiness, Tags.WebDevelopment, Tags.SaaS],
    related: [
        '2020-03-29_daily-odoo-team-routine',
        '2019-08-04_guide-to-no-bullshit-business-metrics',
        '2019-09-17_simple-business-manifesto',
    ],
});
