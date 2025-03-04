import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ComiteProps {
  title: string;
  className?: string;
  path: string;
  children?: React.ReactNode;
}

export default function Comite({
  title, path, className, children,
}: ComiteProps) {
  return (
    <Link
      href={`/comites/${path}`}
      className={cn('flex flex-col gap-5 border rounded-md border-primary p-5 min-h-72 transition-transform hover:scale-105 ', className)}
    >
      <h3 className="text-3xl font-semibold">
        {title}
      </h3>
      {children}
    </Link>
  );
}
