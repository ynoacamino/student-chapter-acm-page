'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { pagesConfig } from '@/config/pages';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function HeaderMobile({ path }: { path: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="ghost" size="icon" className="size-10">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="py-8 flex md:hidden">
        <SheetHeader>
          <div className="flex flex-col gap-4">
            <SheetTitle className="flex flex-col text-3xl font-bold">
              <span>
                Capitulo
              </span>
              <span className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-3">
                <span>
                  Estudiantil
                </span>
                <span className="text-background bg-primary rounded-lg px-3 py-2">
                  ACM
                </span>
              </span>
            </SheetTitle>
            <h2 className="font-normal">
              Universidad Nacional de San Agustin de Arequipa
            </h2>
          </div>
        </SheetHeader>
        <nav className="flex flex-col justify-center gap-4 px-6 my-4">
          {pagesConfig.pages.map((pagina) => (
            <Link
              key={pagina.path}
              href={pagina.path}
              className={cn('px-4 py-2', {
                'bg-primary text-background rounded-sm': path === pagina.path,
              })}
              aria-current={path === pagina.path ? 'page' : undefined}
            >
              {pagina.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
