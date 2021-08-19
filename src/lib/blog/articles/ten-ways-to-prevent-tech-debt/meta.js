import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-07-13_ten-ways-to-prevent-tech-debt",
  title: "10 ways to prevent technical debt",
  datePosted: "2019-07-13",
  coverImage: "/blog/ten-ways-to-prevent-tech-debt/cover.jpg",
  description: "Ways to cut down on risk with your software projects. Take more time now, fix less bugs later.",
  contentSnippet: `
    <p>
      I’ve seen studies claiming that
      developers spend as much as 50% of
      their time fixing bad code. For companies that employ 10 developers,
      making an average of $75k per year, that means about 9,000 hours and
      $375k are spent each year on refactoring bad code.
    </p>
    <p>
      Getting that figure down to 1–10% could mean hundreds of thousands of
      dollars for most companies, and millions for some.
    </p>
    <p>
      And this is not even taking into account the indirect time and money
      wasted; the extended timelines, impatient or frustrated clients,
      opportunity cost of new projects, etc.
    </p>

    <h2>What is technical debt exactly?</h2>
    <p>For most non-technical people, getting a grasp on technical debt is tricky.</p>
    <p>The best analogy I’ve heard is the Messy House because it properly scopes the problem.</p>
    <p>Imagine you live in a 2,000 square foot home with 5 or 6 different rooms. If you dirty up the kitchen in 1 day, it might take you a few hours to get it back in order. If you let it go for a week, it could maybe take a full day to get it back in order.</p>
    <p>In software, you could think about your project as a small house at first. Maybe I dirty things up for a few days, and go back and clean them up later.</p>
    <p>But with software projects, as you dirty things up, you are building as well. So as your project grows, so does your home, until the point where you need to maybe build even more homes to keep things modular.</p>
    <p>One house, a little mess, a little cleanup.</p>
    <p>Now, you have a medium to large sized project. It’s about 100 buildings big. You have bridges, tunnels, walkways, utilities, communication towers, etc. connecting all of these buildings. If you have 10 people (your developers) managing those buildings now, and each one makes a mess every day for 12 months. Or they improperly lay the foundation, improperly pave a road, or improperly plan the entire system. Now it could easily take another 12 months to fix things. All of a sudden that’s 50% of your time.</p>
    <p>It’s a serious problem.</p>

    <h2>What are the effects and symptoms?</h2>
    <p>As debt accrues, you start to notice the side effects:</p>
    <ul>
        <li>Developers get more agitated day to day</li>
        <li>Developers deliver results slower than before</li>
        <li>Developers deal with more bugs, and spent more time refactoring</li>
        <li>The system supports less (slowly becomes less performant, buggier, unable to a handle similar load, difficulties storing additional data, etc.)</li>
    </ul>
    <p>This ends up affecting everyone:</p>
    <ul>
        <li>Developers don’t enjoy their jobs as much</li>
        <li>Managers receive pressure from clients and pass it to developers</li>
        <li>Clients receive pressure from customers and pass it to the managers and stakeholders</li>
        <li>The company loses profit</li>
        <li>The users become frustrated with a lower quality product</li>
        <li>The employees and operation because riskier by the day, especially if the software is their primary or sole source of income</li>
    </ul>

    <h2>So why do developers do this?</h2>
    <p>I believe there are 2 reasons.</p>
    <ul>
        <li>Improper experience or training (they don’t know how)</li>
        <li>External pressure (bad processes, bad management, bad clients)</li>
    </ul>
    <p><strong>Improper experience or training</strong></p>
    <p>This is the easiest to fix.</p>
    <p>Train. Train. Train.</p>
    <p>Read about best practices, work with your team, get on the same page, and build a better product (from the inside and out.)</p>
    <p><strong>External Pressure</strong></p>
    <p>This is the harder one to fix.</p>
    <p>Management in your company, processes defined by your team, or bad clients can easily force technical debt into the project. This can happen every time a manager rushes and says there’s no time for testing, a client is unwilling to pay for the hours because there’s no immediate benefit to them, or technical leadership is in place that doesn’t prioritize it. (probably from laziness or arrogance).</p>
    <p>The only way to resolve this is to put pressure back up the chain and see if anyone is responsive and willing to change things, or move on to a better company/team. Hopefully your current team and management are receptive and willing so that the whole team can participate in designing new processes.</p>

    <h2>10 ways to reduce it</h2>
    <p>Keep in mind that any additional code or features inherently introduce debt and risk to a project. 0 lines of code will always be easier to maintain than 100k.</p>
    <p>But we can minimize the debt to the best of our ability as (good) developers.</p>
    <p><strong>Learn what good code is</strong></p>
    <p>It’s impossible to write good code unless you know what good code looks like. This is the #1 things developers need to do.</p>
    <p>Start with the concepts and metrics. What sort of metrics are used to describe good code? Readable. Maintainable. Testable. Performant. Secure. Neat. Modular. Loosely Coupled.</p>
    <p>Find these sort of concepts, read a lot of <a href="https://github.com" rel="noreferrer" target="_blank">open source</a> (or closed source if you have access) code, review what you think is good code, review what you think is bad code, and keep track of the “experts” or core developers for you primary language. Then write code over and over until you are a strong software craftsman.</p>
    <p><strong>Define your company standards</strong></p>
    <p>Pick standards and enforce them. Define a way that you are going to organize code, document code, style code, write tests, etc. Having a uniform set of guidelines keep developers from straying from best practices.</p>
    <p><strong>Put an automated process in place for enforcement</strong></p>
    <p>Pick one of the fantastic continuous integration tools out there like <a href="https://circleci.com/" rel="noreferrer" target="_blank">CircleCI</a>, <a href="https://drone.io/" rel="noreferrer" target="_blank">Drone</a>, <a href="https://travis-ci.org/" rel="noreferrer" target="_blank">Travis</a>, or <a href="https://bitbucket.org/product/features/pipelines" rel="noreferrer" target="_blank">Pipelines</a> and use automation to enforce your standards and policies.</p>
    <p>This reduces the work your developers have to do to immediately start writing better code. This means the automated system can auto format, lint, and run tests.</p>
    <p><strong>Put a manual review process in place for enforcement</strong></p>
    <p>Automated reviews can’t catch everything.</p>
    <p>Force developers to read other developers code and make comments/suggestions every day.</p>
    <p><strong>Write tests for (almost) all the code you write</strong></p>
    <p>I’m not the biggest TDD advocate in the world. I do think it’s a good process if it works for you.</p>
    <p>But I prefer using common sense, writing good code, and writing good tests (before, during, or after you write the code.)</p>
    <p><strong>Reflect and refactor</strong></p>
    <p>Implement a weekly or bi-weekly reflection period to think about code that can be improved and then prioritize the improvements in your project management or task system. Integrate it at a certain rate of development. (Ex. spend 1 hour refactoring for every 10 hours of development).</p>
    <p><strong>Fix the right debt</strong></p>
    <p>Some debt is not important.</p>
    <p>Are you working on a prototype/experiment? Will the project be dropped in 2 months for an alternative system? Are you developing 1 time use software?</p>
    <p>Prioritize fixing the right type of debt. The systems that will be around the longest and that will get the most attention from other developers and customers.</p>
    <p><strong>Check the stats</strong></p>
    <p>There is not a 1 to 1 relationship between metrics/statistics and great code, but tracking metrics are still important for every project so that you can include that information in the big picture.</p>
    <p>Use an automated tool to keep track of things like code coverage percentages, code complexity, test suite pass/fail badges, etc.</p>
    <p>Don’t use these as the ultimate sign of a healthy project. There are many 100% coverage projects where the tests do not test the right scenarios or input/output so it’s still a buggy project.</p>
    <p><strong>Deadhead</strong></p>
    <p>In gardening, there’s a concept called dead-heading. This means going through and removing the dead leaves or branches off of plants so that they have the proper amount of room to continue to grow.</p>
    <p>Software projects are similar. Sometimes there are “dead” parts of the code that need to be removed all together. Put this into your refactoring routine, so that developers can focus specifically on removing bad or unused parts of the code.</p>
    <p><strong>Mimic others</strong></p>
    <p>Just like you need to learn about what good code is, you also need to learn how great teams code. Talk to other developers and teams. Find the team who’s building a fantastic piece of software and ask them what their process looks like.</p>
    <p>Most people are willing to share. Processes aren’t usually anything super secret, and what makes the software great it usually the people who are executing the processes consistently. Just like craftsman putting a high level of effort into their trade, every day for years.</p>
  `,
  tags: [
      Tags.WebDevelopment,
      Tags.Software,
      Tags.Python,
      Tags.OpenSource,
      Tags.SoftwareCraftsmanship,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2018-09-22_write-better-code-outside-in",
      "2020-01-29_chaining-context-managers-for-mocks",
    ],
})
