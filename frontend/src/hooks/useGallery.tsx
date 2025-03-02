'use client';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useState } from 'react';
import 'photoswipe/style.css';

const defaultPhotos = [
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 1',
    width: 1920,
    height: 1277,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 2',
    width: 1280,
    height: 837,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 3',
    width: 1280,
    height: 853,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 4',
    width: 960,
    height: 1280,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 5',
    width: 853,
    height: 1280,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 6',
    width: 1280,
    height: 945,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 7',
    width: 1920,
    height: 1277,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 8',
    width: 1280,
    height: 837,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 9',
    width: 1280,
    height: 853,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 10',
    width: 960,
    height: 1280,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 11',
    width: 853,
    height: 1280,
  },

  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 12',
    width: 1280,
    height: 945,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 13',
    width: 1920,
    height: 1277,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 14',
    width: 1280,
    height: 837,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 15',
    width: 1280,
    height: 853,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 16',
    width: 960,
    height: 1280,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 17',
    width: 853,
    height: 1280,
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 18',
    width: 1280,
    height: 945,
  },
];

const defaultCategories = [
  {
    name: 'All',
    id: 0,
  },
  {
    name: 'Category 1',
    id: 1,
  },
  {
    name: 'Category 2',
    id: 2,
  },
  {
    name: 'Category 3',
    id: 3,
  },
];

export const useGallery = ({ id }: { id:string }) => {
  const [photos, setPhotos] = useState(defaultPhotos);

  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('@appnest/masonry-layout')
      .then(() => setIsLoading(false));
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
    if (category === 0) {
      setPhotos(defaultPhotos);
    } else {
      setPhotos(defaultPhotos.filter((photo) => photo.category === category));
    }
  }, [category]);

  const categories = defaultCategories;

  return {
    photos,
    categories,
    setCategory,
    category,
    isLoading,
  };
};
