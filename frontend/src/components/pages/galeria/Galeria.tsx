'use client';

import Section from '@/components/ui/Section';
import { useGallery } from '@/hooks/useGallery';
import Categories from './Categories';
import Photos from './Photos';
import PhotosSkeleton from './PhotosSkeleton';

const GALLERY_ID = 'main-gallery';

export default function Galeria() {
  const {
    photos, categories, setCategory, category, isLoading,
  } = useGallery({ id: GALLERY_ID });

  return (
    <Section className="items-start mt-10" id={GALLERY_ID}>
      <Categories categories={categories} setCategory={setCategory} category={category} />
      {/* <Photos photos={photos} /> */}
      {
        isLoading ? (
          <PhotosSkeleton />
        ) : (
          <Photos photos={photos} />
        )
      }
    </Section>
  );
}
