import Hero from '@/components/pages/comites/comite/Hero';
import Members from '@/components/pages/comites/comite/Members';
import Sections from '@/components/pages/comites/comite/Sections';
import EventosPasados from '@/components/pages/comites/comite/EventosPasados';
import ProximosEventos from '@/components/pages/comites/comite/ProximosEventos';
import { notFound } from 'next/navigation';

import api from '@/lib/api';
import { getThumbnailUrl, slugify } from '@/lib/utils';
import { CommitteesFields } from '@/types/committees';
import { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  const committees = await api.getCommittees();

  return committees.map(({ name }) => ({
    committeeSlug: slugify(name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ committeeSlug: string }>
}): Promise<Metadata> {
  const { committeeSlug } = await params;
  if (!committeeSlug) {
    notFound();
  }

  const committee = await api.getCommitteeBySlug({ slug: committeeSlug });

  return {
    title: `${committee[CommitteesFields.NAME].slice(10)} | ACM UNSA`,
    openGraph: {
      images: [
        {
          url: getThumbnailUrl(committee),
          alt: committee[CommitteesFields.NAME],
        },
      ],
    },
    description: committee[CommitteesFields.EXCERPT],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ committeeSlug: string }>
}) {
  const { committeeSlug } = await params;
  if (!committeeSlug) {
    notFound();
  }

  const committee = await api.getCommitteeBySlug({ slug: committeeSlug });

  const members = await api.getMemberByCommittee({ committeeId: committee.id });

  const sections = await api.getSectionsByCommittee({ committeeId: committee.id });

  return (
    <>
      <Hero name={committee[CommitteesFields.NAME]} image={getThumbnailUrl(committee)} />
      <Sections content={sections} />
      <Members content={members} />
      <ProximosEventos committeeId={committee.id} />
      <EventosPasados committeeId={committee.id} />
    </>
  );
}
