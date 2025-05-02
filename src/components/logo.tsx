import { cn } from "@/lib/utils";

interface ILogoProps {
  white?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  showText?: boolean;
}

const Logo = ({
  white = false,
  width = 100,
  height = 79,
  fontSize,
  showText = true,
}: ILogoProps) => {
  const logoUrl = white ? "/white-logo.svg" : "/logo.svg";

  return (
    <div
      className={cn(
        "flex items-center gap-x-2  font-bold",
        white ? "text-white" : "text-[#FA7275]",
        !fontSize && "text-4xl"
      )}
      style={{ fontSize }}
    >
      <img src={logoUrl} alt="Logo" width={width} height={height} />
      {showText && "Frontend Task"}
    </div>
  );
};

export default Logo;
