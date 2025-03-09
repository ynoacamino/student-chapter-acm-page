import Section from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section className="gap-5">
      <h2 className="font-semibold text-3xl">
        No se ha podido encontrar este sitio
      </h2>
      <h4 className="text-xl">
        Intenta con otra ruta
      </h4>
    </Section>
  );
}
