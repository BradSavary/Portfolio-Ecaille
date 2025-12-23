"use client";

import Logo from "../svg/Logo";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full flex justify-between py-4 md:py-8 px-6 md:px-8 z-50 bg-gradient-to-b from-black/60 via-black/30 to-transparent text-background">
      <Logo className="w-24 md:w-32" />
      
      {/* Menu Desktop */}
      <div className="hidden md:flex gap-8 lg:gap-15">
        <Link href="/" className="text-base lg:text-lg font-thin transition-colors tracking-wider hover:text-accent-secondary">A propos</Link>
        <Link href="/projects" className="text-base lg:text-lg font-light transition-colors tracking-wider hover:text-accent-secondary">Mes projets</Link>
        <Link href="#footer" className="text-base lg:text-lg font-light transition-colors tracking-wider hover:text-accent-secondary">Contactez moi</Link>
      </div>

      {/* Bouton Hamburger Mobile */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={`w-6 h-0.5 bg-background transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-background transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-background transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8">
          <Link 
            href="/" 
            className="text-2xl font-thin transition-colors tracking-wider hover:text-accent-secondary"
            onClick={() => setIsOpen(false)}
          >
            A propos
          </Link>
          <Link 
            href="/projects" 
            className="text-2xl font-light transition-colors tracking-wider hover:text-accent-secondary"
            onClick={() => setIsOpen(false)}
          >
            Mes projets
          </Link>
          <Link 
            href="#footer" 
            className="text-2xl font-light transition-colors tracking-wider hover:text-accent-secondary"
            onClick={() => setIsOpen(false)}
          >
            Contactez moi
          </Link>
        </div>
      )}
    </nav>
  );
}
