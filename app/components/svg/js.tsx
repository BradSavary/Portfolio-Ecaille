import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Js({ width = 38, height = 38, className }: LogoProps) {
  return (
    <Image 
      src="/js.svg" 
      alt="Js" 
      width={width} 
      height={height}
      className={className}
      draggable="false"
    />
  );
}
