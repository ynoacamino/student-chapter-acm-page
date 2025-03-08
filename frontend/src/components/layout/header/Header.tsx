'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  const path = usePathname();

  return (
    <div className="w-full bg-background/70 backdrop-blur-xl sticky top-0 z-50">
      <header className="w-full flex justify-between items-start max-w-7xl z-50 md:px-10 px-4 py-2 md:py-0">
        <Link
          href="https://acm.org"
          className="text-3xl font-extrabold md:my-2 text-primary-foreground bg-primary px-2 rounded-sm py-1"
        >
          ACM
        </Link>
        <HeaderDesktop path={path} />
        <HeaderMobile path={path} />
      </header>
    </div>
  );
}
