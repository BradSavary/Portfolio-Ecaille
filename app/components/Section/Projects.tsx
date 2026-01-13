import SectionTitle from "../SectionTitle";
import Star from "../svg/Star";
import TitleProject1 from "../svg/TitleProject1";
import TitleProject2 from "../svg/TitleProject2";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className=" py-10 px-6 md:px-12 lg:px-20 bg-grid" >
      <SectionTitle title="Mes projets phares" starColor="pink" borderColor="black"/>
      {/* Add project cards here*/}
      <div className="w-full min-w-70 justify-self-center items-center flex flex-col md:flex-row gap-4 justify-center mt-15">
        {/* Card 1 - UI/UX DESIGN */}
        <div className="group relative w-full md:w-1/2 aspect-2/1 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 max-w-xl">
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
          <div className="absolute inset-0 bg-accent-tertiary/60  transition-all duration-300 pointer-events-none"></div>
          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TitleProject1 className="w-48 md:w-64 drop-shadow-lg z-10"/>
          </div>
        </div>

        {/* Card 2 - GRAPHISME */}
        <div className="group relative w-full md:w-1/2 aspect-2/1 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 max-w-xl">
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
                src="/projects/bar.png" 
                alt="Bar" 
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
          </div>
          {/* Pink overlay */}
          <div className="absolute inset-0 bg-accent-tertiary/60 transition-all duration-300 pointer-events-none"></div>
          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TitleProject2 className="w-48 md:w-64 drop-shadow-lg z-10"/>
          </div>
        </div>
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
