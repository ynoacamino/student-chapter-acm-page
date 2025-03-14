import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { Member, MembersRoles } from '@/types/members';
import { ComitesSections } from '@/config/pages';
import MemberCard from './MemberCard';

export default function Members({
  content,
}: { content: Member[] }) {
  return (
    <Section
      id={ComitesSections.NUESTROS_INTEGRANTES_ID}
      className="gap-12 z-30"
    >
      <Title as="h2">
        Nuestros Integrantes
      </Title>
      <h3 className="text-3xl font-semibold text-center" id={ComitesSections.DIRECTIVA_ID}>
        Directiva
      </h3>
      <div className="flex flex-wrap gap-10 md:gap-16 justify-center">
        {
          content
            .filter(({ role }) => MembersRoles.MEMBER !== role && MembersRoles.VOLUNTEER !== role)
            .map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))
        }
      </div>
      <h3 id={ComitesSections.MIEMBROS_ID} className="text-3xl font-semibold text-center">
        Integrantes
      </h3>
      <div className="flex flex-wrap gap-10 md:gap-16 justify-center">
        {
          content
            .filter(({ role }) => MembersRoles.MEMBER === role)
            .map((member) => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))
        }
      </div>
      {
        content
          .filter(({ role }) => MembersRoles.VOLUNTEER === role)
          .length > 0
          && (
            <>
              <h3 id={ComitesSections.VOLUNTARIOS_ID} className="text-3xl font-semibold text-center">
                Voluntarios
              </h3>
              <div className="flex flex-wrap gap-10 md:gap-16 justify-center">
                {
                  content
                    .filter(({ role }) => MembersRoles.VOLUNTEER === role)
                    .map((member) => (
                      <MemberCard
                        key={member.id}
                        {...member}
                      />
                    ))
                }
              </div>
            </>
          )
      }
    </Section>
  );
}
