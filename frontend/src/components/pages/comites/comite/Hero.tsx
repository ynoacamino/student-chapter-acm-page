import Section from '@/components/ui/Section';
import Title from './Title';

interface HeroProps {
  name: string;
  image: string;
}

export default function Hero({
  name, image,
}: HeroProps) {
  return (
    <Section className="grid lg:grid-cols-2 gap-10 justify-center">
      <div className="flex flex-col gap-8 items-center lg:items-start justify-center w-full">
        <Title content={name} />
        <span className="sm:text-lg md:text-xl">
          Universidad Nacional de San Agustín Arequipa
        </span>
      </div>
      <img src={image} alt={name} className="rounded-lg w-full max-w-md justify-self-center" />
    </Section>
  );
}
