// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.ts'),
      breadcrumbs: true,
      editUrl: 'https://github.com/haqq-network/docs/tree/main/',
      ...options,
    }),
  ];
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HAQQ Documentation',
  tagline:
    'HAQQ is a scalable and interoperable Ethereum, built on Proof-of-Stake with fast-finality.',
  url: 'https://docs.haqq.network/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: 'HAQQ Network',
      // denom: 'Evmos',
      // ticker: 'EVMOS',
      // binary: 'evmosd',
      testnet_denom: 'ISLM',
      // testnet_ticker: 'tEVMOS',
      rpc_url: 'https://rpc.eth.haqq.network',
      // rpc_url_testnet: 'https://eth.bd.evmos.dev:8545',
      rpc_url_local: 'http://localhost:8545/',
      chain_id: '11235',
      // testnet_chain_id: '9000',
      // latest_version: 'v11.0.1',
      // mainnet_version: 'v11.0.1',
      // testnet_version: 'v11.0.1',
      // version_number: '2',
      // testnet_version_number: '4',
      // testnet_evm_explorer_url: 'https://evm.evmos.dev',
      // evm_explorer_url: 'https://escan.live',
      // testnet_cosmos_explorer_url: 'https://testnet.mintscan.io/evmos-testnet',
      // cosmos_explorer_url: 'https://www.mintscan.io/evmos',
      block_explorer_url: 'https://explorer.haqq.network',
      eth_name: 'Main Ethereum Network',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // NOTE: Docs enabled separate in plugins section
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    defineSection('intro'),
    defineSection('validators'),
    defineSection('develop'),
    defineSection('explorers'),
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/haqq-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'HAQQ Network',
          src: 'img/haqq-logo.svg',
          srcDark: 'img/haqq-logo-white.svg',
        },
        items: [
          {
            href: '/intro',
            position: 'left',
            label: 'Intro',
          },
          {
            href: '/validators',
            position: 'left',
            label: 'Validators',
          },
          {
            href: '/develop',
            position: 'left',
            label: 'Develop',
          },
          {
            href: '/explorers',
            position: 'left',
            label: 'Explorers',
          },
          {
            href: 'https://github.com/haqq-network/haqq',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                href: '/intro',

                label: 'Intro',
              },
              {
                href: '/validators',

                label: 'Validators',
              },
              {
                href: '/develop',

                label: 'Develop',
              },
              {
                href: '/explorers',

                label: 'Explorers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.gg/islamiccoin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/The_HaqqNetwork',
              },
              {
                href: 'https://github.com/haqq-network/haqq',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAQQ Network`,
      },
      prism: {
        theme: themes.vsLight,
        darkTheme: themes.vsDark,
        additionalLanguages: [
          'powershell',
          'shell-session',
          'bash',
          'solidity',
          'typescript',
          'toml',
          'yaml',
          'json',
        ],
      },
      algolia: {
        appId: 'T5OEVED57K',
        apiKey: '12309afa621f617e25de57d1503d5ff3',
        indexName: 'my_first_index',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
