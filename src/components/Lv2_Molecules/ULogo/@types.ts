
export type LogoVariant = "header" | "footer";
export type LogoColor = "blue-gray-900" | "white";
export type LogoWeight = "bold";
export type LogoText = "center";

export interface LogoProps {
  children: React.ReactNode;
  variant: LogoVariant;
  className?: string;
  weight: LogoWeight;
  color: LogoColor;
  textAlign?: LogoText;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
}
