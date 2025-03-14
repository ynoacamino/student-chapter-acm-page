'use client';

import { ConocenosSections } from '@/config/pages';
import SectionAnimationScroll from './SectionAnimationScroll';

const DATA_SECTIONS = [
  {
    title: 'Quienes Somos',
    content: `<p>
      Somos el Capítulo Estudiantil ACM de la Universidad Nacional de San
      Agustín, conformado por estudiantes apasionados por la informática y la tecnología.
    </p>
    <p>
      Nuestro objetivo es fomentar el aprendizaje, innovación y la conexión
      entre los estudiantes con los profesionales del sector tecnológico.
    </p>
    <p>
      Buscamos crear un espacio donde los estudiantes puedan mejorar sus
      habilidades, conectarse con profesionales de la industria y mantenerse
      al día con las últimas tendencias en tecnología.
    </p>`,
    image: '/comites/mock.png',
    id: ConocenosSections.QUIENES_SOMOS_ID,
  },
  {
    title: 'Mision',
    content: `<p>
    Fomentar el interés y la participación de los estudiantes de nuestro capítulo en los ámbitos de informática y tecnología.
    </p>
    <p>
    Ofrecemos oportunidades de aprendizaje y desarrollo profesional a través de diversas actividades y eventos innovadores y colaborativos.
    </p>`,
    image: '/comites/mock.png',
    id: ConocenosSections.MISION_ID,
  },
  {
    title: 'Vision',
    content: `<p>
    Ser el referente en la promoción de la pasión por la tecnología y la informática entre los estudiantes.
    </p>
    <p>
    Brindamos un espacio de aprendizaje que impulse el crecimiento profesional, aspirando a convertirnos en un referente a nivel nacional y, si es posible, a nivel internacional.
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
