import ACMLogo from '@/components/logos/ACMLogo';

export default function LogoNeon() {
  return (
    <div className="w-full max-w-2xs md:max-w-md relative">
      <ACMLogo className="w-full" />
      <ACMLogo className="w-full absolute top-0 left-0 blur-xs" />
    </div>
  );
}
