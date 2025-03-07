import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import slugifyLib from 'slugify';
import { Committee } from '@/types/committees';
import { Member } from '@/types/members';
import { Section } from '@/types/sections';
import { Speaker } from '@/types/speakers';
import { Event } from '@/types/events';
import { RecordModel } from 'pocketbase';
import { BACKEND_URL } from '@/config/variables';
import { ImagesFields } from '@/types/images';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function convertToRoute(route: string) {
  return route.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replaceAll(' ', '-');
  
export function slugify(text: string) {
  return slugifyLib(text, { lower: true });
}

function isMemberOrSpeaker(record: RecordModel): record is Member | Speaker {
  return 'photo' in record;
}

export function getImageUrl(record: Committee | Member | Section | Speaker | Event) {
  let originalImage = '';
  let thumbnailImage = '';

  let imageCollectionId = '';
  let imageId = '';

  if (isMemberOrSpeaker(record)) {
    originalImage = record.expand.photo[ImagesFields.ORIGINAL];
    thumbnailImage = record.expand.photo[ImagesFields.THUMBNAIL];

    imageCollectionId = record.expand.photo.collectionId;
    imageId = record.expand.photo.id;
  } else {
    originalImage = record.expand.image[ImagesFields.ORIGINAL];
    thumbnailImage = record.expand.image[ImagesFields.THUMBNAIL];

    imageCollectionId = record.expand.image.collectionId;
    imageId = record.expand.image.id;
  }

  const thumbnailUrl = `${BACKEND_URL}/api/files/${imageCollectionId}/${imageId}/${originalImage}`;
  const originalUrl = `${BACKEND_URL}/api/files/${imageCollectionId}/${imageId}/${thumbnailImage}`;

  return {
    thumbnailUrl,
    originalUrl,
  };
}

export function getThumbnailUrl(record: Committee | Member | Section | Speaker | Event) {
  return getImageUrl(record).thumbnailUrl;
}

export function getOriginalUrl(record: Committee | Member | Section | Speaker | Event) {
  return getImageUrl(record).originalUrl;
}
