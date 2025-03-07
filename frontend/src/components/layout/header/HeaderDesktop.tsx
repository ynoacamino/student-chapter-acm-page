import Link from 'next/link';
import pagesConfig from '@/config/pages';
import { cn } from '@/lib/utils';

export default function HeaderDesktop({
  path,
}: {
  path: string;
}) {
  return (
    <nav className="hidden md:flex">
      <ul className="flex justify-center items-start gap-3">
        {pagesConfig.pages.map((pagina) => (
          <li
            key={pagina.path}
            className={cn('pt-3 pb-3 hover:bg-muted rounded-b-sm', {
              'bg-primary text-background hover:bg-primary hover:contrast-125 hover:saturate-150': (path.includes(pagina.path) && pagina.path !== '/') || path === pagina.path,
            })}
          >
            <Link
              href={pagina.path}
              className="px-6 py-3"
              aria-current={path === pagina.path ? 'page' : undefined}
            >
              {pagina.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
