import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function TitleProject1({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/TitleProject1.webp" 
      alt="Title Project 1" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
    />
  );
}
