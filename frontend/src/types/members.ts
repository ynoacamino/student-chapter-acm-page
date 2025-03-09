import { RecordModel } from 'pocketbase';
import { Image } from './images';
import { Committee } from './committees';
import { SocialNetwork } from './social_networks';

export enum MembersRoles {
  MEMBER = 'member',
  VOLUNTEER = 'volunteer',
  PRESIDENT = 'president',
  VICE_PRESIDENT = 'vice_president',
  TREASURER = 'treasurer',
  SECRETARY = 'secretary',
}

export const Roles = {
  [MembersRoles.MEMBER]: 'Miembro',
  [MembersRoles.VOLUNTEER]: 'Voluntario',
  [MembersRoles.PRESIDENT]: 'Presidente',
  [MembersRoles.VICE_PRESIDENT]: 'Vicepresidente',
  [MembersRoles.TREASURER]: 'Tesorero',
  [MembersRoles.SECRETARY]: 'Secreatario',
};

export enum MembersFields {
  NAME = 'name',
  LAST_NAME = 'last_name',
  ROLE = 'role',

  PHOTO = 'photo',
  COMMITTEE = 'committee',
  SOCIAL_NETWORKS = 'social_networks',
}

export interface Member extends RecordModel {
  [MembersFields.NAME]: string;
  [MembersFields.LAST_NAME]: string;
  [MembersFields.ROLE]: MembersRoles;

  [MembersFields.PHOTO]: string;
  [MembersFields.COMMITTEE]: string;
  [MembersFields.SOCIAL_NETWORKS]: string;

  expand: {
    [MembersFields.PHOTO]: Image;
    [MembersFields.COMMITTEE]: Committee;
    [MembersFields.SOCIAL_NETWORKS]?: SocialNetwork;
  };
}
