import { Button } from '@/components/ui/button';
import { cn, slugify } from '@/lib/utils';
import { ImagesCategories } from '@/types/images';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Categories({
  category,
  categories,
  setCategory,
}: {
  categories: ImagesCategories[];
  setCategory: (category: ImagesCategories) => void;
  category: ImagesCategories;
}) {
  const route = useRouter();

  const handleCategory = (id: ImagesCategories) => {
    if (category === id) {
      setCategory(ImagesCategories.ALL);
      route.push('/galeria');
    } else {
      setCategory(id);
      route.push(`/galeria#${slugify(id)}`);
    }
  };

  useEffect(() => {
    const path = window.location.href;

    if (path.includes('#')) {
      const categorySlug = path.split('#')[1];
      const categoryTarget = categories.find((c) => slugify(c) === categorySlug);
      setCategory(categoryTarget as ImagesCategories);
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-2 mb-8 ">
      {categories.map((currentCategory) => (
        <Button
          key={currentCategory}
          onClick={() => handleCategory(currentCategory)}
          type="button"
          variant="ghost"
          id={slugify(currentCategory)}
          className={cn('px-4 py-3', {
            'bg-primary text-background hover:bg-primary/90 hover:text-primary-foreground': category === currentCategory,
          })}
        >
          {currentCategory}
        </Button>
      ))}
    </div>
  );
}
