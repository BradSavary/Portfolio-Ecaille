import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Aftereffect({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/aftereffect.svg" 
      alt="Aftereffect" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
