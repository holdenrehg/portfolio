import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-03-27_odoo-field-guide',
    title: 'The Unofficial Odoo Field Guide (v12)',
    subtitle: 'Reference of field options and field attribute options',
    datePosted: '2019-03-27',
    coverImage: '/images/articles/odoo-field-guide/cover.png',
    thumbnailImage: '/images/articles/odoo-field-guide/cover-min.jpg',
    description: 'Complete reference for ORM fields in Odoo v12.',
    contentSnippet: `
    <p>This is a complete reference to all fields that exist in Odoo (as of version 12.0) with the required and optional attributes for each field.</p>
    <code>
      class Many2one(_Relational):
      class One2many(_RelationalMulti):
      class Many2many(_RelationalMulti):

      class Boolean(Field):
      class Integer(Field):
      class Float(Field):
      class Monetary(Field):
      class Char(Field):
      class Text(Field):
      class Html(Field):
      class Date(Field):
      class Datetime(Field):
      class Binary(Field):
      class Selection(Field):
    </code>
    <h2>Many2one</h2>
    <p>
      A relationship field defining that Model A has a...
    </p>
    `,
    tags: [Tags.WebDevelopment, Tags.OpenSource, Tags.Odoo, Tags.Erp, Tags.Python],
    related: [
        '2019-09-04_guide-to-erp',
        '2019-07-01_clicking-everywhere-in-odoo',
        '2019-02-02_writing-tests-in-odoo',
    ],
});
