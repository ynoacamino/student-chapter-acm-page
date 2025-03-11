'use client';

import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel } from '@/components/ui/autoCarousel';
import { useUpcomingEventsByCommittee } from '@/hooks/swr';
import { ComitesSections } from '@/config/pages';
import ProximosEventosItemSkeleton from './ProximosEventosItemSkeleton';
import ProximosEventosItem from './ProximosEventosItem';
import SinEventos from './SinEventos';

const ProximosEventosSkeleton = Array
  .from({ length: 10 })
  .map(() => <ProximosEventosItemSkeleton key={crypto.randomUUID()} />);

export default function ProximosEventos({ committeeId }: { committeeId: string }) {
  const { isLoading, upcomingEventsByCommittee } = useUpcomingEventsByCommittee({
    committeeId,
  });

  return (
    <Section id={ComitesSections.EVENTOS_FUTUROS_ID}>
      <Title as="h2">
        Proximos Eventos
      </Title>
      <div className="mx-auto container px-3 mt-10">
        {
          isLoading || (upcomingEventsByCommittee && upcomingEventsByCommittee.length > 0)
            ? (
              <AutoCarousel>
                {
                  isLoading
                    ? ProximosEventosSkeleton
                    : upcomingEventsByCommittee?.map((event) => (
                      <ProximosEventosItem key={event.id} {...event} />
                    ))
                }
              </AutoCarousel>
            )
            : <SinEventos type="proximo" />
        }

      </div>
    </Section>
  );
}
