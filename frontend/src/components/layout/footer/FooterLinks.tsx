import ACMLogo from '@/components/logos/ACMLogo';
import Link from 'next/link';
import ColumnLinks from './ColumnLinks';

const aboutLinks = [
  { name: 'About Google DeepMind', url: '#' },
  { name: 'Responsibility & Safety', url: '#' },
  { name: 'Research', url: '#' },
  { name: 'Technologies', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Careers', url: '#' },
];

const learnLinks = [
  { name: 'Gemini', url: '#' },
  { name: 'Veo', url: '#' },
  { name: 'Imagen', url: '#' },
  { name: 'SynthID', url: '#' },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-7">
      <ColumnLinks title="About" links={aboutLinks} />
      <ColumnLinks title="Learn More" links={learnLinks} />
      {/* I think that here the ACM logo is a good idea */}
      <Link href="https://acm.org" className="flex justify-center basis-36 max-h-60 grow">
        <ACMLogo />
      </Link>
    </div>
  );
}
