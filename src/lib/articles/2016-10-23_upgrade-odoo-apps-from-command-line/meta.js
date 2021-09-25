import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2016-10-23_upgrade-odoo-apps-from-command-line',
    title: 'Upgrade Odoo apps from command line',
    subtitle: 'Luckily, not as difficult as it seems',
    datePosted: '2016-10-23',
    backgroundColor: '#1F2937',
    textDecorationColor: '#ffffff',
    description:
        'Just like the title says. I walk through the process of upgrading an Odoo app from the command line.',
    contentSnippet: `
    <p>Every once in a while, you will run into an issue during Odoo development that causes an internal server error in one of your Odoo databases. This could be caused by some different issues:</p>
    <ul>
        <li>Pulling down code updates without restarting the odoo processes, preventing python files from generating the proper .pyc files.</li>
        <li>Not properly updating the applications that were affecting from pulling down code changes.</li>
        <li>Not updating across all databases that have the effected applications installed.</li>
    </ul>

    <p>Let’s assume we have one Odoo instance currently running. I can view the processes by running a ps aux and greping for the script name...</p>
    `,
    tags: [Tags.Odoo, Tags.WebDevelopment, Tags.Software, Tags.Python, Tags.OpenSource],
    related: [
        '2020-03-29_daily-odoo-team-routine',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
        '2019-03-27_odoo-field-guide',
    ],
});
