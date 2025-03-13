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
import { Image, ImagesFields } from '@/types/images';

const DEFAULT_PHOTO_URL = 'https://ynoa-uploader.ynoacamino.site/uploads/1741887040_New%20Project.webp';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return slugifyLib(text, { lower: true });
}

function isMemberOrSpeaker(record: RecordModel): record is Member | Speaker {
  return 'photo' in record;
}

function isImage(record: RecordModel): record is Image {
  return 'ratio' in record;
}

export function getImageUrl(record: Committee | Member | Section | Speaker | Event | Image) {
  let originalImage = '';
  let thumbnailImage = '';

  let imageCollectionId = '';
  let imageId = '';

  if (isImage(record)) {
    originalImage = record[ImagesFields.ORIGINAL];
    thumbnailImage = record[ImagesFields.THUMBNAIL];

    imageCollectionId = record.collectionId;
    imageId = record.id;
  } else if (isMemberOrSpeaker(record)) {
    if (!record.expand.photo) {
      return {
        thumbnailUrl: DEFAULT_PHOTO_URL,
        originalUrl: DEFAULT_PHOTO_URL,
      };
    }

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

  const thumbnailUrl = `${BACKEND_URL}/api/files/${imageCollectionId}/${imageId}/${thumbnailImage}`;
  const originalUrl = `${BACKEND_URL}/api/files/${imageCollectionId}/${imageId}/${originalImage}`;

  return {
    thumbnailUrl,
    originalUrl,
  };
}

export function getThumbnailUrl(record: Committee | Member | Section | Speaker | Event | Image) {
  return getImageUrl(record).thumbnailUrl;
}

export function getOriginalUrl(record: Committee | Member | Section | Speaker | Event | Image) {
  return getImageUrl(record).originalUrl;
}
