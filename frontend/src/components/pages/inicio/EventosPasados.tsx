'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel } from '@/components/ui/autoCarousel';
import { usePastEvents } from '@/hooks/swr';
import EventosPasadosItemSkeleton from '@/components/ui/EventosPasadosItemSkeleton';
import EventosPasadosItem from '@/components/ui/EventosPasadosItem';

const EventosPasadosSkeleton = Array
  .from({ length: 10 })
  .map(() => <EventosPasadosItemSkeleton key={crypto.randomUUID()} />);

export default function EventosPasados() {
  const { isLoading, pastEvents } = usePastEvents();

  return (
    <Section>
      <Title as="h2">
        Eventos Pasados
      </Title>
      <div className="mx-auto container px-3 mt-10">
        <AutoCarousel>
          {
            isLoading || !pastEvents ? (
              EventosPasadosSkeleton
            ) : pastEvents.map((event) => (
              <EventosPasadosItem {...event} key={event.id} />
            ))
          }
        </AutoCarousel>
      </div>
    </Section>
  );
}
