import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel, AutoCarouselItem } from '@/components/ui/autoCarousel';

const pastEvents = [
  {
    title: 'Proximo Evento 1',
    description: 'Explora y organiza investigaciones con facilidad 1 organiza investigaciones',
    date: '24 de Mayo',
  },
  {
    title: 'Proximo Evento 2',
    description: 'Explora y organiza investigaciones con facilidad 2 organiza investigaciones',
    date: '24 de Mayo',
  },
  {
    title: 'Proximo Evento 3',
    description: 'Explora y organiza investigaciones con facilidad 3 organiza investigaciones',
    date: '24 de Mayo',
  },
  {
    title: 'Proximo Evento 4',
    description: 'Explora y organiza investigaciones con facilidad 4 organiza investigaciones',
    date: '24 de Mayo',
  },
  {
    title: 'Proximo Evento 5',
    description: 'Explora y organiza investigaciones con facilidad 5 organiza investigaciones',
    date: '24 de Mayo',
  },
  {
    title: 'Proximo Evento 6',
    description: 'Explora y organiza investigaciones con facilidad 6 organiza investigaciones',
    date: '24 de Mayo',
  },
];

export default function ProximosEventos() {
  return (
    <Section>
      <Title as="h2">
        Proximos Eventos
      </Title>
      <div className="mx-auto container px-3 mt-10">
        <AutoCarousel>
          {
            pastEvents.map(({ title, description, date }) => (
              <AutoCarouselItem key={title}>
                <div className="flex flex-col items-start px-4 py-3 gap-y-2 border border-primary rounded-md justify-center mx-2">
                  <span>
                    {date}
                  </span>
                  <h3 className="text-2xl font-semibold">
                    {title}
                  </h3>
                  <p>
                    {description}
                  </p>
                </div>
              </AutoCarouselItem>
            ))
          }
        </AutoCarousel>
      </div>
    </Section>
  );
}
