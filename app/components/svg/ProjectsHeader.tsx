import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  id?: string;
}

export default function ProjectsHeader({ width = 38, height = 38, className, id }: LogoProps) {
  return (
    <Image 
      src="/ProjectsHeader.svg" 
      alt="Projets" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
      id={id}
    />
  );
}
