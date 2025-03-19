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
        <div className="flex flex-col md:flex-row gap-12 w-full items-center">
          <div className="flex flex-col gap-6 w-full py-6 text-lg">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Impulsando la innovación y el aprendizaje en tecnología
            </h3>
            <p>
              Somos el Capítulo Estudiantil ACM de la Universidad Nacional de San
              Agustín, conformado por estudiantes apasionados por la informática y la tecnología.
            </p>
            <p>
              Nuestro objetivo es fomentar el aprendizaje, innovación y la conexión
              entre los estudiantes con los profesionales del sector tecnológico.
            </p>
            <p>
              Buscamos crear un espacio donde los estudiantes puedan mejorar sus
              habilidades, conectarse con profesionales de la industria y mantenerse
              al día con las últimas tendencias en tecnología.
            </p>
          </div>
          <img
            className="rounded-xl bg-muted w-full max-w-80 aspect-square object-cover"
            src="https://acm-panel.ynoacamino.site/api/files/pbc_3607937828/1ns53v8z5l896fz/2ca40cf0_3dd6_4d92_8f56_81a93b6fb403_7rczya8m6c.webp?token="
            alt="acm"
          />
        </div>
      </div>
    </Section>
  );
}
