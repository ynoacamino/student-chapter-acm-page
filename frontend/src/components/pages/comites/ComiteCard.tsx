import Image from 'next/image';

interface ComiteCardProps {
  title: string;
  content: string;
  img: string;
}

export default function ComiteCard({
  title, content, img,
}: ComiteCardProps) {
  return (
    <article className="flex flex-col gap-6 border-muted border-2 rounded-xl p-6">
      <Image src={`/comites/${img}`} alt={img} width={0} height={0} className="w-full" />
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
      <p className="">
        {content}
      </p>
    </article>
  );
}
