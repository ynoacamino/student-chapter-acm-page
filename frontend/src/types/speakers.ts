import { RecordModel } from 'pocketbase';
import { Image } from './images';

export enum SpeakersFields {
  NAME = 'name',
  LAST_NAME = 'last_name',
  SHORT_BIBLIOGRAPHY = 'short_bibliography',
  LONG_BIBLIOGRAPHY = 'long_bibliography',

  PHOTO = 'photo',
}

export interface Speaker extends RecordModel {
  [SpeakersFields.NAME]: string;
  [SpeakersFields.LAST_NAME]: string;
  [SpeakersFields.SHORT_BIBLIOGRAPHY]: string;
  [SpeakersFields.LONG_BIBLIOGRAPHY]: string;

  [SpeakersFields.PHOTO]: string;

  expand?: {
    [SpeakersFields.PHOTO]: Image;
  };
}
