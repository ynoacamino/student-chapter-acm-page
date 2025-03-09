import { SectionsFields, Section as SectionType } from '@/types/sections';
import { getOriginalUrl } from '@/lib/utils';
import SectionAnimationScroll from '../../conocenos/SectionAnimationScroll';

export default function Sections({
  content,
}: { content: SectionType[] }) {
  return (
    <>
      {
        content.map((section) => (
          <SectionAnimationScroll
            key={section.title}
            id={section.id}
            title={section.title}
            content={section[SectionsFields.BODY]}
            image={getOriginalUrl(section)}
          />
        ))
      }
    </>
  );
}
