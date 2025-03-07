import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { InicioSections } from '@/config/pages';
import BentoComites from './BentoComittees';

export default function NuestrosComites() {
  return (
    <Section className="gap-14" id={InicioSections.NUESTROS_COMITES_ID}>
      <Title as="h2">
        Nuestros Comités
      </Title>
      <BentoComites />
    </Section>
  );
}
