import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { ConocenosSections } from '@/config/pages';

const PHOTOS = Array.from({ length: 32 }).map((_, i) => ({
  id: i * 27,
}));

export default function JuntosParaLograrlo() {
  return (
    <Section className="gap-16" id={ConocenosSections.JUNTOS_PARA_LOGRARLO_ID}>
      <Title as="h2">
        Juntos Para Lograrlo
      </Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-6 md:gap-10">
        {
          PHOTOS.map(({ id }) => (
            <img
              key={id}
              src="/comites/mock.png"
              alt="mock"
              className="w-full aspect-square rounded-full"
            />
          ))
        }
      </div>
    </Section>
  );
}
