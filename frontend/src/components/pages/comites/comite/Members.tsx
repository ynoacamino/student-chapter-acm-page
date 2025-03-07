import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { Member, ROLES } from '@/types/members';
import MemberCard from './MemberCard';

export default function Members({
  content,
}: { content: Member[] }) {
  return (
    <Section className="gap-12">
      <Title as="h2">
        Nuestros Integrantes
      </Title>
      <h3 className="text-3xl font-semibold">
        Directiva
      </h3>
      <div className="flex flex-wrap gap-16 justify-center">
        {
          content
            .filter(({ role }) => ROLES.MEMBER !== role && ROLES.VOLUNTEER !== role)
            .map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))
        }
      </div>
      <h3 className="text-3xl font-semibold">
        Integrantes
      </h3>
      <div className="flex flex-wrap gap-16 justify-center">
        {
          content
            .filter(({ role }) => ROLES.MEMBER === role)
            .map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))
        }
      </div>
      <h3 className="text-3xl font-semibold">
        Voluntarios
      </h3>
      <div className="flex flex-wrap gap-16 justify-center">
        {
          content
            .filter(({ role }) => ROLES.VOLUNTEER === role)
            .map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))
        }
      </div>
    </Section>
  );
}
