import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MemberCardProps {
  title: string;
  role?: string;
  img?: string;
  links?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  }
}

export default function MemberCard({
  title, role, img, links,
}: MemberCardProps) {
  return (
    <article className="flex flex-col gap-3 max-w-72 justify-center items-center min-h-54">
      {
        img ? (
          <Image src={img} alt={img} width={0} height={0} className="h-full flex-1" />
        ) : (
          <div className="grow bg-muted aspect-square rounded-full" />
        )
      }
      <h4 className="font-semibold text-2xl">
        {title}
      </h4>
      {
        role && <h5 className="text-muted-foreground">{role}</h5>
      }
      {
        links && (
          <div className="flex gap-2 text-muted-foreground">
            {
              links.github && <Link href={links.github}><Github className="hover:text-secondary-foreground" /></Link>
            }
            {
              links.instagram && <Link href={links.instagram}><Instagram className="hover:text-secondary-foreground" /></Link>
            }
            {
              links.linkedin && <Link href={links.linkedin}><Linkedin className="hover:text-secondary-foreground" /></Link>
            }

          </div>
        )
      }
    </article>
  );
}
