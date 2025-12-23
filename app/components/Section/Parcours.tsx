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
    <section className="py-25 px-6 md:px-12 lg:px-20 relative w-full flex justify-center ">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
        <ParcoursSVG className="w-full md:max-w-4xl lg:max-w-6xl h-auto object-contain z-0 overflow-visible" />
      </div>
      <div className="relative z-10">
        <SectionTitle title="Mon parcours" starColor="pink" borderColor="black"/>
        
        {/* Timeline container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-7xl mx-auto mt-20">
          {parcoursData.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row lg:items-center">
              {/* Parcours item */}
              <div className="flex flex-col items-center text-center px-4 lg:px-8 max-w-70">
                {/* Category title in bold */}
                <h4 className="text-black font-bold text-base lg:text-lg">
                  {item.categoryTitle}
                </h4>
                
                {/* Top content */}
                {(item.topDescription || item.topDate) && (
                  <div className="mb-6 ">
                    {item.topDate && (
                      <p className="text-black">{item.topDate}</p>
                    )}
                    {item.topDescription && (
                      <p className="text-black text-sm leading-relaxed">{item.topDescription}</p>
                    )}
                  </div>
                )}
                
                {/* Pink dot */}
                <div className="w-4 h-4 rounded-full bg-accent-tertiary mb-3"></div>
                
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
              
              {/* Connector line (not after last item) */}
              {index < parcoursData.length - 1 && (
                <div className="hidden lg:block">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-0.5 bg-accent-tertiary"></div>
                  </div>
                </div>
              )}
              
              {/* Mobile connector line */}
              {index < parcoursData.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-12 w-0.5 bg-accent-tertiary"></div>
                    <div className="h-12 w-0.5 bg-accent-tertiary"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
