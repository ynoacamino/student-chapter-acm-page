'use client';

import {
  motion,
} from 'motion/react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function SectionAnimationScroll(
  {
    title, content, image, initial, last, id,
  }: { title: string, content: string, image: string, initial: boolean, last: boolean, id: string },
) {
  const [isView, setIsView] = useState(false);

  return (
    <Section
      id={id}
      className={cn('h-[80vh] flex items-center justify-center my-28 z-10', {
        'mt-96 md:mt-[24rem]': initial,
        'mb-96 md:mb-[34rem]': last,
        'z-20': isView,
      })}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsView(true)}
        onViewportLeave={() => setIsView(false)}
      >
        <div
          className={cn('w-full grid md:grid-cols-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-7xl px-6 gap-y-8')}
        >
          <img
            src={image}
            alt="mock"
            className="w-full max-w-sm md:max-w-lg justify-self-center"
          />
          <div
            className="flex flex-col justify-center items-center w-full md:max-w-xl gap-6"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} className="gap-6 flex flex-col text-center" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
