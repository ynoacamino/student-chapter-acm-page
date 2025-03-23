import { RecordModel } from 'pocketbase';
import { Image } from './images';
import { Speaker } from './speakers';
import { Committee } from './committees';

export enum EventsFields {
  NAME = 'name',
  EXCERPT = 'excerpt',
  DESCRIPTION = 'description',
  DATE = 'date',

  IMAGE = 'image',
  SPEAKER = 'speaker',
  COMMITTEE = 'committee',
  GALLERY = 'gallery',
}

export interface Event extends RecordModel {
  [EventsFields.NAME]: string;
  [EventsFields.EXCERPT]: string;
  [EventsFields.DESCRIPTION]: string;
  [EventsFields.DATE]: string;

  [EventsFields.IMAGE]: string;
  [EventsFields.SPEAKER]: string;
  [EventsFields.COMMITTEE]: string;
  [EventsFields.GALLERY]: string[];

  expand: {
    [EventsFields.IMAGE]?: Image;
    [EventsFields.SPEAKER]: Speaker;
    [EventsFields.COMMITTEE]: Committee;
    [EventsFields.GALLERY]: Image[];
  };
}
