import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  color?: "green" | "orange" | "pink" | "white";
}

export default function Star({ width = 38, height = 38, className, color = "white" }: LogoProps) {
  return (
    <Image 
      src="/Star.svg" 
      alt="Star" 
      width={width} 
      height={height}
      color={color}
      className={className}
    />
  );
}
