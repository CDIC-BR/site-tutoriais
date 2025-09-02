import React, { useState, useLayoutEffect } from 'react';
import GateOverlay from '../components/GateOverlay';

export default function Root({ children }) {
  const [tokenOk, setTokenOk] = useState(null); // null = ainda não verificado

  useLayoutEffect(() => {
    // só roda no cliente
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token === 'CDIC2025') {
      localStorage.setItem('cdic_token_ok', '1');
    }

    setTokenOk(localStorage.getItem('cdic_token_ok') === '1');
  }, []);

  if (tokenOk === null || tokenOk === false) {
    return <GateOverlay />;
  }

  return <>{children}</>;
}
