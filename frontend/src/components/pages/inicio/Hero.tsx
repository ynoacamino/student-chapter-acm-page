import ACMLogo from '@/components/logos/ACMLogo';
import Section from '@/components/ui/Section';

export default function Hero() {
  return (
    <Section className="flex justify-between py-20">
      <div className="flex flex-col gap-4">
        <h1 className="flex flex-col text-7xl font-bold">
          <span>
            Capitulo
          </span>
          <span>
            Estudiantil
            {' '}
            <span className="text-background bg-primary rounded-lg px-3 py-2">
              ACM
            </span>
          </span>
        </h1>
        <h2 className="text-xl font-semibold">
          Universidad Nacional de San Agustin de Arequipa
        </h2>
      </div>
      <ACMLogo />
    </Section>
  );
}
