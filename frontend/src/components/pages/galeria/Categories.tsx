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
  return (
    <div className="flex gap-6 mb-8">
      {categories.map(({ name, id }) => (
        <Button
          key={id}
          onClick={() => setCategory(id)}
          type="button"
          variant="ghost"
          className={cn('px-5 py-3', {
            'bg-primary text-background': category === id,
          })}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}
