import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-08-04_guide-to-no-bullshit-business-metrics",
  title: "Guide to tracking no-bullshit business metrics",
  datePosted: "2019-08-04",
  coverImage: "/blog/guide-to-no-bullshit-business-metrics/cover.jpg",
  description: `
    Businesses track horrible metrics for some reason. It’s of course not
    psychologically easy or intuitive to focus on the right metrics
  `,
  tags: [
    Tags.Business,
    Tags.SmallBusiness,
    Tags.Entrepreneurship,
  ],
  related: [
    "2020-03-29_daily-odoo-team-routine",
    "2019-09-04_guide-to-erp",
    "2019-09-17_simple-business-manifesto",
  ]
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p>
        <span className="first-letter">B</span>usinesses track horrible metrics
        for some reason. It’s of course not
        psychologically easy or intuitive to focus on the right metrics because
        they usually aren’t as exciting. You can drum up way more attention and
        make yourself feel better by focusing on numbers that, most of the time,
        don’t mean anything but are feel exciting.
      </p>
      <p>So what type of numbers am I even talking about here?</p>

      {/* === */}

      <h2>Metrics that are not really important</h2>
      <p>
        Here are some examples of metrics that are just not important for most
        businesses (businesses that are not trying to achieve rapid user growth
        to be acquired by FANG):
      </p>
      <ul>
        <li>Number of users, signups, or website visitors</li>
        <li>Number of employees</li>
        <li>Number of offices/facilities/locations</li>
        <li>Revenue</li>
        <li>Emails sent, calls made, or doors knocked on</li>
        <li>Rate of development</li>
        <li>Dollars or rounds of investment</li>
      </ul>
      <p>
        These are some of the most common metrics that businesses like to throw
        out there. I’m sure you see it online all of the time. “We have 10k new
        users sign up every month.” “We’ve grown from 5 employees to 500
        employees in 2 years.” “We’ve opened 6 new offices in the last 6
        months.” Some of them are indirectly linked to more important things,
        but putting them on a pedestal all alone doesn’t make sense.
      </p>

      {/* === */}

      <h2>Why do owners track bad metrics?</h2>
      <p>
        I don’t want to generalize or make assumptions about every business
        owner across the world. Every owner has a unique experience,
        circumstance, and set of problems. Even though we all go through unique
        paths, there are still some commonalities.
      </p>
      <p>From my experience, I see two scenarios the most often.</p>

      {/* --- */}

      <h3>Zero-sum game problem</h3>
      <p>
        Humans have come from a long history of competition. From our early days
        on the planet, we’ve had to compete to survive. Originally, we were
        competing for space, food, water, and basic resources. Today we don’t
        have as much to compete for. The agricultural revolution led to
        innovative mass production of food, the industrial revolution led to
        ease of access of all other basic resources and needs, and now the age
        of information has led to wide spread access to data globally.
      </p>
      <p>
        The issue is that humans have not evolved as quickly as the surrounding
        that we’ve created for ourselves, so competition is still programmed
        into us.
      </p>
      <p>
        So a business owner may truly believe in the metric because it’s hard to
        overcome our own biology. We get caught up in growth games, competing
        against the company down the street to see who has more heads in the
        office. Or maybe it’s about the size of the office, how nice the office
        is, how many sales people are making calls, who has more ads running,
        etc. These games are all natural to us but unfortunately, they are very
        dangerous for the business.
      </p>
      <p>
        Because our brains believe that we will not survive unless we out
        compete our neighbors, we end up playing a zero-sum game. No matter what
        business you work in, there’s probably enough market for you and your
        neighbor to each have their own.
      </p>

      {/* --- */}

      <h3>Fake it until you make it</h3>
      <p>
        Secondly, you have owners who don’t believe that these false metrics are
        that important, but become overly focused on tracking and sharing them
        because it creates a prettier facade to go over a broken interior.
      </p>
      <p>
        Again it comes back to competition and survival. Humans are the only
        known species on the planet that can create myths or use imagination to
        alter our own perception. When early humans got hungry but had no food,
        they could either fight and steal from the nearest group with food, or
        they could tell them that there was a being living on the cloud who
        would provide endless fruit later if they just paid their current fruit
        in tribute.
      </p>
      <p>
        Business owners today are playing the same game. We are of course doing
        it in a different way, and collectively we’ve been more educated and
        generally use more logic based arguments today so we wrap it in a nice
        bow of “500 employees must be better than 50 employees”. This comes back
        to fear of survival and trying to out compete our neighbors.
      </p>

      {/* === */}

      <figure>
        <img src="/blog/guide-to-no-bullshit-business-metrics/metrics.jpeg" alt=""/>
      </figure>
      <h2>What’s the problem with the metrics?</h2>
      <p>
        To figure out what’s wrong with the metrics, we have to think about what
        metrics are tracked and reviewed in the first place. As owners, we
        generally like data and information for two reasons:
      </p>
      <ol>
        <li>To review the health of the business currently</li>
        <li>To improve certain aspects of the business</li>
      </ol>
      <p>
        In my opinion, all of those metrics above do not correlate directly to
        business health. A failing business can hire a ton of employees, raise
        boat load of cash, make millions or billions in revenue, have a massive
        and aggressive sales team, have millions of users, and even develop new
        products very quickly. These do not mean the business is healthy and
        viable long term.
      </p>
      <p>
        Now again, maybe you don’t give a shit about building a long term
        business. If you don’t care at about your business being around in 3–10+
        years, I am not talking about you. I am not talking about the dorm room
        Zuckerberg-esque startups built to raise money, build user bases, over
        hire, burn cash, and repeat in an endless cycle until acquired or
        profitable.
      </p>

      {/* === */}

      <h2>What should be tracked?</h2>
      <p>
        In my eyes, what makes a business viable long term and healthy is not
        that complicated. You don’t need a fancy ERP or business intelligence
        tool to keep your eyes on a few basic things:
      </p>
      <ol>
        <li><strong>Profit</strong>: how good are we at making money (after expenses)?</li>
        <li><strong>Happiness</strong>: how happy do we make our employees and customers?</li>
      </ol>
      <p>
        At the core, it’s really that simple. If these metrics pass, then you
        don’t have to worry about anything else. If you are a healthy margin of
        profitable, all of your employees are happy at work, and all of your
        customers are happy with your products/services, then you only have to
        worry about keeping it that way.
      </p>
      <p>
        Now, at something lags, then you may have to start digging into some
        2nd tier or 3rd tier metrics temporarily. For example, your profit
        margins dropped badly over the last couple of months. You now have to
        figure out what might have gone wrong, if it’s something that could be
        dangerous long-term. Every business is different, but this might look
        like digging into a list of customers who dropped subscriptions on your
        product, or talking to your sales team about potential causes.
      </p>
      <p>
        But these lower tier things aren’t something that needs to be drooled
        over every day of the year.
      </p>

      {/* === */}

      <h2>Focus on you</h2>
      <p>
        Maybe I’m repeating myself here a bit, but I think it’s important. All
        of the metrics I listed above are examples of things tracked by business
        owners about their own businesses. I didn’t include the number of
        owners who track everything that their competitors do.
      </p>
      <p>
        This, again, comes back to survival of the fittest. The zero-sum game
        where we think we have to win and they have to lose. That’s not the
        case. There are 6 billion people on the planet. The market that you are
        selling to, especially if you have any type of digital product, is
        plenty big. There’s enough to go around.
      </p>
      <p>
        We might just have to transition to a world where we admire
        co-habitation and healthy middle class incomes instead of do or die
        competitive to become one of the handful of multi billionaires in the
        world.
      </p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
