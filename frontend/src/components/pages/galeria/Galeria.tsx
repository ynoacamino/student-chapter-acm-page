'use client';

import Section from '@/components/ui/Section';
import { useGallery } from '@/hooks/useGallery';
import Categories from './Categories';
import Photos from './Photos';

export default function Galeria() {
  const {
    photos, categories, setCategory, category,
  } = useGallery();

  return (
    <Section className="items-start">
      <Categories categories={categories} setCategory={setCategory} category={category} />
      <Photos photos={photos} />
    </Section>
  );
}
