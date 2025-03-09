import GoogleWordLogo from '@/components/logos/GoogleWordLogo';
import Link from 'next/link';

const googleInfo = [
  { name: 'Acerca de Google', url: 'https://about.google' },
  { name: 'Productos de Google', url: 'https://about.google/products' },
  { name: 'Privacidad', url: 'https://policies.google.com/privacy' },
  { name: 'Términos', url: 'https://policies.google.com/terms' },
  { name: 'Ayuda', url: 'https://support.google.com/?hl=es' },
];

export default function GoogleInfo() {
  return (
    <div className="flex gap-7 text-muted-foreground text-sm flex-wrap">
      <Link href="https://google.com">
        <GoogleWordLogo className="fill-muted-foreground" />
      </Link>
      {
        googleInfo.map(({ name, url }) => (
          <Link key={name} href={url}>{name}</Link>
        ))
      }
    </div>
  );
}
