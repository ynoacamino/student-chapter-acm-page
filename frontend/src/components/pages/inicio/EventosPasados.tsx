import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { AutoCarousel, AutoCarouselItem } from '@/components/ui/autoCarousel';

const pastEvents = [
  {
    title: 'Evento 1',
    description: 'Explora y organiza investigaciones con facilidad 1',
    image: '/images/hero.png',
  },
  {
    title: 'Evento 2',
    description: 'Explora y organiza investigaciones con facilidad 2',
    image: '/images/hero.png',
  },
  {
    title: 'Evento 3',
    description: 'Explora y organiza investigaciones con facilidad 3',
    image: '/images/hero.png',
  },
  {
    title: 'Evento 4',
    description: 'Explora y organiza investigaciones con facilidad 4',
    image: '/images/hero.png',
  },
  {
    title: 'Evento 5',
    description: 'Explora y organiza investigaciones con facilidad 5',
    image: '/images/hero.png',
  },
  {
    title: 'Evento 6',
    description: 'Explora y organiza investigaciones con facilidad 6',
    image: '/images/hero.png',
  },
];

export default function EventosPasados() {
  return (
    <Section>
      <Title as="h2">
        Eventos Pasados
      </Title>
      <div className="mx-auto container px-3 mt-10">
        <AutoCarousel>
          {
            pastEvents.map(({ title, description }) => (
              <AutoCarouselItem key={title}>
                <div className="flex flex-col items-center px-4 py-5 sm:p-6 gap-y-10">
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                      {title}
                    </p>
                    <p className="text-sm text-gray-600 px-2 ">{description}</p>
                  </div>
                  <div className="flex items-center justify-center h-64 my-auto">
                    <div
                      className="rounded-xl bg-muted size-72"
                    />
                  </div>
                </div>
              </AutoCarouselItem>
            ))
          }
        </AutoCarousel>
      </div>
    </Section>
  );
}
