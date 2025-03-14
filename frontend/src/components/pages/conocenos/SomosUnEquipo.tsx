'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { ConocenosSections } from '@/config/pages';
import { ImageCarousel, ImagesFields } from '@/types/images';
import { getThumbnailUrl } from '@/lib/utils';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

export default function SomosUnEquipo({ photos }: { photos: ImageCarousel[] }) {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const MARGIN_R = isMobile ? 30 : 40;
  const WIDTH_IMAGE = isMobile ? 280 : 400;
  const DURATION = isMobile ? 3.5 : 2.9;
  const TOTAL_IMAGES = photos.length / 2;

  return (
    <Section className="w-full max-w-none px-0 gap-6 z-30" id={ConocenosSections.SOMOS_UN_EQUIPO_ID}>
      <Title as="h2">
        Somos Un Equipo
      </Title>
      <div className="overflow-x-hidden w-full">
        <motion.div
          className="flex h-72 sm:h-[30rem] w-full justify-start items-center"
          animate={{
            x: (WIDTH_IMAGE + MARGIN_R) * TOTAL_IMAGES * -1,
          }}
          transition={{
            repeat: Infinity,
            duration: DURATION * TOTAL_IMAGES,
            ease: 'linear',
          }}
        >
          {
            photos.map((image) => (
              <motion.img
                key={image.uuid}
                src={getThumbnailUrl(image)}
                alt={image[ImagesFields.DESCRIPTION]}
                className="w-[280px] md:w-[400px] rounded-lg mr-[30px] sm:mr-[40px]"
                initial={{
                  scale: 1,
                  rotate: image.rotate,
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
