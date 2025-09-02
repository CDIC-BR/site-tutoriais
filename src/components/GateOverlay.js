import React from 'react';

export default function GateOverlay() {
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
