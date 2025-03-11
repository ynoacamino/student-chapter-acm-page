'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel } from '@/components/ui/autoCarousel';
import { usePastEvents } from '@/hooks/swr';
import EventosPasadosItemSkeleton from '@/components/ui/EventosPasadosItemSkeleton';
import EventosPasadosItem from '@/components/ui/EventosPasadosItem';
import { InicioSections } from '@/config/pages';
import SinEventos from '../comites/comite/SinEventos';

const EventosPasadosSkeleton = Array
  .from({ length: 10 })
  .map(() => <EventosPasadosItemSkeleton key={crypto.randomUUID()} />);

export default function EventosPasados() {
  const { isLoading, pastEvents } = usePastEvents();
  return (
    <Section id={InicioSections.EVENTOS_PASADOS_ID}>
      <Title as="h2">
        Eventos Pasados
      </Title>
      <div className="mx-auto container px-3 mt-10">
        {
          isLoading || (pastEvents && pastEvents.length > 0)
            ? (
              <AutoCarousel>
                {
                  isLoading
                    ? EventosPasadosSkeleton
                    : pastEvents?.map((event) => (
                      <EventosPasadosItem {...event} key={event.id} />
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
