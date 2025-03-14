'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel, AutoCarouselItem } from '@/components/ui/autoCarousel';
import EventosPasadosItemSkeleton from '@/components/ui/EventosPasadosItemSkeleton';
import EventosPasadosItem from '@/components/ui/EventosPasadosItem';
import { usePastEventsByCommittee } from '@/hooks/swr';
import { ComitesSections } from '@/config/pages';
import SinEventos from './SinEventos';

const EventosPasadosSkeleton = Array
  .from({ length: 10 })
  .map(() => <EventosPasadosItemSkeleton key={crypto.randomUUID()} />);

export default function EventosPasados({ committeeId }: { committeeId: string }) {
  const { isLoading, pastEventsByCommittee } = usePastEventsByCommittee({ committeeId });

  return (
    <Section id={ComitesSections.EVENTOS_PASADOS_ID}>
      <Title as="h2">
        Eventos Pasados
      </Title>
      <div className="mx-auto container px-3 mt-10">
        {
          isLoading || (pastEventsByCommittee && pastEventsByCommittee.length > 0)
            ? (
              <AutoCarousel>
                {
                  isLoading
                    ? EventosPasadosSkeleton
                    : pastEventsByCommittee?.map((event) => (
                      <AutoCarouselItem key={event.id}>
                        <EventosPasadosItem {...event} />
                      </AutoCarouselItem>
                    ))
                }
              </AutoCarousel>
            )
            : <SinEventos type="pasado" />
        }
      </div>
    </Section>
  );
}
