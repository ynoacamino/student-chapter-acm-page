import Section from '@/components/ui/Section';
import SectionAnimated from '@/components/ui/SectionAnimated';
import Image from 'next/image';

interface SectionsProps {
  content: Array<{ title: string, img: string, description: Array<string> }>
}

export default function Sections({
  content,
}: SectionsProps) {
  return (
    <Section className="gap-32 mt-[40rem] mb-[45rem]">
      {
        content.map(({ title, img, description }, index) => (
          <SectionAnimated
            // eslint-disable-next-line react/no-array-index-key
            key={`${title}-${index}`}
            className="flex flex-col md:flex-row gap-14"
          >
            <Image src={img} alt={img} width={0} height={0} className="grow w-full" />
            <div className="flex flex-col justify-center gap-4">
              <h3
                className="font-semibold text-3xl"
              >
                {title}
              </h3>
              {
                description.map((value, descriptionIndex) => (
                  <p
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${value.substring(0, 10)}-${descriptionIndex}`}
                  >
                    {value}
                  </p>
                ))
              }
            </div>
          </SectionAnimated>
        ))
      }
    </Section>
  );
}
