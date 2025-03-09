import { Skeleton } from '@/components/ui/skeleton';

const defaultBox = Array.from({ length: 6 });

export default function PhotosSkeleton() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-0 sm:gap-x-6 mb-40 gap-y-6">
      <div className="flex flex-col gap-6">
        {
        defaultBox.map(() => (
          <Skeleton
            key={crypto.randomUUID()}
            className="w-full aspect-square"
          />
        ))
      }
      </div>
      <div className="flex flex-col gap-6">
        {
        defaultBox.map(() => (
          <Skeleton
            key={crypto.randomUUID()}
            className="w-full aspect-square"
          />
        ))
      }
      </div>
      <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-1">
        {
        defaultBox.map(() => (
          <Skeleton
            key={crypto.randomUUID()}
            className="w-full aspect-square"
          />
        ))
      }
      </div>
    </div>
  );
}
