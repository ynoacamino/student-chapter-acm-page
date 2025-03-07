import ACMLogo from '@/components/logos/ACMLogo';
import Link from 'next/link';
import pagesConfig from '@/config/pages';
import ColumnLinks from './ColumnLinks';

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-7">
      {
        pagesConfig.pages.map((page) => (
          <ColumnLinks
            key={page.path}
            {...page}
          />
        ))
      }
      <Link href="https://acm.org" className="flex justify-center basis-36 max-h-60 grow self-center">
        <ACMLogo />
      </Link>
    </div>
  );
}
