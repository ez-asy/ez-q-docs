// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ez-q",
  tagline: "A message queue built for simplicity",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/ez-q/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ez-asy", // Usually your GitHub org/user name.
  projectName: "ez-q", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ez-asy/ez-q-docs",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "ez-q",
        logo: {
          alt: "ez q logo",
          src: "ez-q-logo-black.svg",
        },
        items: [
          {
            type: "doc",
            docId: "quickstart",
            position: "left",
            label: "Docs",
          },
          { to: "blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ez-asy/ez-q",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/quickstart",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ez-asy/ez-q",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ez-q. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
