import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Arrow({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/arrow.svg" 
      alt="Arrow" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
