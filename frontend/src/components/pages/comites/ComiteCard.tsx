'use client';

import { getThumbnailUrl, slugify } from '@/lib/utils';
import { Committee } from '@/types/committees';
import Link from 'next/link';

export default function ComiteCard(committee: Committee) {
  const { name, excerpt } = committee;
  return (
    <div className="group p-0.5 rounded-xl relative overflow-hidden h-full text-[17px]">
      <div className="absolute top-0 left-0 size-full scale-0 bg-primary/50 group-hover:scale-140 transition-transform duration-[350ms] origin-top-left rounded-br-full ease-in-out" />
      <div className="absolute top-0 left-0 size-full bg-muted -z-10" />
      <Link
        href={`/comites/${slugify(name)}`}
        className="flex flex-col gap-6 rounded-xl transition-colors bg-background overflow-hidden relative h-full min-h-96 z-10 p-6"
      >
        <img src={getThumbnailUrl(committee)} alt={name} className="rounded-md object-cover" />
        <div className="flex flex-col gap-3  z-10">
          <h2 className="text-xl font-semibold">
            {name}
          </h2>
          <p className="grow">
            {excerpt.length > 165 ? `${excerpt.slice(0, 135)}...` : excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
