import { RecordModel } from 'pocketbase';

export enum ImagesFields {
  ORIGINAL = 'original',
  THUMBNAIL = 'thumbnail',
  DESCRIPTION = 'description',
  ORIGINAL_HEIGHT = 'original_height',
  ORIGINAL_WIDTH = 'original_width',
}

export interface Image extends RecordModel {
  [ImagesFields.ORIGINAL]: string;
  [ImagesFields.THUMBNAIL]: string;
  [ImagesFields.DESCRIPTION]: string;
  [ImagesFields.ORIGINAL_HEIGHT]: number;
  [ImagesFields.ORIGINAL_WIDTH]: number;
}
