import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { InicioSections } from '@/config/pages';

export default function QuienesSomos() {
  return (
    <Section className="gap-14" id={InicioSections.QUIENES_SOMOS_ID}>
      <Title as="h2">
        Quienes Somos
      </Title>
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold">
          Astro is a JavaScript web framework optimized for building fast, content-driven websites.
        </h3>
        <div className="flex flex-col md:flex-row gap-12 w-full">
          <div className="flex flex-col gap-8 w-full">
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using &apos;Content here,
              content here, making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for lorem ipsum will uncover many web sites still in
              infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="rounded-xl bg-muted w-full max-w-96 aspect-square" />
        </div>
      </div>
    </Section>
  );
}
