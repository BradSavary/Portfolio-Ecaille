interface LogoProps {
  className?: string;
  color?: "green" | "orange" | "pink" | "white";
}

const colorMap = {
  green: "#87FF0F",
  orange: "#FF5E00",
  pink: "#FF62B3",
  white: "#FEFAEF"
};

export default function Star({ className, color = "white" }: LogoProps) {
  const fillColor = colorMap[color];
  
  return (
    <svg 
      viewBox="0 0 48 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M24 0L26.885 31.6725L48 36L26.885 40.3275L24 72L21.115 40.3275L0 36L21.115 31.6725L24 0Z" 
        fill={fillColor}
      />
    </svg>
  );
}
