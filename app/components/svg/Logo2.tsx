import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo2({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/Logo2.svg" 
      alt="Logo2" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
