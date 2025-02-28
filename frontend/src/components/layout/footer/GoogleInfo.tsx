const googleInfo = [
  { name: 'About Google', url: '#' },
  { name: 'Google products', url: '#' },
  { name: 'Products', url: '#' },
  { name: 'Terms', url: '#' },
];

export default function GoogleInfo() {
  return (
    <div className="flex gap-4 text-muted-foreground">
      {
        googleInfo.map(({ name, url }) => (
          <a key={name} href={url}>{name}</a>
        ))
      }
    </div>
  );
}
