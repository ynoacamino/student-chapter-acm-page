interface ColumnLinksProps {
  title: string;
  links: Array<{ name: string, url: string }>
}

export default function ColumnLinks({
  title, links,
}: ColumnLinksProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="font-medium">{ title }</span>
      {
        links.map(({ name, url }) => (
          <a key={name} href={url} className="text-muted-foreground">{name}</a>
        ))
      }
    </div>
  );
}
