import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-03-26_business-lessons-learned-from-chef-david-chang",
  title: "Business lessons learned from Chef David Chang",
  datePosted: "2019-03-26",
  coverImage: "/blog/business-lessons-learned-from-chef-david-chang/cover.jpg",
  description: `
    I have been following David Chang and his work since about 2008, but I
    didn’t realize how much I’ve really learned from him, not about food, but
    about running a business until recently.
  `,
  tags: [
    Tags.Entrepreneurship,
    Tags.SmallBusiness,
    Tags.BusinessStrategy
  ],
  related: [
    "2019-09-17_simple-business-manifesto",
    "2019-08-04_guide-to-no-bullshit-business-metrics",
    "2020-03-29_daily-odoo-team-routine",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p><span className="first-letter">I</span> have been following David Chang and his work since about 2008, but I didn’t realize how much I’ve really learned from him, not about food, but about running a business until recently.</p>
      <p>In 2008, I had just started high school. I wasn’t really into cooking at this point, but I was definitely into different cooking/food shows. Iron Chef America had been running for a few years at this point, goofier shows like Man v Food were getting released, and Emeril Live was approaching the end of a long run.</p>
      <p>It seems weird for a 14-year-old kid to be watching a ton of cooking shows, but it’s something I had been doing since I was very young. It was a trick my parents played on me to try and get me to sleep. I was allowed to stay up late and watch tv, but it had to be either the Food Network or the History Channel. Guess it didn’t work out too well. I ended up staying up even later than normal, picking up habits like screaming “Bam!” at people and learning about cooking utensils early (when seeing a movie like Star Wars I once thought that one of their weapons was a giant ladle).</p>
      <p>At the same time, I ran across articles about David Chang in places like The New Yorker. Growing up in the Midwest, I didn’t exactly have a great idea about what “ramen” really even meant. For me, that just meant the 25 cents, cheap packages you go to the store and pick up when you’re going to stay up all night at your friend&#39;s house.</p>
      <p>Didn’t think much about a Noodle Bar going into New York at the time, but David Chang himself seemed interesting. Mainly because people were portraying him like both a genius and a lunatic. Saw stories of him punching holes in walls but also shaking up the industry (which again, at this point in my life I knew nothing about.) So I just glazed by it.</p>
      <p>Fast forward to early college days and I started to see David Chang’s name again. This time because of more food shows. PBS released a fantastic show called Mind of a Chef produced by Anthony Bourdain that featured chefs like Chang and Sean Brock in the early seasons. This is where I really got to understand more about what type of person he was and where his drive for creating food comes from. At this point, with only a microwave in my 12ft by 12ft dorm room, I wasn’t really able to start cooking the way I wanted but I could at least start going out and finding new food. Trying out new things.</p>
      <p>I’m probably a little off on this, but in 2012 Chang probably already had 3 or 4 different restaurants.</p>
      <p>I couldn’t recognize great food or what it takes to make a great chef, but I seriously studied technology, business, and entrepreneurship in my life. I always wanted to start businesses (and tried many times), so to see someone young, passionate, raw, and honest opening up about non-tech businesses really inspired me.</p>
      <p>Especially because he was making it work over and over again.</p>
      <p>Fast forward one more time. I’ve left college, I have copies of Lucky Peach, I see the first season of Ugly Delicious pop up on Netflix, and I drive across the country and up through Canada to visit different restaurants so that I can finally eat at places like Noodle Bar. This is the first time I’ve even left the country in my life.</p>
      <p>And then one of the least expected things happens when Chang starts a podcast called The Dave Chang Show. This ends up being extremely influential to me. I’ve probably learned more “real life” business lessons from the podcast than I have from most things I’ve read from the cliché “influencers” in the tech industry.</p>
      <p>This is what really flipped the switch in my mind from Dave Chang The Chef to Dave Chang The Business Owner.</p>
      <p>So, finally, here’s what I’ve learned over the last couple of years, mainly from the podcast, that will stick with me for a long time:</p>
      <ul>
          <li><strong>Do not edit yourself.</strong> You are going to get a lot of ideas and it’s easy to edit them in your head. It reminds of trying to ask out someone in high school. It’s easy to walk through all the scenarios in your head, how the conversation is going to go, decide that it’s not going to work, and then give up. Before you even try. So we have to work towards letting ideas play themselves out in real life, not in our minds.</li>
          <li><strong>It’s okay to doubt yourself.</strong> You can read bullshit articles all day long about confidence being the requirement for success. Confidence is great if you’re lucky enough to have learned it. But I’ve seen from Chang that being fearless is more important. It’s okay to doubt every step you take as long as you don’t scare yourself away from taking those steps.</li>
          <li><strong>You’re going to die.</strong> We don’t have unlimited time. Some of us may not be around next year, so act like it.</li>
          <li><strong>Criticism is painful, but you can’t ignore it.</strong> Even if it hurts, there’s value in the critique.</li>
          <li><strong>Get over yourself. Empower the people around you.</strong> Chang is constantly empowering people. He’s putting chefs in charge of restaurants who some owners would ignore all together and he’s helping those chefs win awards. Not for himself, but for them. Awards don’t even seem to mean anything to him. There’s not too many managers and owners in business who do put their employees first 100% like that.</li>
          <li><strong>Don’t go it alone.</strong> Life is hard enough, don’t make it harder by fighting through it alone. Find the people you need. That may mean a life long psychiatrist, a romantic partner, a business partner, or just some good friends.</li>
          <li><strong>Think about your audience.</strong> Chang doesn’t entirely think about himself when designing a menu and business owners shouldn’t solely think about themselves when building a product. What’s best for the customers?</li>
          <li><strong>Don’t sugarcoat.</strong> Great food and great businesses aren’t created without honesty and trust.</li>
      </ul>
      <p>Thanks Dave.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
