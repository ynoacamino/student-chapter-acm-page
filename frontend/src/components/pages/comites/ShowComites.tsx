import Section from '@/components/ui/Section';
import ComiteCard from './ComiteCard';

const comites = [
  {
    id: 1,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
  {
    id: 2,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
  {
    id: 3,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
  {
    id: 4,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
  {
    id: 5,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
  {
    id: 6,
    title: 'Astro is a Javascript web framework',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum',
    img: 'mock.png',
  },
];

export default function ShowComites() {
  return (
    <Section className="grid grid-rows-none grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
      {
        comites.map(({
          id, title, content, img,
        }) => (
          <ComiteCard
            key={id}
            title={title}
            content={content}
            img={img}
          />
        ))
      }
    </Section>
  );
}
