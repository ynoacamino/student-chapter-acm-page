import EventosPasados from '@/components/pages/inicio/EventosPasados';
import Hero from '@/components/pages/inicio/Hero';
import MantenteInformado from '@/components/pages/inicio/MantenteInformado';
import NuestrosComites from '@/components/pages/inicio/nuestroscomites/NuestrosComites';
import QuienesSomos from '@/components/pages/inicio/QuienesSomos';

export default async function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <NuestrosComites />
      <EventosPasados />
      <MantenteInformado />
    </>
  );
}
