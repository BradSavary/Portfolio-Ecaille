import Star from "./svg/Star";

interface SectionTitleProps {
  title: string;
  starColor?: "white" | "green" | "orange" | "pink";
  borderColor?: "secondary" | "primary" | "tertiary" | "black";
  starClassName?: string;
  textClassName?: string;
  containerClassName?: string;
}

const borderColorMap = {
  secondary: "border-accent-secondary",
  primary: "border-accent-primary",
  tertiary: "border-accent-tertiary",
  black: "border-foreground"
};

export default function SectionTitle({ 
  title, 
  starColor = "white",
  borderColor = "secondary",
  starClassName = "w-8 md:w-12 lg:w-15",
  textClassName = "text-4xl md:text-5xl lg:text-7xl font-mtpalma",
  containerClassName
}: SectionTitleProps) {
  const defaultContainerClass = `flex items-center gap-2 p-4 md:p-5 lg:p-6 ${borderColorMap[borderColor]} border-1 max-w-fit`;
  
  return (
    <div className={containerClassName || defaultContainerClass}>
      <Star className={starClassName} color={starColor} />
      <h2 className={textClassName}>{title}</h2>
    </div>
  );
}
