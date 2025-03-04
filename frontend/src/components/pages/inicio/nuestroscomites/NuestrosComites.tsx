import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import BentoComites from './BentoComites';

export default function NuestrosComites() {
  return (
    <Section className="gap-14">
      <Title as="h2">
        Nuestros Comités
      </Title>
      <BentoComites />
    </Section>
  );
}
