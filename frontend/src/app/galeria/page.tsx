import Galeria from '@/components/pages/galeria/Galeria';
import Title from '@/components/pages/galeria/Title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería | ACM UNSA',
  description: 'Conoce la galería de ACM UNSA.',
};

export default function Page() {
  return (
    <>
      <Title />
      <Galeria />
    </>
  );
}
