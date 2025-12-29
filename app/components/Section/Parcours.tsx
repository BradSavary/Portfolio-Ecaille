import React from "react";
import SectionTitle from "../SectionTitle";
import ParcoursSVG  from "../svg/Parcours";

interface ParcoursItem {
  categoryTitle: string;
  title: string;
  topDescription?: string;
  topDate?: string;
  bottomDescription?: string;
  bottomDate?: string;
}

const parcoursData: ParcoursItem[] = [
  {
    categoryTitle: "Baccalauréat",
    title: "Lycée",
    topDate: "07/2023",
    topDescription: "Avec les spécialités Numérique et Sciences Informatiques, SES et option Mathématiques, j'obtiens mon Baccalauréat avec mention, ayant acquis de solides bases en développement.",
    bottomDescription: "Marguerite de Navarre - Bourges (18)",
  },
  {
    categoryTitle: "Obtention du DUT MMI",
    title: "BUT MMI",
    topDate: "08/2025",
    topDescription: "Je valide ma 2e année de BUT Métiers du Multimédia et de l'Internet, en maîtrisant des compétences de UI/UX design, graphisme, développement web et en communication.",
    bottomDescription: "IUT du Limousin - Limoges (87)",
  },
  {
    categoryTitle: "Stage chez l'ACDGB",
    title: "1ER STAGE",
    topDate: "11 semaines - 04/25 à 06/25",
    topDescription: "Ma mission était de réaliser un site internet pour la formation Génie Biologique à l’échelle nationale.  En passant par l’analyse, les prototypes  au développement.",
    bottomDescription: "IUT du Limousin - Limoges (87)",
  },
];

export default function Parcours() {
  return (
    <section className="py-25 px-6 md:px-12 lg:px-20 relative w-full flex justify-center bg-grid">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none h-auto">
        <ParcoursSVG className="w-full rotate-90 lg:rotate-0 lg:max-w-7xl overflow-hidden h-auto object-cover z-1 " />
      </div>
      <div className="relative z-10">
        <SectionTitle title="Mon parcours" containerClassName="self-start flex items-center gap-2 p-4 md:p-5 lg:p-6 border-1 max-w-fit" starColor="pink" borderColor="black" />
        
        {/* Timeline container */}
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-20">
          {/* First map: Top content (category + descriptions + dates) */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 w-full">
            {parcoursData.map((item, index) => (
              <div key={`top-${index}`} className="flex-1 flex flex-col items-center text-center px-4 lg:px-8">
                {/* Category title in bold */}
                <h4 className="text-black font-bold text-base lg:text-lg">
                  {item.categoryTitle}
                </h4>
                
                {/* Top content */}
                {(item.topDescription || item.topDate) && (
                  <div className="mb-6 max-w-xs">
                    {item.topDate && (
                      <p className="text-black">{item.topDate}</p>
                    )}
                    {item.topDescription && (
                      <p className="text-black text-sm leading-relaxed">{item.topDescription}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pink dots and connector lines */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 my-8 w-full">
            {parcoursData.map((item, index) => (
              <React.Fragment key={`dot-${index}`}>
                {/* Container for the dot - takes 1/3 of space */}
                <div className={`flex-1 flex items-center ${
                  index === 0 ? 'justify-end lg:pr-30' : 
                  index === parcoursData.length - 1 ? 'justify-start lg:pl-30' : 
                  'justify-center'
                }`}>
                  <div className="w-4 h-4 rounded-full bg-accent-tertiary"></div>
                </div>
                
                {/* Connector line between tiers (not after last item) */}
                {index < parcoursData.length - 1 && (
                  <>
                    {/* Desktop horizontal line - between the tiers */}
                    <div className="hidden lg:block w-30 h-0.5 bg-accent-tertiary shrink-0"></div>
                    
                    {/* Mobile vertical line */}
                    <div className="lg:hidden h-16 w-0.5 bg-accent-tertiary"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Second map: Bottom content (titles + descriptions + dates) */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 w-full">
            {parcoursData.map((item, index) => (
              <div key={`bottom-${index}`} className="flex-1 flex flex-col items-center text-center px-4 lg:px-8">
                {/* Title */}
                <h3 className="text-accent-primary font-bold text-2xl lg:text-3xl mb-6 uppercase font-mtpalma">
                  {item.title}
                </h3>
                
                {/* Bottom content */}
                {(item.bottomDescription || item.bottomDate) && (
                  <div className="max-w-xs">
                    {item.bottomDate && (
                      <p className="text-black font-semibold mb-2">{item.bottomDate}</p>
                    )}
                    {item.bottomDescription && (
                      <p className="text-black text-sm leading-relaxed">{item.bottomDescription}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
