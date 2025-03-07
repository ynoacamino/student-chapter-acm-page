'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel } from '@/components/ui/autoCarousel';
import EventosPasadosItemSkeleton from '@/components/ui/EventosPasadosItemSkeleton';
import EventosPasadosItem from '@/components/ui/EventosPasadosItem';
import { usePastEventsByCommittee } from '@/hooks/swr';

const EventosPasadosSkeleton = Array
  .from({ length: 10 })
  .map(() => <EventosPasadosItemSkeleton key={crypto.randomUUID()} />);

export default function EventosPasados({ committeeId }: { committeeId: string }) {
  const { isLoading, pastEventsByCommittee } = usePastEventsByCommittee({ committeeId });

  return (
    <Section>
      <Title as="h2">
        Eventos Pasados
      </Title>
      <div className="mx-auto container px-3 mt-10">
        <AutoCarousel>
          {
            isLoading || !pastEventsByCommittee ? (
              EventosPasadosSkeleton
            ) : pastEventsByCommittee.map((event) => (
              <EventosPasadosItem {...event} key={event.id} />
            ))
          }
        </AutoCarousel>
      </div>
    </Section>
  );
}
