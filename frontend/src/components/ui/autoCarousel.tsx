'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export function AutoCarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <CarouselItem
      className="basis-full md:basis-1/2 lg:basis-1/3"
    >
      {children}
    </CarouselItem>
  );
}

export function AutoCarousel({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {children}
      </CarouselContent>
    </Carousel>
  );
}
