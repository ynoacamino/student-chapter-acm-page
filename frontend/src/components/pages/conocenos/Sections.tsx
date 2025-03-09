'use client';

import { ConocenosSections } from '@/config/pages';
import SectionAnimationScroll from './SectionAnimationScroll';

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

export default function Sections() {
  return (
    <>
      {
        DATA_SECTIONS.map((section) => (
          <SectionAnimationScroll
            key={section.title}
            id={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
          />
        ))
      }
    </>
  );
}
