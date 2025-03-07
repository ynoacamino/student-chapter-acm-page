'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';
import { ConocenosSections } from '@/config/pages';

let PHOTOS = Array
  .from({ length: 5 })
  .map((_, i) => ({
    id: i * 13,
    img: '/comites/mock.png',
  }));

PHOTOS = PHOTOS
  .concat(PHOTOS)
  .map((p, i) => ({ ...p, id: i >= PHOTOS.length ? i * 13 : p.id }));

export default function SomosUnEquipo() {
  const [containerRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    if (onHover) {
      return () => {};
    }
    let controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });
    // Se 'corta' la animación, entonces inicia la animación que permite
    // terminarla
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: 20 * (1 - xTranslation.get() / finalPosition),
        onComplete() {
          setMustFinish(false);
          setRerender((val) => !val);
        },
      });
    }
    return controls.stop;
  }, [xTranslation, width, mustFinish, rerender, onHover]);

  return (
    <Section className="w-full max-w-none px-0 gap-10" suppressHydrationWarning id={ConocenosSections.SOMOS_UN_EQUIPO_ID}>
      <Title as="h2">
        Somos Un Equipo
      </Title>
      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={containerRef}
          className="flex h-72 md:h-[30rem] justify-start items-center gap-4 w-max"
          style={{ x: xTranslation }}
        >
          {
            [...PHOTOS, ...PHOTOS].map(({ id, img }, index) => (
              <motion.img
                key={index < PHOTOS.length ? id : id + PHOTOS.length}
                src={img}
                alt="mock"
                className="rounded-xl max-h-24 md:max-h-36"
                whileHover={{
                  scale: 1.1,
                }}
                onHoverStart={() => {
                  setMustFinish(true);
                  setOnHover(true);
                }}
                onHoverEnd={() => {
                  setMustFinish(true);
                  setOnHover(false);
                }}
              />
            ))
          }
        </motion.div>

      </div>
    </Section>
  );
}
