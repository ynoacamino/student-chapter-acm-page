import Hero from '@/components/pages/comites/[comite]/Hero';
import Sections from '@/components/pages/comites/[comite]/Sections';
import { COMITES_DICT, COMITES_ROUTES } from '@/lib/mock';
import { ComiteRoute } from '@/types/comite';
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
    </>
  );
}
