import React, { useEffect, useState } from 'react';
import GateOverlay from '../components/GateOverlay';

export default function Root({ children }) {
  const [tokenOk, setTokenOk] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // só roda no cliente, nunca no build
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token === 'CDIC2025') {
      localStorage.setItem('cdic_token_ok', '1');
    }

    const ok = localStorage.getItem('cdic_token_ok') === '1';
    setTokenOk(ok);
    setChecked(true);
  }, []);

  // enquanto não verifica, mostra overlay
  if (!checked || !tokenOk) {
    return <GateOverlay />;
  }

  return <>{children}</>;
}
