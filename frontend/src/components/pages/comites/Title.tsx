import Section from '@/components/ui/Section';

export default function Title() {
  return (
    <Section>
      <h1 className="flex flex-col gap-4 text-6xl lg:text-7xl font-bold">
        <span className="flex justify-center">
          Conoce
        </span>
        <span className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-y-4 gap-x-3">
          <span>
            Nuestros
          </span>
          <span className="text-background bg-primary rounded-lg px-3 py-2">
            Comités
          </span>
        </span>
      </h1>
    </Section>
  );
}
