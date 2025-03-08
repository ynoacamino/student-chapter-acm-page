'use client';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useState } from 'react';
import 'photoswipe/style.css';
import { Image, ImagesCategories } from '@/types/images';
import { usePhotos } from './swr';

const categories = Object.values(ImagesCategories);

export const useGallery = ({ id }: { id:string }) => {
  const [isLibLoading, setIsLibLoading] = useState(true);

  const { isDataLoading, allPhotos } = usePhotos();

  const [category, setCategory] = useState(ImagesCategories.ALL);

  const [gallery, setGallery] = useState<Image[]>([]);

  useEffect(() => {
    import('@appnest/masonry-layout')
      .then(() => setIsLibLoading(false));
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      preload: [2, 4],
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [id]);

  useEffect(() => {
    if (!isDataLoading && allPhotos) {
      if (category === ImagesCategories.ALL) {
        setGallery(allPhotos);
      } else {
        setGallery(allPhotos.filter((photo) => photo.category === category));
      }
    }
  }, [category, isDataLoading, allPhotos]);

  return {
    gallery,
    categories,
    setCategory,
    category,
    isLoading: isLibLoading || isDataLoading,
  };
};
