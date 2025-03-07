import Section from '@/components/ui/Section';
import Image from 'next/image';
import Title from './Title';

interface HeroProps {
  name: string;
  image: string;
}

export default function Hero({
  name, image,
}: HeroProps) {
  return (
    <Section className="md:flex-row justify-between gap-x-36 gap-y-20">
      <div className="flex flex-col gap-8">
        <Title content={name} />
        <span className="text-2xl">
          Universidad Nacional de San Agustín Arequipa
        </span>
      </div>
      <Image src={image} alt={name} width={0} height={0} className="flex-1 w-full" />
    </Section>
  );
}
