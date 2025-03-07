import { Page } from '@/config/pages';
import Link from 'next/link';

export default function ColumnLinks(page: Page) {
  const {
    name, path, pages, sections,
  } = page;

  return (
    <div className="flex flex-col gap-2 grow basis-36">
      <Link
        href={path}
        className="font-medium"
      >
        { name }
      </Link>
      {
        pages?.map((subPage) => (
          <Link
            key={subPage.path}
            href={subPage.path}
            className="text-muted-foreground hover:underline"
          >
            {subPage.name}
          </Link>
        ))
      }
      {
        sections?.map((section) => (
          <Link
            key={section.id}
            href={`${path}#${section.id}`}
            className="text-muted-foreground hover:underline"
          >
            {section.name}
          </Link>
        ))
      }
    </div>
  );
}
