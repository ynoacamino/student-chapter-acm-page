import { RecordModel } from 'pocketbase';
import { Image } from './images';
import { Committee } from './committees';

export enum SectionsFields {
  TITLE = 'title',
  BODY = 'body',
  RELEVANCE = 'relevance',

  COMMITTEE = 'committee',
  IMAGE = 'image',
}

export interface Section extends RecordModel {
  [SectionsFields.TITLE]: string;
  [SectionsFields.BODY]: string;
  [SectionsFields.RELEVANCE]: string;

  [SectionsFields.COMMITTEE]: string;
  [SectionsFields.IMAGE]: string;

  expand: {
    [SectionsFields.IMAGE]: Image;
    [SectionsFields.COMMITTEE]: Committee;
  };
}
