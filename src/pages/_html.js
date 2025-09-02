// src/pages/_html.js
import React from "react";
import { Html, Head, Body, Main, Scripts } from "@docusaurus/theme-common/internal";

export default function CustomHtml() {
  return (
    <Html lang="pt-BR">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var params = new URLSearchParams(window.location.search);
              var token = params.get("token");
              var TOKEN_VALIDO = "SEGREDO123"; // Aqui coloque o token que o botão do CDIC vai usar

              if (token !== TOKEN_VALIDO) {
                // Bloqueia o carregamento e exibe mensagem
                document.documentElement.innerHTML = '<body style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;text-align:center"><div><h1>Acesso não autorizado 🚫</h1><p>Você precisa acessar pelo sistema CDIC.</p></div></body>';
              } else {
                // Remove o token da URL sem recarregar a página
                if (window.history.replaceState) {
                  var novaUrl = window.location.origin + window.location.pathname;
                  window.history.replaceState({}, document.title, novaUrl);
                }
              }
            })();
          `
        }} />
      </Head>
      <Body>
        <Main />
        <Scripts />
      </Body>
    </Html>
  );
}