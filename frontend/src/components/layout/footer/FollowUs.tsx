import {
  Github, Instagram, Linkedin, Youtube,
} from 'lucide-react';
import Link from 'next/link';

export default function FollowUs() {
  return (
    <div className="flex gap-6 flex-wrap">
      <span className="font-medium">Síguenos</span>
      <Link
        href="https://instagram.com"
        className="hover:text-muted-foreground"
      >
        <Instagram strokeWidth="1.5" />
      </Link>
      <Link
        href="https://pe.linkedin.com"
        className="hover:text-muted-foreground"
      >
        <Linkedin strokeWidth="1.5" />
      </Link>
      <Link
        href="https://youtube.com"
        className="hover:text-muted-foreground"
      >
        <Youtube strokeWidth="1.5" />
      </Link>
      <Link
        href="https://github.com"
        className="hover:text-muted-foreground"
      >
        <Github strokeWidth="1.5" />
      </Link>
    </div>
  );
}
