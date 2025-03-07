'use client';

import Title from '@/components/pages/conocenos/Title';
import SectionAnimationScroll from '@/components/pages/conocenos/SectionAnimationScroll';
import dynamic from 'next/dynamic';
import JuntosParaLograrlo from '@/components/pages/conocenos/JuntosParaLograrlo';
import { ConocenosSections } from '@/config/pages';

const SomosUnEquipo = dynamic(() => import('@/components/pages/conocenos/SomosUnEquipo'), { ssr: false });

const DATA_SECTIONS = [
  {
    title: 'Quienes Somos',
    content: `<p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>
    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>`,
    image: '/comites/mock.png',
    id: ConocenosSections.QUIENES_SOMOS_ID,
  },
  {
    title: 'Mision',
    content: `<p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>
    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>`,
    image: '/comites/mock.png',
    id: ConocenosSections.MISION_ID,
  },
  {
    title: 'Vision',
    content: `<p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>
    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum
    </p>`,
    image: '/comites/mock.png',
    id: ConocenosSections.VISION_ID,
  },
];

export default function Page() {
  return (
    <>
      <Title />
      {
        DATA_SECTIONS.map((section, index) => (
          <SectionAnimationScroll
            key={section.title}
            id={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
            initial={index === 0}
            last={index === DATA_SECTIONS.length - 1}
          />
        ))
      }
      <SomosUnEquipo />
      <JuntosParaLograrlo />
    </>
  );
}
