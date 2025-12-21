import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function PinterestLogo({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/Pinterest.svg" 
      alt="Pinterest" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
