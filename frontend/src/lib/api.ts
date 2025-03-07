import PocketBase from 'pocketbase';
import { BACKEND_URL } from '@/config/variables';
import { Collections } from '@/types/collections';
import { Member } from '@/types/members';
import { Committee, CommitteesFields } from '@/types/committees';
import { Event } from '@/types/events';
import { Image } from '@/types/images';
import { slugify } from '@/lib/utils';
import { Section, SectionsFields } from '@/types/sections';

export class PocketBaseAPI {
  pb: PocketBase;

  constructor() {
    this.pb = new PocketBase(BACKEND_URL);
    this.pb.autoCancellation(false);
  }

  async getMembers() {
    const result = await this.pb.collection(Collections.MEMBERS).getFullList({
      expand: 'image',
    });

    return result as Member[];
  }

  async getCommittees() {
    const result = await this.pb.collection(Collections.COMMITTEES).getFullList({
      expand: 'image',
    });

    return result as Committee[];
  }

  async getPastEvents() {
    const result = await this.pb.collection(Collections.EVENTS).getList(1, 10, {
      filter: 'date < @now',
      sort: '-date',
      expand: 'image',
    });

    return result.items as Event[];
  }

  async getUpcomingEvents() {
    const result = await this.pb.collection(Collections.EVENTS).getList(1, 10, {
      filter: 'date >= @now',
      sort: 'date',
      expand: 'image',
    });

    return result.items as Event[];
  }

  async getFullImages() {
    const result = await this.pb.collection(Collections.IMAGES).getFullList();

    return result as Image[];
  }

  async getMemberByCommittee({ committeeId }: { committeeId: string }) {
    const result = await this.pb.collection(Collections.MEMBERS).getFullList({
      filter: `committee="${committeeId}"`,
      expand: 'image',
    });

    return result as Member[];
  }

  async getPastEventsByCommittee({ committeeId }: { committeeId: string }) {
    const result = await this.pb.collection(Collections.EVENTS).getList(1, 10, {
      filter: `committee="${committeeId}" AND date < @now`,
      sort: '-date',
      expand: 'image',
    });

    return result.items as Event[];
  }

  async getUpcomingEventsByCommittee({ committeeId }: { committeeId: string }) {
    const result = await this.pb.collection(Collections.EVENTS).getList(1, 10, {
      filter: `committee="${committeeId}" AND date >= @now`,
      sort: 'date',
      expand: 'image',
    });

    return result.items as Event[];
  }

  async getCommitteeBySlug({ slug }: { slug: string }) {
    const committees = await this.getCommittees();

    return committees
      .find((committee) => slugify(committee[CommitteesFields.NAME]) === slug) as Committee;
  }

  async getSectionsByCommittee({ committeeId }: { committeeId: string }) {
    const result = await this.pb.collection(Collections.SECTIONS).getFullList({
      filter: `committee="${committeeId}"`,
      sort: `${SectionsFields.RELEVANCE}`,
      expand: 'image',
    });

    return result as Section[];
  }
}

const api = new PocketBaseAPI();
export default api;
