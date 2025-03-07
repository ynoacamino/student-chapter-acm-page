'use client';

import { usePathname } from 'next/navigation';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  const path = usePathname();

  return (
    <header className="w-full flex justify-between items-start max-w-7xl sticky top-0 bg-background z-50 backdrop-blur-lg md:px-10 px-4 py-2 md:py-0">
      <span className="text-3xl font-extrabold md:my-2 text-primary-foreground bg-primary px-2 rounded-sm py-1">
        ACM
      </span>
      <HeaderDesktop path={path} />
      <HeaderMobile path={path} />
    </header>
  );
}
