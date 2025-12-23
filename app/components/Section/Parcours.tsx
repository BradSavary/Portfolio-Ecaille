import SectionTitle from "../SectionTitle";
import ParcoursSVG  from "../svg/Parcours";


export default function Parcours() {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 relative">
      <ParcoursSVG className="absolute inset-0 w-full h-full object-cover z-0" />
      <SectionTitle title="Mon parcours" starColor="pink" borderColor="black" containerClassName=""/>
    </section>
  );
}
