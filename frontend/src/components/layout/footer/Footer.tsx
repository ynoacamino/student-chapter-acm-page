import FollowUs from './FollowUs';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="w-full px-6 flex flex-col bg-primary py-6 gap-6 text-primary-foreground">
      <FollowUs />
      <hr className="border-muted-foreground" />
      <FooterLinks />
      <hr className="border-muted-foreground" />
    </footer>
  );
}
