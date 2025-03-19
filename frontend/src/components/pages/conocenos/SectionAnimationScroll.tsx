'use client';

import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';

export default function SectionAnimationScroll(
  {
    title, content, image, id,
  }: { title: string, content: string, image: string, id: string },
) {
  return (
    <Section
      id={id}
      className={cn('flex items-center justify-center')}
    >
      <div
        className={cn('w-full grid md:grid-cols-2 max-w-7xl px-6 gap-y-8')}
      >
        <img
          src={image}
          alt={title}
          className={cn('w-full max-w-xs md:max-w-lg justify-self-center aspect-ratio-4-3 bg-primary/30 rounded-xl')}
        />
        <div
          className="flex flex-col justify-center items-center w-full md:max-w-xl gap-6"
        >
          <h2 className="text-2xl font-semibold mb-2 text-center">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} className="gap-6 flex flex-col text-center md:text-lg" />
        </div>
      </div>
    </Section>
  );
}
