import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { Committee, CommitteesFields } from '@/types/committees';
import BentoComites from './BentoComittees';

interface NuestrosComitesProps {
  comittees: Omit<Committee, CommitteesFields.IMAGE>[];
}

export default function NuestrosComites({
  comittees,
}: NuestrosComitesProps) {
  return (
    <Section className="gap-14">
      <Title as="h2">
        Nuestros Comités
      </Title>
      <BentoComites comittees={comittees} />
    </Section>
  );
}
