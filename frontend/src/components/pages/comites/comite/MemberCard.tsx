import { getThumbnailUrl } from '@/lib/utils';
import { Member } from '@/types/members';
// import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
// import Link from 'next/link';

export default function MemberCard(member: Member) {
  const { name, last_name, role } = member;

  // const links = undefined;

  return (
    <article className="flex flex-col gap-3 max-w-72 justify-center items-center min-h-54">
      {
        getThumbnailUrl(member) ? (
          <Image src={getThumbnailUrl(member)} alt={name} width={0} height={0} className="h-full flex-1" />
        ) : (
          <div className="grow bg-muted aspect-square rounded-full" />
        )
      }
      <h4 className="font-semibold text-2xl">
        {`${name} ${last_name}`}
      </h4>
      {
        role && <h5 className="text-muted-foreground">{role}</h5>
      }
      {/* {
        links && (
          <div className="flex gap-2 text-muted-foreground">
            {
              links.github && (
              <Link href={links.github}>
                <Github className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              links.instagram && (
              <Link href={links.instagram}>
                <Instagram className="hover:text-secondary-foreground" />
              </Link>
              )
            }
            {
              links.linkedin && (
              <Link href={links.linkedin}>
                <Linkedin className="hover:text-secondary-foreground" />
              </Link>
              )
            }

          </div>
        )
      } */}
    </article>
  );
}
