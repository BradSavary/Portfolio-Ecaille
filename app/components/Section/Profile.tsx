
import Avatar  from "../svg/Avatar";
import Star from "../svg/Star";

export default function Profile() {
  return (
    <section className="py-25 px-6 md:px-12 lg:px-20 w-full flex bg-grid">
      <div className="w-full lg:w-2/3 max-w-fit">
      <div className="p-6 border ">
        <div className="flex gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-mtpalma">Salut !</h2>
          <Star color="orange" className="w-16" />
        </div>
        <p className="text-4xl md:text-5xl lg:text-7xl font-mtpalma">
          Moi c'est <span className="text-accent-primary">Ecaille</span>
        </p>

      </div>
      <div className="flex items-center gap-4 pt-8 ">
        <Star className="w-12" color="pink"/>
        <p className="text-5xl">Alias <span className="text-accent-primary">Eloïse Marien</span></p>
      </div>
      <p className="max-w-75 pt-5">Je suis graphiste basée a Limoges, enchanté de faire votre connaissance !</p>
      <div className="mt-15 flex items-center gap-4">
        <div className="w-2/3 h-0.5 bg-accent-tertiary"></div>
        <Star color="pink"/>
      </div>
      <p className="pt-4">Je suis une étudiante de 20 ans, actuellement en 3ème année de BUT Métiers du Multimédia et de l'Internet (MMI) à Limoges. 
      Je suis passionnée par de nombreuses formes d'expression artistique, comme le dessin (traditionnel et digital), scrapbooking, peinture, stylisme, et plus particulièrement le théâtre avec 6 ans de pratique à mon actif ! Je suis également une grande lectrice et amatrice de jeux vidéos.
      </p>
      </div>
      <Avatar className="lg:block hidden w-1/3 min-w-98" />
    </section>
  );
}
