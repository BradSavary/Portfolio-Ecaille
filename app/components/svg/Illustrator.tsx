import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Illustrator({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/illustrator.svg" 
      alt="Illustrator" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
