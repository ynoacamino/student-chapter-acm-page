import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { ConocenosSections } from '@/config/pages';
import api from '@/lib/api';
import { getThumbnailUrl } from '@/lib/utils';
import { MembersFields, MembersRoles } from '@/types/members';

export default async function JuntosParaLograrlo() {
  const members = (await api.getMembers())
    .sort((prev) => (prev?.expand.photo ? -1 : 1))
    .sort((prev) => (prev[MembersFields.ROLE] !== MembersRoles.MEMBER ? -1 : 1));

  return (
    <Section className="gap-16 z-30" id={ConocenosSections.JUNTOS_PARA_LOGRARLO_ID}>
      <Title as="h2">
        Juntos Para Lograrlo
      </Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-6 md:gap-10">
        {
          members.map((member) => (
            <img
              key={member.id}
              src={getThumbnailUrl(member)}
              alt={member.name}
              className="w-full aspect-square rounded-full"
            />
          ))
        }
      </div>
    </Section>
  );
}
