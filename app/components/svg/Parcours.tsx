import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ParcoursSVG({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/parcours.svg" 
      alt="Parcours" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
