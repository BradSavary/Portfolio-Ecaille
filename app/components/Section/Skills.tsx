import Star from "../svg/Star";
import Illustrator from "../svg/Illustrator";
import Photoshop from "../svg/Photoshop";
import Indesign from "../svg/Indesign";
import Aftereffect from "../svg/Aftereffect";

import Js from "../svg/js";
import Tailwindcss from "../svg/tailwindcss";
import Wordpress from "../svg/Wordpress";
import Html from "../svg/html";

export default function Skills() {
  return (
    <section className="py-25 px-6 md:px-12 lg:px-20 w-full flex bg-grid flex-col">
        <div className="p-6 border w-fit">
              <div className="flex gap-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-mtpalma">Les outils</h2>
                <Star color="pink" className="w-16" />
              </div>
              <p className="text-4xl md:text-5xl lg:text-7xl font-mtpalma">
                Que j'utilise
              </p>
            </div>
            <div className="flex flex-row pt-20 justify-between items-center w-full max-w-6xl self-center">
            <div className="grid grid-cols-2 h-fit">
              <Photoshop className="w-16 md:w-24 lg:w-32"/>
              <Illustrator className="w-16 md:w-24 lg:w-32"/>
              <Indesign className="w-16 md:w-24 lg:w-32"/>
              <Aftereffect className="w-16 md:w-24 lg:w-32"/>
            </div>
          <Star color="pink" className="md:w-24" />
            <div className="grid grid-cols-2 h-fit">
              <Html className="w-16 md:w-24 lg:w-32" />
              <Wordpress className="w-16 md:w-24 lg:w-32" />
              <Tailwindcss className="w-16 md:w-24 lg:w-32" />
              <Js className="w-16 md:w-24 lg:w-32" />
            </div>
            </div>
    </section>
  );
}
