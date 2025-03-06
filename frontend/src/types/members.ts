import { RecordModel } from 'pocketbase';
import { Image } from './images';
import { Committee } from './committees';

export enum ROLES {
  MEMBER = 'member',
  VOLUNTEER = 'volunteer',
  PRESIDENT = 'president',
  VICE_PRESIDENT = 'vice_president',
  TREASURER = 'treasurer',
  SECRETARY = 'secretary',
}

export enum MembersFields {
  NAME = 'name',
  LAST_NAME = 'last_name',
  ROLE = 'role',

  PHOTO = 'photo',
  COMMITTEE = 'committee',
}

export interface Member extends RecordModel {
  [MembersFields.NAME]: string;
  [MembersFields.LAST_NAME]: string;
  [MembersFields.ROLE]: ROLES;

  [MembersFields.PHOTO]: string;
  [MembersFields.COMMITTEE]: string;

  expand?: {
    [MembersFields.PHOTO]: Image;
    [MembersFields.COMMITTEE]: Committee;
  };
}
