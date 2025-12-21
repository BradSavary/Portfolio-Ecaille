import Image from "next/image";

interface ImgProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Thumbnail({ width = 38, height = 38, className}: ImgProps) {
  return (
    <Image 
      src="/thumbnail.webp" 
      alt="thumbnail" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
    />

  );
}