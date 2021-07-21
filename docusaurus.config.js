const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'DiscordVotes Docs',
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DiscordVote', // Usually your GitHub org/user name.
    projectName: 'Docs', // Usually your repo name.
    themeConfig: {

        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },

        navbar: {
            title: 'DiscordVote Docs',
            hideOnScroll: true,
            logo: {
                alt: 'My Site Logo',
                src: 'img/discordvote.png',
            },
            items: [
                // left
                {
                    label: 'Get Started',
                    position: 'left',
                    items: [
                        {
                            label: 'Installation',
                            to: '/docs/installation/',
                        },
                        {
                            label: 'React',
                            to: '/docs/quick-start/react/',
                        },
                        {
                            label: 'Style Guide',
                            to: '/docs/style-guide/',
                        },
                        {
                            label: 'Examples',
                            to: '/docs/examples/',
                        },
                    ],
                },
                {
                    label: 'Documentation',
                    position: 'left',
                    to: 'docs/',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Website',
                            href: 'https://discordvote.net',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Status',
                            href: 'https://status.discordvote.net',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/DiscordVote',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DiscordVote. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
