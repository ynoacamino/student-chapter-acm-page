'use client';

import { useEffect, useState } from 'react';

const defaultPhotos = [
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 1',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 2',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 3',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 4',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 5',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 6',
  },
  // Repeticiones para ampliar el array
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 7',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 8',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 9',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 10',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 11',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 12',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740858990_cat-1455468_1920.jpg',
    category: 1,
    name: 'Photo 13',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859029_cat-8257177_1280.jpg',
    category: 1,
    name: 'Photo 14',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859056_cat-914110_1280.jpg',
    category: 2,
    name: 'Photo 15',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859090_cat-61079_1280.jpg',
    category: 2,
    name: 'Photo 16',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859133_cat-4959941_1280.jpg',
    category: 3,
    name: 'Photo 17',
  },
  {
    src: 'https://ynoa-uploader.ynoacamino.site/uploads/1740859155_cat-5077557_1280.jpg',
    category: 3,
    name: 'Photo 18',
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

export const useGallery = () => {
  const [photos, setPhotos] = useState(defaultPhotos);

  const [category, setCategory] = useState(0);

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
  };
};
