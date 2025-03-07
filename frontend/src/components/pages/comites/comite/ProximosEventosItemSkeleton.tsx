import { AutoCarouselItem } from '@/components/ui/autoCarousel';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProximosEventosItemSkeleton() {
  return (
    <AutoCarouselItem>
      <div className="flex flex-col items-start px-4 py-3 gap-y-2 border border-primary rounded-md justify-center mx-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-48 h-8" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>
      </div>
    </AutoCarouselItem>
  );
}
