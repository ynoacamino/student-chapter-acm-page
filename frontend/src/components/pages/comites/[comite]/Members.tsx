import Section from '@/components/ui/Section';
import Title from '@/components/ui/Title';
import { ComiteMember } from '@/types/comite';
import MemberCard from './MemberCard';

interface MembersProps {
  content: Array<ComiteMember>;
}

export default function Members({
  content,
}: MembersProps) {
  const groups = Object.groupBy(content, (member) => member.role);
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
          groups.directive?.map(({
            name, img, links, role, position,
          }, index) => (
            role === 'directive' && (
              <MemberCard
                // eslint-disable-next-line react/no-array-index-key
                key={`${name}-${index}-${role}`}
                title={name}
                img={img}
                links={links}
                role={position}
              />
            )
          ))
        }
      </div>
      <h3 className="text-3xl font-semibold">
        Integrantes
      </h3>
      <div className="flex flex-wrap gap-16 justify-center">
        {
          groups.member?.map(({
            name, img, links,
          }, index) => (
            <MemberCard
              // eslint-disable-next-line react/no-array-index-key
              key={`${name}-${index}`}
              title={name}
              img={img}
              links={links}
            />
          ))
        }

      </div>
      <h3 className="text-3xl font-semibold">
        Voluntarios
      </h3>
      <div className="flex flex-wrap gap-16 justify-center">
        {
          groups.volunteer?.map(({
            name, img, links,
          }, index) => (
            <MemberCard
              // eslint-disable-next-line react/no-array-index-key
              key={`${name}-${index}`}
              title={name}
              img={img}
              links={links}
            />
          ))
        }

      </div>
    </Section>
  );
}
