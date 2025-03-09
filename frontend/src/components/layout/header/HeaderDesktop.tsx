import Link from 'next/link';
import pagesConfig from '@/config/pages';
import { cn } from '@/lib/utils';

export default function HeaderDesktop({
  path,
}: {
  path: string;
}) {
  return (
    <nav className="hidden md:flex justify-center items-start gap-3">
      {pagesConfig.pages.map((pagina) => (
        <Link
          key={pagina.path}
          href={pagina.path}
          className={cn('py-[10px] group hover:bg-muted/70 rounded-b-sm px-5 flex items-center gap-3', {
            'bg-primary text-background hover:bg-primary ': (path.includes(pagina.path) && pagina.path !== '/') || path === pagina.path,
          })}
          aria-current={path === pagina.path ? 'page' : undefined}
        >
          {pagina.name}
        </Link>
      ))}
    </nav>
  );
}
