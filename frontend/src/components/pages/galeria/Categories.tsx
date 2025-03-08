import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ImagesCategories } from '@/types/images';

export default function Categories({
  category,
  categories,
  setCategory,
}: {
  categories: ImagesCategories[];
  setCategory: (category: ImagesCategories) => void;
  category: ImagesCategories;
}) {
  const handleCategory = (id: ImagesCategories) => {
    if (category === id) {
      setCategory(ImagesCategories.ALL);
    } else {
      setCategory(id);
    }
  };

  return (
    <div className="flex gap-2 mb-8">
      {categories.map((currentCategory) => (
        <Button
          key={currentCategory}
          onClick={() => handleCategory(currentCategory)}
          type="button"
          variant="ghost"
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
