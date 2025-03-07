import EventosPasados from '@/components/pages/inicio/EventosPasados';
import Hero from '@/components/pages/inicio/Hero';
import MantenteInformado from '@/components/pages/inicio/MantenteInformado';
import NuestrosComites from '@/components/pages/inicio/nuestroscomites/NuestrosComites';
import QuienesSomos from '@/components/pages/inicio/QuienesSomos';
import api from '@/lib/api';

export default async function Home() {
  const comittees = await api.getCommittees();
  return (
    <>
      <Hero />
      <QuienesSomos />
      <NuestrosComites comittees={comittees} />
      <EventosPasados />
      <MantenteInformado />
    </>
  );
}
