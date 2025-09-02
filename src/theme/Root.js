import React, { useState, useEffect } from 'react';
import GateOverlay from '../components/GateOverlay';

export default function Root({ children }) {
  const [tokenOk, setTokenOk] = useState(false);

  useEffect(() => {
    // Verifica se token está na URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token === 'CDIC2025') {
      localStorage.setItem('cdic_token_ok', '1');
      setTokenOk(true);
      // Remove token da URL
      if (window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } else if (localStorage.getItem('cdic_token_ok') === '1') {
      setTokenOk(true);
    }
  }, []);

  // Se não autorizado, mostra overlay cobrindo tudo
  if (!tokenOk) {
    return <GateOverlay />;
  }

  // Site liberado
  return <>{children}</>;
}
