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
              var TOKEN_VALIDO = "SEGREDO123";

              if (token !== TOKEN_VALIDO) {
                document.write('<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;text-align:center"><div><h1>Acesso não autorizado 🚫</h1><p>Você precisa acessar pelo sistema CDIC.</p></div></div>');
                throw new Error("Acesso bloqueado"); // impede React de carregar
              } else {
                // opcional: remove o token da URL
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