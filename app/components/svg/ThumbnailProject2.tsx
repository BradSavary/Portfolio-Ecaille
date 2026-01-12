import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ThumbnailProject2({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/thumbnailproject2.webp" 
      alt="Thumbnail Project 2" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
    />
  );
}
