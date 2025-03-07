import { AutoCarouselItem } from '@/components/ui/autoCarousel';
import { Skeleton } from '@/components/ui/skeleton';

export default function EventosPasadosItemSkeleton() {
  return (
    <AutoCarouselItem>
      <div className="flex flex-col items-center px-4 py-5 sm:p-6 gap-y-10">
        <div className="flex flex-col gap-2 items-center">
          <Skeleton className="w-32 h-10" />
          <Skeleton className="w-52 h-8" />
        </div>
        <div className="flex items-center justify-center h-64 my-auto">
          <Skeleton
            className="rounded-xl size-72"
          />
        </div>
      </div>
    </AutoCarouselItem>
  );
}
