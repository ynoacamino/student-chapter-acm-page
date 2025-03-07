import { getThumbnailUrl, slugify } from '@/lib/utils';
import { Committee } from '@/types/committees';
import Link from 'next/link';

export default function ComiteCard(committee: Committee) {
  const { name, excerpt } = committee;
  return (
    <Link
      href={`/comites/${slugify(name)}`}
      className="flex flex-col gap-6 border-muted border-2 rounded-xl p-6 hover:scale-105 transition-transform"
    >
      <img src={getThumbnailUrl(committee)} alt={name} className="w-full" />
      <h2 className="text-xl font-semibold">
        {name}
      </h2>
      <p className="">
        {excerpt}
      </p>
    </Link>
  );
}
