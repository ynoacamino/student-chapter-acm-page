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
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

function LinkMobile(
  props: React.ComponentProps<'a'> & { children: ReactNode; setSheetOpen: (value: boolean) => void },
) {
  const { push } = useRouter();
  const {
    href, setSheetOpen, children, ...rest
  } = props;

  return (
    <a
      {...rest}
      href={href?.toString()}
      onClick={(e) => {
        e.preventDefault();
        setSheetOpen(false);
        push(href?.toString() || '');
      }}
    >
      {children}
    </a>
  );
}

export default function HeaderMobile({ path }: { path: string }) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
                <LinkMobile
                  href={pagina.path}
                  className={cn('px-2 py-2 text-primary font-semibold mb-4 hover:underline', {
                    'bg-primary text-background rounded-sm': (path.includes(pagina.path) && pagina.path !== '/') || path === pagina.path,
                  })}
                  aria-current={path === pagina.path ? 'page' : undefined}
                  setSheetOpen={setSheetOpen}
                >
                  {pagina.name}
                </LinkMobile>
                <div className="flex flex-col pl-7 py-2">
                  {
                pagina.sections && pagina.sections.map((section) => (
                  <LinkMobile
                    key={section.id}
                    href={`${pagina.path}#${section.id}`}
                    className="px-1 py-1"
                    setSheetOpen={setSheetOpen}
                  >
                    {section.name}
                  </LinkMobile>
                ))
                }
                  {
                pagina.pages && pagina.pages.map((subPage) => (
                  <LinkMobile
                    key={subPage.path}
                    href={subPage.path}
                    className="px-1 py-1"
                    setSheetOpen={setSheetOpen}
                  >
                    {subPage.name}
                  </LinkMobile>
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
