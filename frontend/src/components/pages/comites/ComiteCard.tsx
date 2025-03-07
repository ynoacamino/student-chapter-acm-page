import { getThumbnailUrl, slugify } from '@/lib/utils';
import { Committee } from '@/types/committees';
import Link from 'next/link';

export default function ComiteCard(committee: Committee) {
  const { name, excerpt } = committee;
  return (
    <div className="group p-[1px] transition-colors rounded-xl bg-transparent hover:bg-primary/30 animate-in">
      <Link
        href={`/comites/${slugify(name)}`}
        className="flex flex-col gap-6 border-muted border-2 rounded-xl p-6 group-hover:border-primary/30 transition-colors bg-background"
      >
        <img src={getThumbnailUrl(committee)} alt={name} className="w-full rounded-md" />
        <div className="flex flex-col gap-3 h-40 overflow-y-hidden">
          <h2 className="text-xl font-semibold">
            {name}
          </h2>
          <p className="">
            {excerpt.length > 165 ? `${excerpt.slice(0, 135)}...` : excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
