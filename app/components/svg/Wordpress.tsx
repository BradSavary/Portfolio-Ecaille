import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Wordpress({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/wordpress.svg" 
      alt="Wordpress" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
