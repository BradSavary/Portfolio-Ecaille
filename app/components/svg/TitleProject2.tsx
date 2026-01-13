import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function TitleProject2({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/titleProject2.svg" 
      alt="Title Project 2" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
    />
  );
}
