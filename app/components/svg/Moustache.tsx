import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Moustache({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/Moustache.svg" 
      alt="Moustache" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
