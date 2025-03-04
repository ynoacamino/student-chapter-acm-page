import Section from '@/components/ui/Section';
import Image from 'next/image';

interface SectionsProps {
  content: Array<{ title: string, img: string, description: Array<string> }>
}

export default function Sections({
  content,
}: SectionsProps) {
  return (
    <Section className="gap-32">
      {
        content.map(({ title, img, description }, index) => (
          <article
            key={`${title}-${index}`}
            className="flex gap-14"
          >
            <Image src={img} alt={img} width={0} height={0} className="grow w-full" />
            <div className="flex flex-col justify-center gap-4">
              <h3
                className="font-semibold text-3xl"
              >{title}</h3>
              {
                description.map((value, index) => (
                  <p
                    key={`${value.substring(0, 10)}-${index}`}
                  >
                    {value}
                  </p>
                ))
              }
            </div>
          </article>
        ))
      }
    </Section>
  );
}
