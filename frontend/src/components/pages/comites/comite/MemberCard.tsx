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
    <article className="flex flex-col gap-3 max-w-72 justify-center items-center min-h-54">
      {
        getThumbnailUrl(member) ? (
          <img src={getThumbnailUrl(member)} alt={name} className="rounded-full w-full max-w-36 md:max-w-56 aspect-square flex items-center justify-center" />
        ) : (
          <div className="grow bg-muted aspect-square rounded-full" />
        )
      }
      <h4 className="font-semibold text-2xl">
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
              <Link href={social_networks.github}>
                <Github className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              social_networks.instagram && (
              <Link href={social_networks.instagram}>
                <Instagram className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              social_networks.linkedin && (
              <Link href={social_networks.linkedin}>
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
