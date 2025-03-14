import { getThumbnailUrl } from '@/lib/utils';
import { Member, Roles } from '@/types/members';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function MemberCard(member: Member) {
  const {
    name, last_name, role, expand,
  } = member;
  const { social_networks } = expand;

  return (
    <article className="flex flex-col gap-3 max-w-36 md:max-w-48 justify-start items-center min-h-54">
      <img
        src={getThumbnailUrl(member)}
        alt={name}
        className="rounded-full w-full aspect-square flex items-center justify-center"
      />
      <h4 className="font-semibold text-xl text-center mt-1">
        {`${name} ${last_name}`}
      </h4>
      {
        role && <h5 className="text-muted-foreground font-medium">{Roles[role]}</h5>
      }
      {
        social_networks && (
          <div className="flex gap-2 text-muted-foreground">
            {
              social_networks.github && (
              <Link href={social_networks.github} target="_blank">
                <Github className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              social_networks.instagram && (
              <Link href={social_networks.instagram} target="_blank">
                <Instagram className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              social_networks.linkedin && (
              <Link href={social_networks.linkedin} target="_blank">
                <Linkedin className="hover:text-secondary-foreground" />
              </Link>
              )
            }

          </div>
        )
      }
    </article>
  );
}
