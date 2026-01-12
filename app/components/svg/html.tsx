import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Html({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/htmlcss.svg" 
      alt="Html" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
