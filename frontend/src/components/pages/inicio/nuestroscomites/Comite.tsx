import { cn } from '@/lib/utils';

interface ComiteProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Comite({
  title, className, children,
}: ComiteProps) {
  return (
    <article className={cn('flex flex-col gap-5 border rounded-md border-primary p-5', className)}>
      <h3 className="text-3xl font-semibold">
        {title}
      </h3>
      {children}
    </article>
  );
}
