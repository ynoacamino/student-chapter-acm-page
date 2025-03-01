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
];

const defaultCategories = [
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
  const [photos, setPhotos] = useState(
    defaultPhotos
      .concat(defaultPhotos)
      .concat(defaultPhotos).concat(defaultPhotos).sort(() => Math.random() - 0.5),
  );

  const [category, setCategory] = useState(0);

  useEffect(() => {
    if (category === 0) {
      setPhotos(defaultPhotos);
    } else {
      setPhotos(defaultPhotos.filter((photo) => photo.category === category));
    }
  }, []);

  const categories = defaultCategories;

  return {
    photos,
    categories,
    setCategory,
    category,
  };
};
