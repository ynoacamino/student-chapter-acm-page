import PocketBase from 'pocketbase';
import { BACKEND_URL } from '@/config/variables';
import { Collections } from '@/types/collections';
import { Member } from '@/types/members';
import { Committee, CommitteesFields } from '@/types/committees';
import { convertToRoute } from './utils';

export class PocketBaseAPI {
  pb: PocketBase;

  constructor() {
    this.pb = new PocketBase(BACKEND_URL);
    this.pb.autoCancellation(false);
  }

  async getMembers() {
    const result = await this.pb.collection(Collections.MEMBERS).getFullList();

    return result as Member[];
  }

  async getAllComittesOverview(props?: { images: boolean }) {
    const reqImages = props?.images ? CommitteesFields.IMAGE : '';
    const fields = `${CommitteesFields.NAME},${CommitteesFields.EXCERPT},${reqImages}`;
    const result = await this.pb.collection(Collections.COMMITTEES).getFullList({
      fields,
    });
    if (props?.images) return result as Committee[];
    return result as Omit<Committee, CommitteesFields.IMAGE>[];
  }

  async getAllComittesRoutes() {
    const fields = CommitteesFields.NAME;
    const result = await this.pb.collection(Collections.COMMITTEES).getFullList({
      fields,
    });
    return result.map((comittee) => convertToRoute(comittee[CommitteesFields.NAME]));
  }

  // async getInstitutions() {
  //   try {
  //     const result = await this.pb.collection('institutions').getFullList({
  //       sort: '-name',
  //     });

  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Error al obtener las instituciones');
  //   }
  // }

  // async getDegrees() {
  //   try {
  //     const result = await this.pb.collection('degrees').getFullList({
  //       sort: '-name',
  //     });

  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Error al obtener los grados academicos');
  //   }
  // }

  // async getCommentsById(id: string) {
  //   try {
  //     const result = await this.pb.collection('comments').getFullList({
  //       filter: `course="${id}"`,
  //       expand: 'user',
  //       requestKey: 'commentsApi',
  //     });
  //     return result as Comments[];
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Error al obtener los cometarios');
  //   }
  // }
}

const api = new PocketBaseAPI();
export default api;
