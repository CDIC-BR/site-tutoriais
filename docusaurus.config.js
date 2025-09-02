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
  url: 'https://cdic-br.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/site-tutoriais/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CDIC-BR', // Usually your GitHub org/user name.
  projectName: 'site-tutoriais', // Usually your repo name.
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

  // -----------------------------------------------------------------------
  // Plugin que injeta um "gate" simples no <head> para ocultar o site
  // a menos que haja o token correto na query string.
  // -----------------------------------------------------------------------
  plugins: [
    function gatePlugin() {
      return {
        name: 'gate-plugin',
        injectHtmlTags() {
          return {
            headTags: [
              // 1) Esconde o body antes de qualquer renderização
              {
                tagName: 'style',
                innerHTML: 'html:not(.token-ok) body{display:none!important;}',
              },
              // 2) Script precoce que valida token e libera o body
              {
                tagName: 'script',
                innerHTML: `(function(){
  try{
    var params = new URLSearchParams(location.search);
    var ok = localStorage.getItem('cdic_token_ok') === '1';
    if(!ok){
      var token = params.get('token');
      // === ALTERE AQUI O TOKEN PARA O VALOR QUE O SISTEMA CDIC VAI ENVIAR ===
      if(token === 'CDIC2025'){
        localStorage.setItem('cdic_token_ok','1');
        ok = true;
        if(history.replaceState){
          history.replaceState({}, document.title, location.pathname + location.hash);
        }
      }
    }
    if(ok){
      // libera o body
      document.documentElement.classList.add('token-ok');
    }else{
      // mostra a tela de bloqueio antes que qualquer conteúdo seja renderizado
      document.write('<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;text-align:center"><div><h1>Acesso não autorizado 🚫</h1><p>Você precisa acessar pelo sistema CDIC.</p></div></div>');
    }
  }catch(e){}
})();`,
              },
            ],
          };
        },
      };
    },
  ],

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
          
          { to: '/contato', label: 'Contate-nos', position: 'left' },

          { href: 'https://forms.office.com/r/FPeGpNUy0k', label: 'Avalie-nos', position: 'left' },

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
