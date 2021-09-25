import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-08-09_whats-in-python3.8',
    title: "What's in python 3.8?",
    datePosted: '2019-08-09',
    coverImage: '/images/articles/whats-in-python3.8/cover.jpg',
    thumbnailImage: '/images/articles/whats-in-python3.8/cover-min.jpg',
    description: 'Cool features coming up in the Python 3.8 release!',
    contentSnippet: `
    <h2>What’s in python 3.8?</h2>
    <p>
      The programming language python
      is releasing it’s latest minor version
      3.8 soon and is currently in beta. Many of the application I build are
      built on top of python 3, so I wanted to take a look at what’s coming
      down the pipe and figured I share details about the major changes that
      caught our eye.
    </p>
    <p>
      This is not a random marketing article repeating the headlines from the
      change logs. This is our team playing around with the features and
      reporting back what I see with examples.
    </p>
    <h2>Installing python 3.8 (on linux)</h2>
    <p>
      As of today, the latest version is<code>python 3.8.0b3</code>and is
      available on the
      <a
        href="https://www.python.org/downloads/release/python-380b3/"
        rel="noreferrer"
        target="_blank">downloads page here</a>.
      To install the version locally on linux you can...
    </p>
    `,
    tags: [Tags.Python, Tags.WebDevelopment, Tags.Software, Tags.OpenSource],
    related: [
        '2020-01-29_chaining-context-managers-for-mocks',
        '2019-09-17_simple-business-manifesto',
        '2019-09-04_guide-to-erp',
    ],
});
