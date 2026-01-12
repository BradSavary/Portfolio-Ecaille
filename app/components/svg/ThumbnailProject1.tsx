import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ThumbnailProject1({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/thumbnailproject1.webp" 
      alt="Thumbnail Project 1" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
    />
  );
}
