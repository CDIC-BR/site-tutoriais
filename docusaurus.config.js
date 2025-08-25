// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

 /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutoriais Sistema CDIC-BR',
  tagline:
    'Bem-vindos ao repositório de tutoriais e guias de usuário do Sistema CDIC-BR \n Centro de Dados da Igreja Católica no Brasil ',
  favicon: 'img/edições.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tutoriais.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cdic-br', // Usually your GitHub org/user name.
  projectName: 'tutoriais.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        // 🔹 Removido o blog, não vamos mais usar
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Início',
        logo: {
          alt: 'My Site Logo',
          src: 'img/cnbb.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriais',
          },

          { href: 'https://forms.office.com/r/FPeGpNUy0k', label: 'Avalie-nos', position: 'left' },
          { href: 'https://www.cnbb.org.br/', label: 'CNBB', position: 'left' },
          {
            href: 'https://www.edicoescnbb.com.br/',
            label: 'Edições CNBB',
            position: 'left',
          },
           🔹 Alterado para apontar para a nova página de contato
          { to: '/contato', label: 'Contate-nos', position: 'left' }, 
          {
            href: 'https://sistemacdicbr.cnbb.org.br/',
            label: 'Voltar ao Sistema',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} CNBB, CDIC-BR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;