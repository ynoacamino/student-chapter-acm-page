'use client';

import Title from '@/components/pages/conocenos/Title';
import Vision from '@/components/pages/conocenos/SectionAnimationScroll';
import dynamic from 'next/dynamic';
import JuntosParaLograrlo from '@/components/pages/conocenos/JuntosParaLograrlo';

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
  },
];

export default function Page() {
  return (
    <>
      <Title />
      {
        DATA_SECTIONS.map((section, index) => (
          <Vision
            key={section.title}
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
