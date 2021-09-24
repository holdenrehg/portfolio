import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-08-27_risk-of-invulnerable-software-teams',
    title: 'The Risks of Invulnerable Software Teams',
    datePosted: '2021-08-27 07:16:00',
    coverImage: '/images/articles/risk-of-invulnerable-software-teams/cover.jpg',
    thumbnailImage: '/images/articles/risk-of-invulnerable-software-teams/cover-min.jpg',
    description:
        'There are risks as a software development team to being invulnerable and not handling feedback well.',
    contentSnippet: `
        <p>
            Vulnerability has multiple meanings. I'm going to focus on the ability
            of software developers, managers, and teams,to admit to
            weaknesses. A weakness could be an individual weakness like a team member
            lacking experience. It could be a product weakness like a lack of functionality.
            Often, there is an overall team weakness that can lead to lapses in
            communication and missing deadlines.
        </p>

        <p>
            Speaking from experience, the typical response from someone who
            struggles with this is "screw you". I'm going to sit still, put
            up my middle finger and wait until someone changes the
            subject. It's obviously a defense tactic. Our lizard brains
            are freaked out that we are going to be identified as the
            weakest link and kicked out of the group, meaning if this
            happened thousands of years ago we wouldn't survive.
        </p>

        <p>
            Survival is not exactly as big of a concern today as it was
            then but it's how we're wired.
        </p>

        <p>
            So what does this have to do with software development?
        </p>

        <p>
            Well it means that we defend and justify our problems instead of
            identifying and fixing our problems. The most interesting
            part of this to me is that it seems to be a bigger problem
            within overall organizations and company culture than it does
            with people. Shit rolls down hill.
        </p>

        <p>
            Organizations and teams that are invulnerable and can't accept
            legitimate feedback introduce a lot of risk into their
            organizations. Some of the biggest risks I've dealt with are:
        </p>

        <ul>
            <li>
                <strong>Burnout.</strong> It's tiring to constantly be on defense. Every tweet or support
                ticket about "hey maybe this could be better" turns into a battle about why it works fine the
                way it is. Two sides emerge to argue about what's best. I've seen employees at all levels of an
                organization do this almost daily. It's not a fun way to spend your time at work.
            </li>
            <li>
                <strong>Restricted improvement.</strong> Now I'm not going to say that refusing to accept external
                ideas would completely prevent improvement. Of course you still have an internal team attempting
                to improve, but it chokes off the potential to improve. If you have a big customer
                base, that's a critical group to pull feedback from. At the same time, if you are in the
                mindset of defending your ideas about an organization, it's going to be hard to not defend your
                personal ideas when it comes to coworkers feedback as well.
            </li>
            <li>
                <strong>Efficiency.</strong> In short, it's just a waste of your time in the long run.
            </li>
            <li>
                <strong>Technical debt.</strong> The sunken cost fallacy and invulnerability go hand in hand. We
                should all understand that sticking with something just because you put time and money into it, despite
                there being a better solution out there, introduces debt into your project. Of course, with more
                tech debt, comes snowballing issues that get bigger and bigger over time.
            </li>
            <li>
                <strong>Limited hiring pool.</strong> Every tech company in the world seems like they need more
                people to interview now. If you can't accept new ideas or recognize there are problems
                to fix, finding people to hire will be hard. You're restricted to only hiring people who
                think how you do. And since you are going to have more burnout and turnover, hiring is going
                to be even harder.
            </li>
        </ul>

        <p>
            These are just some of the issues I've personally seen. I'm sure this
            list could be expanded out to dozens or hundreds of items.
        </p>

        <p>
            <strong>Getting better:</strong> But what can teams do? Learning about
            some of the work done by engineering managers focusing on improving
            their teams is a good place to start. Read
            the <a href="https://www.amazon.com/Peopleware-Productive-Projects-Teams-3rd/dp/0321934113" class="underline" target="_blank">Peopleware book</a>, take
            a look at <a href="https://rework.withgoogle.com/guides/managers-identify-what-makes-a-great-manager/steps/learn-about-googles-manager-research/" class="underline" target="_blank">Project Oxygen</a> or
            <a href="https://rework.withgoogle.com/print/guides/5721312655835136/" class="underline" target="_blank">Project Aristotle</a> by Google,
            learn about the <a href="https://www.youtube.com/watch?v=Q_bJVokYLRI" class="underline" target="_blank">BICEPS model</a> created by
            Paloma Medina, read about some
            of <a href="https://holub.com/blog/" class="underline" target="_blank">Allen Holub's work</a> on agile
            development, or read one of the many books about psychological safety in the workplace.
        </p>
    `,
    tags: [Tags.Leadership, Tags.Productivity, Tags.ProjectManagement, Tags.SoftwareCraftsmanship],
    related: [
        '2021-08-16_odoo-patterns-humble-object',
        '2020-03-29_daily-odoo-team-routine',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
    ],
});
