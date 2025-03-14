'use client';

import { useState } from 'react';
import { capitalize, slugify } from '@/lib/utils';
import { Event, EventsFields } from '@/types/events';
import Link from 'next/link';
import { format } from '@formkit/tempo';

function ProximosEventosItem(event: Event) {
  const {
    name, excerpt, expand,
  } = event;

  const { name: commiteeName } = expand[EventsFields.COMMITTEE];

  return (
    <Link
      href={`/comites/${slugify(commiteeName)}`}
      className="group flex flex-col items-start px-4 pt-5 pb-10 sm:pb-5 gap-y-2 border border-primary rounded-md justify-start overflow-y-hidden sm:h-56 xl:h-52 text-[17px]"
    >
      <span
        className="font-semibold text-primary/60 mb-3 group-hover:underline"
      >
        {commiteeName}
      </span>
      <h4 className="text-xl font-semibold">
        {name}
      </h4>
      <p>
        {excerpt}
      </p>
    </Link>
  );
}

function Month({ events, month }:{ events: Event[], month:string }) {
  return (
    <div className="flex flex-col items-center justify-start gap-10 my-14">
      <h3 className="text-center text-3xl font-bold">
        {capitalize(month)}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 ">
        {
        events.map((event) => (
          <ProximosEventosItem key={event.id} {...event} />
        ))
      }
      </div>
    </div>
  );
}

export default function MesEventosProximos({ events }:{ events: Event[] }) {
  const [date] = useState(new Date());

  const actualMonth = events.filter((event) => {
    const eventDate = new Date(event.date).getTime();
    const eventMonth = new Date(event.date).getMonth();
    return date.getMonth() === eventMonth && eventDate > date.getTime();
  });

  const nextMonth = events.filter((event) => {
    const eventMonth = new Date(event.date).getMonth();

    return date.getMonth() + 1 === eventMonth;
  });

  const MONTH = 30 * 24 * 60 * 60 * 1000;

  const nextMonthName = capitalize(
    format(new Date(date.getTime() + MONTH), 'MMMM', 'es'),
  );

  return (
    <>
      <Month events={actualMonth} month="¡Este mes!" />
      <Month events={nextMonth} month={`Para ${nextMonthName}`} />
    </>
  );
}
