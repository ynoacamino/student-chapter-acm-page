import { notFound } from 'next/navigation';

export const dynamicParams = false;

const COMITES_DICT = {
  COMITE_1: 'comite_1',
  COMITE_2: 'comite_2',
  COMITE_3: 'comite_3',
  COMITE_4: 'comite_4',
  COMITE_5: 'comite_5',
  COMITE_6: 'comite_6',
} as const;

type Comite = typeof COMITES_DICT[keyof typeof COMITES_DICT];

export function generateStaticParams() {
  return Object.values(COMITES_DICT).map((value) => ({ comite: value }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ comite: Comite }>
}) {
  const { comite } = await params;
  if (!comite) {
    notFound();
  }
  return (
    <h1>
      xd
      {comite}
    </h1>
  );
}
