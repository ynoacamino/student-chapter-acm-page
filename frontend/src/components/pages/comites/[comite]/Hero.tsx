import Section from '@/components/ui/Section';
import Image from 'next/image';
import Title from './Title';

interface HeroProps {
  title: string;
  img: string;
}

export default function Hero({
  title, img,
}: HeroProps) {
  return (
    <Section className="flex-row justify-between gap-36">
      <div className="flex flex-col gap-8">
        <Title content={title} />
        <span className="text-2xl">
          Universidad Nacional de San Agustín Arequipa
        </span>
      </div>
      <Image src={img} alt={title} width={0} height={0} className="flex-1 w-full" />
    </Section>
  );
}
