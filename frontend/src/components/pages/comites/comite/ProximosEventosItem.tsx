import { capitalize } from '@/lib/utils';
import { Event } from '@/types/events';

import { format } from '@formkit/tempo';

export default function ProximosEventosItem(event: Event) {
  const { date, name, excerpt } = event;
  return (
    <div className="flex flex-col items-start px-4 py-2 gap-y-2 border border-primary rounded-md justify-start mx-2 overflow-y-hidden h-52">
      <span className="font-semibold text-primary/60 mb-2">
        {
            capitalize(
              format(date, 'MMMM', 'es'),
            )
          }
      </span>
      <h3 className="text-xl font-semibold">
        {name}
      </h3>
      <p>
        {excerpt.length >= 74 ? `${excerpt.slice(0, 72)}...` : excerpt}
      </p>
    </div>
  );
}
