import Section from '@/components/ui/Section';

export default function Title() {
  return (
    <Section>
      <h1 className="text-5xl md:text-7xl font-bold flex flex-col items-center justify-start gap-4 z-30">
        <span className="flex flex-col md:flex-row gap-3 items-center">
          <span>
            Conoce
          </span>
          <span className="text-background bg-primary rounded-lg px-3 py-2">
            Quienes
          </span>
        </span>
        <span>
          Somos
        </span>
      </h1>
    </Section>
  );
}
