import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react'; // Example social icons

const INSTAGRAM_LINK = "https://instagram.com/rafaelafelix"; // Replace with actual Instagram profile

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rafaela Felix Lash &amp; Brow. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            {/* Add other social links if available */}
            {/* 
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
            */}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Designed with <span className="text-accent">♡</span>
        </p>
      </div>
    </footer>
  );
}
