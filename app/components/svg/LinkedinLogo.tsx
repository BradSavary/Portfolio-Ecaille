import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LinkedinLogo({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/Linkedin.svg" 
      alt="LinkedIn" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
