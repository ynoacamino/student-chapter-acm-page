import { RecordModel } from 'pocketbase';
import { Image } from './images';

export enum CommitteesFields {
  NAME = 'name',
  DESCRIPTION = 'description',
  EXCERPT = 'excerpt',

  IMAGE = 'image',
}

export interface Committee extends RecordModel {
  [CommitteesFields.NAME]: string;
  [CommitteesFields.DESCRIPTION]: string;
  [CommitteesFields.EXCERPT]: string;

  [CommitteesFields.IMAGE]: string;

  expand: {
    [CommitteesFields.IMAGE]: Image;
  };
}
