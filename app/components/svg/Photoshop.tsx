import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Photoshop({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/photoshop.svg" 
      alt="Photoshop" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
