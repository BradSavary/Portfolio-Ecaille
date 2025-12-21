import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function InstagramLogo({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/instagram.png" 
      alt="Instagram" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
