import React from "react"
import { Layout } from "../../components"
import { Article, Meta } from "../../components/blog"

const meta = new Meta({
  id: "guide-to-erp",
  title: "A guide to ERP (infographic)",
  datePosted: "2019-09-04",
  coverImage: "/blog/guide-to-erp/cover.jpg",
  description: `
    The simplest possible definition of an ERP system generally would be a
    program that business leaders use to organize and run the majority of their
    business operations.
  `,
  tags: "erp software,small business,cloud computing,software development,saas",
  related: "daily-odoo-team-routine,guide-to-no-bullshit-business-metrics,simple-business-manifesto",
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p>
        The simplest possible definition of an ERP system generally would be a
        program that business leaders use to organize and run the majority of
        their business.
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
        throughout its journey to become what it is today as well as the
        potential future of these types of systems.
      </p>

      <figure>
        <img src="/blog/guide-to-erp/infographic.png"/>
      </figure>

      <h2>What does ERP mean?</h2>

      <p>
        ERP stands for Enterprise Resource Planning. Honestly, this acronym
        doesn’t 100% make sense for the modern business. ERP can still bring a
        huge amount of value to businesses, but the term has morphed and evolved
        from strictly material and resource planning to supporting a massive
        range of operations for the business.
      </p>
      <p>
        This would involve functions like accounting, manufacturing, logistics,
        human resources, budgeting, business intelligence, purchasing, order
        processing, e-commerce, customer relationship management, time tracking,
        invoicing/billing, quality assurance/control, or warehouse/inventory
        management.
      </p>
      <p>
        ERP is not strictly those functions. An ERP for your business might
        involve all, some, or none of those functions. It might also involve
        completely different functions that I didn’t list. ERP today just means
        a centralized system that runs the majority of your business
        operations.
      </p>

      <h2>What is the point of ERP?</h2>

      <p>
        You can read more about the history of ERP below, but generally, ERP
        systems are meant to be a centralized system for business operations.
        Instead of having an app for accounting, an app for sales, an app for
        manufacturing, etc. it’s all built into a single system where data and
        processes can be intertwined if needed.
      </p>
      <p>It is meant to bring benefits such as:</p>
      <ul>
          <li><strong>Easier maintainability:</strong> Worry about maintaining 1 system instead of multiple.</li>
          <li><strong>Data integrity</strong>: Company data is controlled from a single location.</li>
          <li><strong>Efficiency</strong>: Simplified user training and usability because they access a single system for everything that they need day today.</li>
          <li><strong>Streamlined</strong>: Data and processes can link more easily within the same system compared to tying processes together across multiple systems.</li>
      </ul>

      <h2>Before ERP</h2>

      <p>
        To truly understand what ERP represents today, you need to know where it
        came from. It's origin begins with early manufacturing and warehousing
        companies that wanted to take advantage of the recent advances in
        mainframe computing between the 1950s and 1980s.
      </p>

      <h3>Manufacturing and MRP I</h3>

      <p>
        Manufacturing is really where it all started. The complications of
        running a manufacturing businesses before computers generated a need for
        pen and paper processes which could be seen as the foundation for MRP.
        Toyota developed a framework called TPS (Toyota Production System) which
        included tools like physical cards attached to parts on an assembly line
        designating details and instructions for that part.
      </p>
      <p>
        Before the initial mainframe systems, manufacturing businesses had to
        track incoming/outgoing logistics for all parts, on-hand inventory in
        multiple warehouses, the consumption of raw parts into sub assemblies
        and finished goods, quality assurance, etc. all by hand.
      </p>
      <p>
        Once computers became (slightly) more available for businesses is when
        the guidelines for MRP were officially developed by Joseph Orlicky in
        1964. Orlicky was an IBM engineer who had heavily studied the TPS and
        took inspiration from it before developing MRP.
      </p>
      <p>
        The scope of MRP initially consisted of tracking some essential
        manufacturing information in computerized systems/applications to allow
        for users to answer some simple questions:
      </p>
      <ul>
        <li>Inventory control (what parts do we have?)</li>
        <li>Bill of material processing (what does it take to create a part or finished good?)</li>
        <li>Manufacturing scheduling (how many parts or finished goods can we make? when can we make them?)</li>
        <li>Order scheduling (when do we need to order parts to support the manufacturing schedule?)</li>
        <li>Work instructions (what are the exact instructions for making a certain part or finished good?)</li>
      </ul>
      <p>
        These original MRP systems were implemented on early mainframe computers
        like the <a href="https://en.wikipedia.org/wiki/IBM_System/360" target="_blank">IBM 360</a>
        which was larger than a refrigerator. MRP serves as the father of modern
        ERP.
      </p>
      <figure>
        <img src="/blog/guide-to-erp/ibm-360.jpg"/>
        <figcaption>The IBM 360</figcaption>
      </figure>

      <h3>The Creation of MRP II</h3>

      <p>
        MRP II came from the need for expanding MRP. 15-20 years after the
        creation of MRP, computer systems had dramatically evolved. Mainframes
        were no longer the only option for businesses. Personal computing had
        come around, leading to the mass production of computers making it
        cheaper and easier for businesses to begin implementation.
      </p>
      <p>
        Client server architectures and micro computing started to make more
        sense for businesses, so as MRP vendors were forced to evolve for the
        first time from their original mainframe software, MRP II guidelines
        were created to explain the new functionality that comes with that
        evolution.
      </p>
      <p>
        MRP II focused on the limitations and issues not yet solved by MRP. This
        consisted of:
      </p>
      <ul>
        <li>Machine and equipment integration</li>
        <li>Accounting and financial planning</li>
        <li>More advanced scheduling and forecasting</li>
        <li>Capacity planning</li>
        <li>Quality assurance</li>
      </ul>

      <h2>The Birth of ERP</h2>

      <p>
        Software vendors continued to work and build up these now 25-30 year old
        applications. Some vendors were working with thousands of customers and
        added functionality to handle more and more use cases that were
        consistently falling outside of the scope of MRP II.
      </p>
      <p>
        The term ERP was officially coined by Garter in 1990 to describe this
        next phase. They felt that the software systems were expanding so far
        past just material planning that they needed a new term to describe them.
        They were beginning to focus on business functions obviously outside of
        responsibility of the warehouses and manufacturing facilities.
      </p>

      <figure>
        <img src="/blog/guide-to-erp/r2.gif"/>
        <figcaption>SAP R/2 screen from the mid 1980s</figcaption>
      </figure>

      <p>
        ERP was the beginning of a software system that covers essentially any
        business function that a business needs to run.  This led to the
        enterprise MRP providers of the time, like SAP for example, to start
        updating their now legacy software.
      </p>
      <p>
        The major benefit of ERP at the time was having a monolithic application
        on-site for the company. Instead of managing a collection of decoupled,
        individual programs, maintainers could worry about a single app that
        handles the majority of the work for the company. This was huge for
        companies at the time.
      </p>

      <h2>Internet and SAAS</h2>

      <p>
        At the same time that ERP was on the rise, so was the growth of the
        internet and early SAAS (software as a service) applications.
      </p>
      <p>
        SAAS was trying to be the opposite of what ERP wanted at the time. While
        ERP was focused on becoming a monolithic, everything you need with a bow
        on top, type of system installed on-site in your facility, SAAS
        companies wanted to handle the infrastructure for you.
      </p>
      <p>
        Most Software developers and many business owners today do not think
        about this issue any more. There are some scenarios where a company
        would buy all of the equipment, configure a rack a servers on-site, hire
        internal or external IT to manage the servers, and deploy a business
        application on it. But most of us look to the cloud for server
        management these days.
      </p>
      <p>That's exactly what SAAS companies were driving towards.</p>
      <p>
        And the idea took off pretty quickly because companies liked the idea of
        reducing all of this overhead. Managing servers is not a simple process
        and if a SAAS company can do it more efficiently and cheaper then it's
        going to be a win-win.
      </p>
      <p>
        While the internet and SAAS companies were building out these
        infrastructures, ERP was getting pulled around in multiple directions
        because of the rise of these new technologies. The ERP companies were
        trying to update their legacy mainframe software to run as client server
        applications. At the same time, they had to begin thinking about and
        planning for creating internet-enabled applications. And finally now
        they are faced with the on-site vs off-site question.
      </p>
      <p>
        Even up to today, major ERP companies are still slowly migrating their
        applications to work both on-site and as an off-site SAAS application.
      </p>

      <h2>The Mobile Revolution</h2>

      <p>
        Another rise of a new technology forced ERP vendors to again adapt. One
        of the biggest releases was the 2007 release of the iPhone from Apple.
        At this point, ERP vendors are still in the process of migrating their
        systems towards a SAAS or cloud computing model.
      </p>

      <figure>
        <img src="/blog/guide-to-erp/iphone1.jpeg"/>
        <figcaption>The first iphone</figcaption>
      </figure>

      <p>
        While simultaneously doing that, the entire software world starts
        thinking about how mobile devices are going to affect their application
        development. Eventually in 2016, mobile data for the first time outpaces
        all desktop data and is just another indicator that ERP vendors and all
        software vendors have ensured their applications are mobile ready.
      </p>

      <h2>What's Next?</h2>

      <p>
        Now we are in 2019 and most ERP vendors are still in the process of
        catching up to SAAS and cloud computing applications.
      </p>
      <p>
        Unfortunately, the term ERP has been slowly trending downward for the
        last 15 years. The rise of more and more SAAS applications to handle
        very specific business needs has become the go to tool for most
        businesses.
      </p>
      <figure>
        <img src="/blog/guide-to-erp/erp-google-term.png"/>
      </figure>
      <p>
        Some ERP businesses are trying to ignore the stigma associated with the
        term by re-branding as a "suite of business apps" or a "business
        management application", but the overarching issues come down to the
        pricing models and idea of modular vs. monolithic.
      </p>
      <p>
        ERP needs a rebirth again and adapt just as it has in the past, to move
        away from pricing that only the elite companies can afford. Even when a
        vendor offers cheaper license fees, companies still pay $50k-$100k on
        average when doing an ERP implementation because of support costs,
        training, customization fees, configuration, hosting, maintenance and
        upgrades. All inclusive costs for ERP will provide a more inclusive
        option for small to medium sized businesses.
      </p>
      <p>
        We also need to move away from building it all in house. There's still a
        place for a home base/single source of truth application like a great
        ERP, but the ERP system does not need to be entirely responsible for
        providing all of that functionality. It can play nice and integrate with
        other applications out there.
      </p>
      <p>
        I believe that's the next phase of ERP, if the term ERP is even going
        to stick around.
      </p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
