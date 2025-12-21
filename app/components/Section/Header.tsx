import Thumbnail from "../img/thumbnail";
import Title from "../svg/Title";

export default function Header() {
  return (
    <header className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden border-b-30 border-accent-primary">
      <Thumbnail className="absolute inset-0 w-full h-full object-cover z-0"/>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Title className="w-80 md:w-lg" />
      </div>
    </header>
  );
}
