import Section from '@/components/ui/Section';
import LogoNeon from './LogoNeon';

export default function Hero() {
  return (
    <Section
      className="flex flex-col-reverse md:flex-row justify-between mt-16 md:mt-32 items-center md:pr-0 gap-y-16"
    >
      <div className="flex flex-col gap-4">
        <h1 className="flex flex-col text-6xl lg:text-7xl font-bold">
          <span>
            Capitulo
          </span>
          <span className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-3">
            <span>
              Estudiantil
            </span>
            <span className="text-background bg-primary rounded-lg px-3 py-2">
              ACM
            </span>
          </span>
        </h1>
        <h2 className="text-xl font-semibold">
          Universidad Nacional de San Agustin de Arequipa
        </h2>
      </div>
      <LogoNeon />
    </Section>
  );
}
