import Star from "./svg/Star";

interface SectionTitleProps {
  title: string;
  starColor?: "white" | "green" | "orange" | "pink";
  starClassName?: string;
  textClassName?: string;
  containerClassName?: string;
}

export default function SectionTitle({ 
  title, 
  starColor = "white", 
  starClassName = "w-8 md:w-12 lg:w-15",
  textClassName = "text-4xl md:text-5xl lg:text-7xl font-mtpalma",
  containerClassName = "flex items-center gap-2 p-4 md:p-5 lg:p-6 border-accent-secondary border-2 max-w-fit"
}: SectionTitleProps) {
  return (
    <div className={containerClassName}>
      <Star className={starClassName} color={starColor} />
      <h2 className={textClassName}>{title}</h2>
    </div>
  );
}
