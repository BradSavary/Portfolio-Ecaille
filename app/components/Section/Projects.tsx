'use client'

"use client";

import SectionTitle from "../SectionTitle";
import Star from "../svg/Star";
import TitleProject1 from "../svg/TitleProject1";
import TitleProject2 from "../svg/TitleProject2";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className=" py-10 px-6 md:px-12 lg:px-20 bg-grid" >
      <SectionTitle title="Mes projets phares" starColor="pink" borderColor="black"/>
      {/* Add project cards here*/}
      <div className="w-full min-w-70 justify-self-center items-center flex flex-col md:flex-row gap-4 justify-center mt-15">
        {/* Card 1 - UI/UX DESIGN */}
        <Link href="/projects?category=UI/UX"
          className={`group/card relative w-full h-80 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
            hoveredCard === null ? 'md:w-1/2' : hoveredCard === 1 ? 'md:w-2/3' : 'md:w-1/3'
          }`}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background images grid */}
          <div className="absolute inset-0 flex transition-all duration-300">
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/kamazon.webp" 
                alt="Kamazon" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/danielwellington.png" 
                alt="Daniel Wellington" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/gtApp.webp" 
                alt="GT App" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/crealink.png" 
                alt="Crealink" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
          {/* Pink overlay */}
          <div className="absolute inset-0 bg-accent-tertiary mix-blend-hard-light transition-all duration-500 pointer-events-none opacity-70"></div>
          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TitleProject1 className="w-48 md:w-64 drop-shadow-lg z-10"/>
          </div>
        </Link>

        {/* Card 2 - GRAPHISME */}
        <Link href="/projects?category=Graphisme" 
          className={`group/card relative w-full h-80 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
            hoveredCard === null ? 'md:w-1/2' : hoveredCard === 2 ? 'md:w-2/3' : 'md:w-1/3'
          }`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background images grid */}
          <div className="absolute inset-0 flex transition-all duration-300">
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/flyers.webp" 
                alt="Flyers" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/illustrations.webp" 
                alt="Illustrations" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image 
                src="/projects/intelligence-collective.webp" 
                alt="Intelligence Collective" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/4 h-full">
             <Image 
                src="/projects/bar.png" 
                alt="Bar" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
          {/* Pink overlay */}
          <div className="absolute inset-0 bg-accent-tertiary mix-blend-hard-light transition-all duration-500 pointer-events-none opacity-70"></div>
          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TitleProject2 className="w-48 md:w-64 drop-shadow-lg z-10"/>
          </div>
        </Link>
      </div>
    <div className="mt-10 flex flex-row items-center gap-1">
    <Star color="pink" className="h-10"/>
    <Link href="/projects">
    <p className="underline text-xl">
      Voir <span className="text-accent-primary">tous</span> les projets →
    </p>
    </Link>
    </div>
    </section>
  );
}
