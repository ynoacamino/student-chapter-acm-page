'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  const path = usePathname();

  return (
    <div className="w-full bg-background/80 backdrop-blur-xl sticky top-0 z-50 flex justify-center">
      <header className="w-full flex justify-between items-start max-w-7xl z-50 md:px-6 px-4 py-2 md:py-0">
        <Link
          href="/"
          className="text-3xl font-extrabold md:my-[6px] text-primary-foreground bg-primary px-2 rounded-sm py-1"
        >
          ACM
        </Link>
        <HeaderDesktop path={path} />
        <HeaderMobile path={path} />
      </header>
    </div>
  );
}
