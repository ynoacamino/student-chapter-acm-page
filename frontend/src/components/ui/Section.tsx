import { cn } from '@/lib/utils';

export default function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={cn('w-full max-w-7xl', className)} {...props} />
  );
}
