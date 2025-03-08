'use client';

import dynamic from 'next/dynamic';

const SomosUnEquipo = dynamic(() => import('@/components/pages/conocenos/SomosUnEquipo'), { ssr: false });

export default function SomosUnEquipoClient() {
  return (
    <SomosUnEquipo />
  );
}
