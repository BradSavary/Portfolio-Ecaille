import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Avatar({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/avatar.webp" 
      alt="Avatar" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
