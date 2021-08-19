import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-09_odoo-down-for-maintenance",
  title: "Odoo — Down for maintenance",
  subtitle: "Give your users an explanation about what’s going on",
  datePosted: "2019-03-09",
  coverImage: "/blog/odoo-down-for-maintenance/cover.jpg",
  description: "Configuring a Down For Maintenance page can save a so much headache from customer complaints. I include one on every Odoo instance I configure.",
  contentSnippet: `
    <p>For every Odoo instance I configure, I add a Down For Maintenence page that displays when any 50x HTTP error occurs. This gives more information than a generic error page from the web server. That error page can really scare people when they don’t know what’s going on behind the scenes.</p>
    <h2>The web server (Nginx)</h2>
    <p>I’m using Nginx in this example, but it’s possible via any web server you are using. You can quickly install nginx on linux via <code>sudo apt install nginx</code> .</p>
    <p>Here is an example of a very simple virtual host file...</p>
  `,
  tags: [
      Tags.Docker,
      Tags.Odoo,
      Tags.OpenSource,
      Tags.Erp,
      Tags.WebDevelopment,
    ],
  related: [
      "2019-03-03_odoo-tricks-and-tools",
      "2019-04-26_becoming-a-superuser-in-odoo",
      "2019-07-13_ten-ways-to-prevent-tech-debt",
    ],
})
