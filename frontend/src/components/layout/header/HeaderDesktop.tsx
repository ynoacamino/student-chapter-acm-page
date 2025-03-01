import Link from 'next/link';
import { pagesConfig } from '@/config/pages';
import { cn } from '@/lib/utils';

export default function HeaderDesktop({
  path,
}: {
  path: string;
}) {
  return (
    <nav className="hidden md:flex">
      <ul className="flex justify-center gap-4 ">
        {pagesConfig.pages.map((pagina) => (
          <li
            key={pagina.url}
            className={cn('pt-4 pb-3', {
              'bg-primary text-background rounded-b-sm': path === pagina.path,
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
