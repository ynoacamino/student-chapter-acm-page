'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { ConocenosSections } from '@/config/pages';
import { motion } from 'motion/react';

let PHOTOS = Array
  .from({ length: 5 })
  .map((_, i) => ({
    id: i * 13,
    img: '/comites/mock.png',
    rotate: Math.random() * 10 - 5,
  }));

PHOTOS = PHOTOS
  .concat(PHOTOS)
  .map((p, i) => ({ ...p, id: i >= PHOTOS.length ? i * 13 : p.id }));

export default function SomosUnEquipo() {
  return (
    <Section className="w-full max-w-none px-0 gap-10" suppressHydrationWarning id={ConocenosSections.SOMOS_UN_EQUIPO_ID}>
      <Title as="h2">
        Somos Un Equipo
      </Title>
      <div className="overflow-x-hidden w-full">
        <motion.div
          className="flex h-80 md:h-[30rem] justify-start items-center"
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: 'linear',
          }}
        >
          {
            PHOTOS
              .map(({ id, rotate, img }) => (
                <motion.img
                  key={id}
                  src={img}
                  alt="mock"
                  className="w-full max-w-2xs md:max-w-sm mr-16 rounded-xl"
                  initial={{
                    rotate,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                  }}
                />
              ))
        }
        </motion.div>
      </div>
    </Section>
  );
}
