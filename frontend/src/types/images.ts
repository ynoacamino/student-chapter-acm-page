import { RecordModel } from 'pocketbase';

export enum ImagesCategories {
  ALL = 'Todo',
  COMMITTEE = 'Comités',
  VIRTUAL_EVENT = 'Eventos virtuales',
  IN_PERSON_EVENT = 'Eventos presenciales',
  ACHIEVEMENTS = 'Logros',
}

export enum ImagesRatio {
  RATIO_1_1 = '1:1',
  RATIO_4_3 = '4:3',
  RATIO_3_4 = '3:4',
  RATIO_16_9 = '16:9',
  RATIO_9_16 = '9:16',
}

export enum ImagesFields {
  ORIGINAL = 'original',
  THUMBNAIL = 'thumbnail',
  DESCRIPTION = 'description',
  ORIGINAL_HEIGHT = 'original_height',
  ORIGINAL_WIDTH = 'original_width',
  RATIO = 'ratio',
  CATEGORY = 'category',
}

export interface Image extends RecordModel {
  [ImagesFields.ORIGINAL]: string;
  [ImagesFields.THUMBNAIL]: string;
  [ImagesFields.DESCRIPTION]: string;
  [ImagesFields.ORIGINAL_HEIGHT]: number;
  [ImagesFields.ORIGINAL_WIDTH]: number;
  [ImagesFields.RATIO]: ImagesRatio;
  [ImagesFields.CATEGORY]: ImagesCategories;
}

export interface ImageCarousel extends Image {
  rotate: number;
  uuid: string;
}
