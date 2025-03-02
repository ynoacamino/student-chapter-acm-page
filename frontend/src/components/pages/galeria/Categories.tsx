import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Categories({
  category,
  categories,
  setCategory,
}: {
  categories: { name: string, id: number }[];
  setCategory: (categoryId: number) => void;
  category: number;
}) {
  const handleCategory = (id: number) => {
    if (category === id) {
      setCategory(0);
    } else {
      setCategory(id);
    }
  };

  return (
    <div className="flex gap-6 mb-8">
      {categories.map(({ name, id }) => (
        <Button
          key={id}
          onClick={() => handleCategory(id)}
          type="button"
          variant="ghost"
          className={cn('px-5 py-3', {
            'bg-primary text-background hover:bg-primary/90 hover:text-primary-foreground': category === id,
          })}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}
