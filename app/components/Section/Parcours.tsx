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
    // <section className="py-25 px-6 md:px-12 lg:px-20 relative w-full flex justify-center bg-grid">
    //   <div className="absolute inset-0 flex items-center justify-center pointer-events-none h-auto">
    //     <ParcoursSVG className="w-full rotate-90 lg:rotate-0 lg:max-w-7xl overflow-hidden h-auto object-cover z-1 " />
    //   </div>
   
    // </section>
    <></>
  );
}
