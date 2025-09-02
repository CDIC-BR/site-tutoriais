import React from 'react';
import GateOverlay from '../components/GateOverlay';

export default function Root({ children }) {
  return (
    <>
      <GateOverlay />
      {children}
    </>
  );
}
