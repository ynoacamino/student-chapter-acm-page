'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import pagesConfig from '@/config/pages';
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
      <SheetContent className="py-2 flex md:hidden">
        <ScrollArea className="h-[95vh]">
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
          <nav className="flex flex-col justify-center gap-6 px-4 font-medium text-primary/80">
            {pagesConfig.pages.map((pagina) => (
              <div key={pagina.path}>
                <Link
                  href={pagina.path}
                  className={cn('px-2 py-2 text-primary font-semibold mb-4 hover:underline', {
                    'bg-primary text-background rounded-sm': path === pagina.path,
                  })}
                  aria-current={path === pagina.path ? 'page' : undefined}
                >
                  {pagina.name}
                </Link>
                <div className="flex flex-col pl-7 py-2">
                  {
                pagina.sections && pagina.sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`${pagina.path}#${section}`}
                    className="px-1 py-1"
                  >
                    {section.name}
                  </Link>
                ))
                }
                  {
                pagina.pages && pagina.pages.map((subPage) => (
                  <Link
                    key={subPage.path}
                    href={subPage.path}
                    className="px-1 py-1"
                  >
                    {subPage.name}
                  </Link>
                ))
                }
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
