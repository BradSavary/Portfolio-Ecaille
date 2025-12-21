import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/Logo.svg" 
      alt="Logo" 
      width={width} 
      height={height}
      className={className}
    />
  );
}
