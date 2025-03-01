'use client';

import { usePathname } from 'next/navigation';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  const path = usePathname();

  return (
    <header className="w-full flex justify-end md:justify-center items-center">
      <HeaderDesktop path={path} />
      <HeaderMobile path={path} />
    </header>
  );
}
