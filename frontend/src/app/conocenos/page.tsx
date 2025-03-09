import Title from '@/components/pages/conocenos/Title';
import JuntosParaLograrlo from '@/components/pages/conocenos/JuntosParaLograrlo';
import Sections from '@/components/pages/conocenos/Sections';
import SomosUnEquipoClient from '@/components/pages/conocenos/SomosUnEquipoClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conócenos | ACM UNSA',
  description: 'Conoce a ACM UNSA.',
};

export default function Page() {
  return (
    <>
      <Title />
      <Sections />
      <SomosUnEquipoClient />
      <JuntosParaLograrlo />
    </>
  );
}
