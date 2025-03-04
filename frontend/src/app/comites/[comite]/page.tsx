import Hero from '@/components/pages/comites/[comite]/Hero';
import Members from '@/components/pages/comites/[comite]/Members';
import Sections from '@/components/pages/comites/[comite]/Sections';
import { COMITES_ROUTES } from '@/lib/comites_routes';
import { COMITES_DICT } from '@/lib/mock';
import { ComiteRoute } from '@/types/comite';
import EventosPasados from '@/components/pages/comites/comite/EventosPasados';
import ProximosEventos from '@/components/pages/comites/comite/ProximosEventos';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return COMITES_ROUTES.map((route) => ({ comite: route }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ comite: ComiteRoute }>
}) {
  const { comite: comiteRoute } = await params;
  if (!comiteRoute) {
    notFound();
  }
  const comite = Object.values(COMITES_DICT).find(
    (tComite) => tComite.route === comiteRoute,
  ) || COMITES_DICT.COMITE_1;
  return (
    <>
      <Hero title={comite.title} img={comite.img} />
      <Sections content={comite.sections} />
      <Members content={comite.members} />
      <ProximosEventos />
      <EventosPasados />
    </>
  );
}
