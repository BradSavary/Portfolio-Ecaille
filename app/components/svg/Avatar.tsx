import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Avatar({ width = 500, height = 500, className }: LogoProps) {
  return (
    <Image 
      src="/avatar.png" 
      alt="Avatar" 
      width={width} 
      height={height}
      className={className}
      unoptimized={true}
      draggable={false}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
