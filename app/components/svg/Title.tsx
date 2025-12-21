import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Title({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/title.svg" 
      alt="Title" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
