import React, { useEffect, useState } from 'react';

export default function GateOverlay() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    // Verifica token ou se já foi validado antes no localStorage
    if (token === 'CDIC2025') { // <<< coloque o token que você quer
      setGranted(true);
      if (window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      localStorage.setItem('cdic_token_ok', '1');
    } else if (localStorage.getItem('cdic_token_ok') === '1') {
      setGranted(true);
    }
  }, []);

  // Se autorizado, não mostra nada
  if (granted) return null;

  // Overlay de bloqueio
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }}>
      <div>
        <h1>Acesso não autorizado 🚫</h1>
        <p>Você precisa acessar pelo sistema CDIC.</p>
      </div>
    </div>
  );
}
