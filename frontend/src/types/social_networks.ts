import { RecordModel } from 'pocketbase';

export enum SocialNetworkFields {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  INSTAGRAM = 'instagram',
}

export interface SocialNetwork extends RecordModel {
  [SocialNetworkFields.GITHUB]: string;
  [SocialNetworkFields.LINKEDIN]: string;
  [SocialNetworkFields.INSTAGRAM]: string;
}
