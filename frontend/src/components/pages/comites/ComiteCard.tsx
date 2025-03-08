'use client';

import { getThumbnailUrl, slugify } from '@/lib/utils';
import { Committee } from '@/types/committees';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ComiteCard(committee: Committee) {
  const { name, excerpt } = committee;
  return (
    <div className="group p-0.5 rounded-xl relative overflow-hidden h-full">
      <div className="absolute top-0 left-0 size-full scale-0 bg-primary/50 group-hover:scale-140 transition-transform duration-600 origin-top-left rounded-br-full" />
      <div className="absolute top-0 left-0 size-full bg-muted -z-10" />
      <Link
        href={`/comites/${slugify(name)}`}
        className="flex flex-col gap-6 rounded-xl transition-colors bg-background overflow-hidden relative h-full min-h-96 z-10"
      >
        <ExternalLink className="absolute right-4 top-4 scale-125 -translate-y-[150%] translate-x-[150%] group-hover:translate-0 group-hover:scale-100 transition-transform duration-400" />
        <div className="h-60 overflow-hidden group-hover:scale-[270%] group-hover:opacity-40 transition-all duration-400 ease-in-out relative">
          <img src={getThumbnailUrl(committee)} alt={name} className="rounded-t-md object-cover" />
        </div>
        <div className="flex flex-col gap-3 px-6 pb-6  z-10">
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
