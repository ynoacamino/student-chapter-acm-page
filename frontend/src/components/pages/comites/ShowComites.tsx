import Section from '@/components/ui/Section';
import api from '@/lib/api';
import ComiteCard from './ComiteCard';

export default async function ShowComites() {
  const committees = await api.getCommittees();

  return (
    <Section className="grid grid-rows-none grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
      {
        committees.map((committee) => (
          <ComiteCard
            key={committee.id}
            {...committee}
          />
        ))
      }
    </Section>
  );
}
