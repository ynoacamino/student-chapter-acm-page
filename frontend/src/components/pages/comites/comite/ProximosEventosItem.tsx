import { AutoCarouselItem } from '@/components/ui/autoCarousel';
import { Event } from '@/types/events';

export default function ProximosEventosItem(event: Event) {
  const { date, title, excerpt } = event;
  return (
    <AutoCarouselItem>
      <div className="flex flex-col items-start px-4 py-3 gap-y-2 border border-primary rounded-md justify-center mx-2">
        <span>
          {date}
        </span>
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>
        <p>
          {excerpt}
        </p>
      </div>
    </AutoCarouselItem>
  );
}
