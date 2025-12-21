import Logo from "../svg/Logo";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="absolute w-full flex justify-between py-8 px-8 z-50 bg-gradient-to-b from-black/60 via-black/30 to-transparent">
      <Logo className="w-32" />
      <div className="flex gap-15  ">
        <Link href="/" className="text-lg font-thin transition-colors tracking-wider hover:text-accent-secondary">A propos</Link>
        <Link href="/projects" className="text-lg font-light transition-colors tracking-wider hover:text-accent-secondary">Mes projets</Link>
        <Link href="#footer" className="text-lg font-light transition-colors tracking-wider hover:text-accent-secondary">Contactez moi</Link>
      </div>
    </nav>
  );
}
