'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ComiteProps {
  name: string;
  className?: string;
  path: string;
  children?: React.ReactNode;
}

export default function Comite({
  name, path, className, children,
}: ComiteProps) {
  return (
    <Link
      href={`/comites/${path}`}
      className={cn('flex flex-col gap-5 border rounded-md border-primary p-5 min-h-52 transition-all overflow-hidden hover:scale-[102%] relative before:z-10 before:absolute before:top-0 before:left-0 before:size-full before:bg-radial before:from-transparent before:via-primary/20 before:to-transparent before:opacity-0 before:transition-transform before:duration-500 hover:shadow-md hover:shadow-primary hover:before:opacity-100 hover:before:scale-[300%]', className)}
    >
      <h3 className="text-3xl font-semibold">
        {name}
      </h3>
      {children}
    </Link>
  );
}
