import Section from '@/components/ui/Section';

export default function Title() {
  return (
    <Section>
      <h1 className="text-5xl lg:text-6xl font-bold flex flex-col items-center justify-start gap-4">
        <span>
          Descubre
        </span>
        <span className="flex flex-col md:flex-row gap-3 items-center">
          <span>
            Nuestra
          </span>
          <span className="text-background bg-primary rounded-lg px-3 py-2">
            Galeria
          </span>
        </span>
      </h1>
    </Section>
  );
}
