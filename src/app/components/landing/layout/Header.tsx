import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl md:text-2xl font-bold text-accent">Rafaela Felix Lash & Brow</span>
        </Link>
        <nav className="flex items-center">
          <Image
            src="https://i.imgur.com/gA9yOM3.png"
            alt="Rafaela Felix Lash & Brow Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </nav>
      </div>
    </header>
  );
}
