"use client";

import Image from "next/image";
import { useState } from "react";
import Nav from "../components/Section/Nav";
import Footer from "../components/Section/Footer";
import ProjectsHeader from "../components/svg/ProjectsHeader";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Création de flyers",
    description: "Pour présenter la programmation des concerts à venir de la fédération Hiero.",
    image: "/projects/flyers.webp",
    link: "https://www.figma.com/proto/6vxkUCSFL26RfqU7vs5oNk/SAE-Flyers?page-id=0%3A1&node-id=2-2&viewport=763%2C498%2C0.13&t=MVxjcgHsr3a0Pd6g-1&scaling=contain&content-scaling=fixed",
    categories: ["Graphisme"]
  },
  {
    id: 2,
    title: "Illustrations",
    description: "\"Through the Forest\" : création d'une série d'illustrations fantasy / distopique.",
    image: "/projects/illustrations.webp",
    link: "https://www.behance.net/gallery/240114529/Trough-your-eyes",
    categories: ["Graphisme"]
  },
  {
    id: 3,
    title: "Site E-commerce",
    description: "Création d'un site internet de e-commerce sur le thème de Guardian Tales. Création d'objets 3D, réalisation d'une vidéo en motion design, utilisation de Wordpress, code html javascript css. Le site n'est plus hébergé mais à été réalisé entièrement sur Wordpress.",
    image: "/projects/kamazon.webp",
    link: "https://www.figma.com/design/6CjLccdV5vyT2L2NlcRge0/Kamazon?node-id=0-1&t=JTdImGlDBYGXLYdD-1",
    categories: ["UI/UX"]
  },
  {
    id: 4,
    title: "Site E-commerce",
    description: "Reconstitution du site e-commerce \"Daniel Wellington\" sur wordpress avec WhoCommerce.",
    image: "/projects/danielwellington.png",
    link: "https://www.figma.com/design/jKEkrIAEjgMqLbC5adkPh2/SAE-301?node-id=0-1&t=U62a5YZSivCXKO95-1",
    categories: ["Dev web"]
  },
  {
    id: 5,
    title: "Motion design",
    description: "Réalisation d'une vidéo de promotion pour un évènement \“Nuit MMI\”, interne à l'IUT du Limousin.",
    image: "/projects/nuitmmi.webp",
    link: "https://vimeo.com/1144822391?share=copy&fl=sv&fe=ci",
    categories: ["Graphisme"]
  },
  {
    id: 6,
    title: "Identité visuelle",
    description: "Réalisation d'une identité visuelle et établissement d'une stratégie de communication pour un bar à thème cinéma-retro à Liverpool.",
    image: "/projects/bar.png",
    link: "https://www.figma.com/design/tqIB2fk4hWVSPfbrBZc6ab/Bar-cin%C3%A9ma-retro?node-id=281-1591&t=PTPcNThKKLGKzBZw-1",
    categories: ["Graphisme"]
  },
  {
    id: 7,
    title: "Application mobile",
    description: "Réalisation d'un prototype d'une application mobile pour un univers fictif, pour moi Guardian Tales.",
    image: "/projects/gtApp.webp",
    link: "https://www.figma.com/design/UxGMvg3YuBFKUxdgFgy2mN/Eloise-Marien---GuardianWear-(Copy)?node-id=140-11755&t=oCCi6jCfmOVEAGoM-1",
    categories: [ "UI/UX"]
  },
  {
    id: 8,
    title: "Environnement 3D",
    description: "Création d'un environnement 3D avec A-frame.",
    image: "/projects/aframe.png",
    link: "https://yooeslie.github.io/Projet-3D/",
    categories: ["Dev web"]
  },
  {
    id: 9,
    title: "Vidéo explicative",
    description: "Motion design pour expliquer le concept d'intelligence collective.",
    image: "/projects/intelligence-collective.webp",
    link: "https://vimeo.com/1144823719?share=copy&fl=sv&fe=ci",
    categories: ["Graphisme"]
  },
  {
    id: 10,
    title: "Set de personnages",
    description: "Création de personnages pour mettre en valeur les métiers de la céramique.",
    image: "/projects/ceramique.png",
    link: "https://www.figma.com/proto/xCV7THyKlN0a4CqDW2GSOH/SAE-C%C3%A9ramique?page-id=0%3A1&node-id=6-157&p=f&viewport=-11377%2C-5235%2C0.53&t=XNVGvRDfuWyFqVDG-1&scaling=min-zoom&content-scaling=fixed",
    categories: ["Graphisme"]
  },
  {
    id: 11,
    title: "Benchmark",
    description: "Réalisation d'un benchmark complet en vue de la création d'un site web pour l'association Crealink.",
    image: "/projects/crealink.png",
    link: "https://www.canva.com/design/DAGGcjw-4ow/s1A7VXIen9VhPB-Wz8Ensw/edit",
    categories: ["UI/UX"]
  },
  {
    id: 12,
    title: "Landing Page",
    description: "Réalisation d'une landing page pour une marque italienne d'huile d'olive.",
    image: "/projects/oliveoil.webp",
    link: "https://www.figma.com/design/FUibtNbsQIOwUzDFc6GzqB/ELOISE-MARIEN---Olive-Oil?node-id=11-34&t=HpWAVKvaBplhalpI-1",
    categories: ["UI/UX"]
  }
];

const categories = ["Tous", "Graphisme", "Dev web", "UI/UX"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen relative bg-grid">
        <ProjectsHeader id="top" className="absolute w-full "/>
      <Nav />
      
      <section className="py-16 px-6 md:px-12 lg:px-20 relative flex flex-col justify-center items-center pt-30" id="projects">
        <div className="flex flex-col items-center mb-8 relative text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-mtpalma">Tous mes projets</h1>
        <h2 className="text-6xl top-4 md:text-7xl md:top-5 lg:text-8xl lg:top-7.5 font-imperialscript text-accent-tertiary absolute ">Tous mes projets</h2>
        </div>
        {/* Filtres de catégories */}
        <div className="flex flex-wrap gap-3 mt-8 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-1 rounded-full transition-all border border-black ${
              selectedCategory === category
                ? "bg-accent-tertiary text-white border-none"
                : " text-black hover:bg-accent-tertiary hover:text-white hover:border-accent-tertiary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Liste des projets */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row md:gap-6 min-h-80 w-full"
          >
            {/* Image du projet */}
            <div className="md:w-1/2 md:min-w-60 lg:min-w-90 relative h-64 md:h-auto overflow-hidden rounded-2xl border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>

            {/* Informations du projet */}
            <div className="md:w-1/2 p-6 flex flex-col ">
              <div>
                <h3 className="text-2xl md:text-3xl text-accent-primary mb-3 uppercase font-mtpalma">
                  {project.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bouton */}
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-accent-secondary text-black rounded-md transition-colors underline"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
      
      <Footer />
    </div>
  );
}
