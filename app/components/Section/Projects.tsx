import SectionTitle from "../SectionTitle";
import Star from "../svg/Star";
import TitleProject1 from "../svg/TitleProject1";
import TitleProject2 from "../svg/TitleProject2";
import Link from "next/link";

export default function Projects() {
  return (
    <section className=" py-10 px-6 md:px-12 lg:px-20 bg-grid" >
      <SectionTitle title="Mes projets phares" starColor="pink" borderColor="black"/>
      {/* Add project cards here*/}
      <div className="flex flex-row gap-2 justify-center mt-15">
        <div className="border p-40"><TitleProject1 className="w-40"/></div>
        <div className="border p-40"><TitleProject2 className="w-40"/></div>
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
