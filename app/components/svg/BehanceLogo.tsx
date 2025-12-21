import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BehanceLogo({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/behance.svg" 
      alt="Behance" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
