import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Tailwindcss({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/tailwindcss.svg" 
      alt="Tailwindcss" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
