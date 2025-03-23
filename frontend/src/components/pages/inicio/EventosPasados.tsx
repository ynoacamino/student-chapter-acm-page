'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel, AutoCarouselItem } from '@/components/ui/autoCarousel';
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
        {/* eslint-disable no-nested-ternary */}
        {
          isLoading || !pastEvents
            ? (
              <AutoCarousel>
                {EventosPasadosSkeleton}
              </AutoCarousel>
            ) : pastEvents.length === 0 ? (
              <SinEventos type="pasado" />
            ) : (
              <AutoCarousel>
                {
                  pastEvents?.map((event) => (
                    <AutoCarouselItem key={event.id}>
                      <EventosPasadosItem {...event} />
                    </AutoCarouselItem>
                  ))
                }
              </AutoCarousel>
            )
        }
      </div>
    </Section>
  );
}
