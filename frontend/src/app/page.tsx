'use client';

import EventosPasados from '@/components/pages/inicio/EventosPasados';
import Hero from '@/components/pages/inicio/Hero';
import MantenteInformado from '@/components/pages/inicio/MantenteInformado';
import QuienesSomos from '@/components/pages/inicio/QuienesSomos';

export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <EventosPasados />
      <MantenteInformado />
    </>
  );
}
