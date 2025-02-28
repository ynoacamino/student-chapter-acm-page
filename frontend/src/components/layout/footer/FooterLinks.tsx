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
    <div className="flex">
      <ColumnLinks title="About" links={aboutLinks} />
      <ColumnLinks title="Learn More" links={learnLinks} />
      {/* I think that here the ACM logo is a good idea */}
    </div>
  );
}
