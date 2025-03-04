import Image from 'next/image';
import Link from 'next/link';

interface ComiteCardProps {
  title: string;
  content: string;
  img: string;
  path: string;
}

export default function ComiteCard({
  title, content, img, path,
}: ComiteCardProps) {
  return (
    <Link
      href={`/comites/${path}`}
      className="flex flex-col gap-6 border-muted border-2 rounded-xl p-6 hover:scale-105 transition-transform"
    >
      <Image src={`/comites/${img}`} alt={img} width={0} height={0} className="w-full" />
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
      <p className="">
        {content}
      </p>
    </Link>
  );
}
