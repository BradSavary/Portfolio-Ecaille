
import Avatar  from "../svg/Avatar";
import Star from "../svg/Star";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="py-25 px-6 md:px-12 lg:px-20 w-full flex gap-6 bg-grid">
      <div className="w-full lg:w-2/3 max-w-fit shrink-0 lg:max-w-3xl">
      <div className="p-6 border max-w-2xl">
        <div className="flex gap-4 ">
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
      <p className=" pt-5">Je suis graphiste basée a Limoges, enchantée de faire votre connaissance !</p>
      <div className="mt-15 flex items-center gap-4">
        <div className="w-2/3 h-0.5 bg-accent-tertiary"></div>
        <Star color="pink"/>
      </div>
      <p className="pt-4">Diplômée bac+3 en graphisme et webdesign (BUT Métiers du Multimédia et de l'Internet). Je suis passionnée par de nombreuses formes d'expression artistique, comme le dessin (traditionnel et digital), scrapbooking, peinture, et plus particulièrement le théâtre avec 6 ans de pratique à mon actif ! Je suis également une grande lectrice et amatrice de jeux vidéos.
      </p>
            {/* Bouton */}
              <div className="pt-6">
                <Link
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button inline-block px-6 py-3 bg-accent-secondary text-black rounded-md relative overflow-hidden"
                  >
                    <span className="relative z-10">Voir mon CV</span>
                  </Link>
              </div>
      </div>
      <div className="lg:block hidden w-full shrink self-end">
        <Avatar className="w-full h-auto max-w-3xl justify-self-end" />
      </div>
    </section>
  );
}
