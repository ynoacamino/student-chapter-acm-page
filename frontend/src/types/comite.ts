import { COMITES_ROUTES } from '@/lib/mock';

export interface BaseMember {
  name: string;
  img: string;
  role: 'member' | 'directive' | 'volunteer';
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  }
}

export interface Member extends BaseMember {
  role: 'member';
}

export interface Directive extends BaseMember {
  role: 'directive';
  position: string;
}

export interface Volunteer extends BaseMember {
  role: 'volunteer';
}

export interface Event {
  date: string;
  name: string;
  description: string;
}

export type ComiteMember = Member | Directive | Volunteer;

export type ComiteRoute = typeof COMITES_ROUTES[number];

export interface Comite {
  route: ComiteRoute;
  title: string;
  description: string;
  img: string;
  sections: Array<{ title: string, img: string; description: Array<string> }>;
  members: Array<ComiteMember>;
  events: {
    past: Array<Event>
    future: Array<Event>
  },

}
