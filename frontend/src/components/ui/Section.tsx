import { cn } from '@/lib/utils';

export default function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={cn('w-full max-w-7xl px-6 flex flex-col items-center justify-start mb-32 mt-32', className)} {...props} />
  );
}
