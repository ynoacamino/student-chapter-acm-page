import { getThumbnailUrl } from '@/lib/utils';
import { Event } from '@/types/events';

export default function EventosPasadosItem(event: Event) {
  const { name, excerpt } = event;

  console.log(event);

  return (
    <div className="flex flex-col items-center px-4 py-5 gap-y-6 sm:p-6 h-full justify-between">
      <div className="flex flex-col gap-2 overflow-y-hidden">
        <p className="text-2xl font-semibold text-gray-900 text-center">
          {name}
        </p>
        <p className="md:text-base text-gray-600 px-2 text-center">{excerpt}</p>
      </div>
      <div className="flex items-center justify-end">
        <img
          className="rounded-xl bg-muted size-72 aspect-square object-cover"
          src={getThumbnailUrl(event)}
          alt={name}
        />
      </div>
    </div>
  );
}
