import {
  Github, Instagram, Linkedin, Youtube,
} from 'lucide-react';

export default function FollowUs() {
  return (
    <div className="flex gap-5">
      <span className="font-medium">Síguenos</span>
      <Instagram strokeWidth="1.5" />
      <Linkedin strokeWidth="1.5" />
      <Youtube strokeWidth="1.5" />
      <Github strokeWidth="1.5" />
    </div>
  );
}
