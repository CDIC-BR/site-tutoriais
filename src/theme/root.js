import React, { useEffect } from "react";

export default function Root({ children }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    const TOKEN_VALIDO = "SEGREDO123";

    if (token !== TOKEN_VALIDO) {
      document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;text-align:center">
          <h1>Acesso não autorizado 🚫</h1>
          <p>Você precisa acessar pelo sistema CDIC.</p>
        </div>
      `;
    } else {
      // opcional: remove o token da URL para não ficar feio
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return <>{children}</>;
}