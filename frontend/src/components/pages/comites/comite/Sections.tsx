import Section from '@/components/ui/Section';
import SectionAnimated from '@/components/ui/SectionAnimated';
import { getOriginalUrl } from '@/lib/utils';
import { Section as SectionType } from '@/types/sections';

export default function Sections({
  content,
}: { content: SectionType[] }) {
  return (
    <Section className="gap-32 mt-[40rem] mb-[45rem]">
      {
        content.map((section) => (
          <SectionAnimated
            key={section.id}
            className="flex gap-14"
          >
            <img src={getOriginalUrl(section)} alt={section.title} width={0} height={0} className="grow w-full" />
            <div className="flex flex-col justify-center gap-4">
              <h3
                className="font-semibold text-3xl"
              >
                {section.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            </div>
          </SectionAnimated>
        ))
      }
    </Section>
  );
}
