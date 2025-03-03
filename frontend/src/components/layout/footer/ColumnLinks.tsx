import Link from 'next/link';

interface ColumnLinksProps {
  title: string;
  links: Array<{ name: string, url: string }>
}

export default function ColumnLinks({
  title, links,
}: ColumnLinksProps) {
  return (
    <div className="flex flex-col gap-2 grow basis-36">
      <span className="font-medium">{ title }</span>
      {
        links.map(({ name, url }) => (
          <Link key={name} href={url} className="text-muted-foreground hover:underline">{name}</Link>
        ))
      }
    </div>
  );
}
