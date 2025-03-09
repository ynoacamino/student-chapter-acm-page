import ShowComites from '@/components/pages/comites/ShowComites';
import Title from '@/components/pages/comites/Title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comités | ACM UNSA',
  description: 'Conoce a los comités de ACM UNSA.',
};

export default function Page() {
  return (
    <>
      <Title />
      <ShowComites />
    </>
  );
}
