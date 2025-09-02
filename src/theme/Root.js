import React, { useEffect, useState } from 'react';
import GateOverlay from '../components/GateOverlay';

export default function Root({ children }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token === 'CDIC2025') {
      localStorage.setItem('cdic_token_ok', '1');
    }

    setChecked(true); // sinaliza que a verificação acabou
  }, []);

  const tokenOk = localStorage.getItem('cdic_token_ok') === '1';

  // Se a verificação ainda não terminou, bloqueia tudo
  if (!checked || !tokenOk) {
    return <GateOverlay />;
  }

  // Se liberado, renderiza normalmente
  return <>{children}</>;
}
