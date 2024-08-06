export type NavColor = "blue-gray-900";
export type NavWeight = "medium";
export type NavText = "center";
export type TextSize = "base";

export interface NavMenuProp {
  children?: React.ReactNode;
  className?: string;
  weight: NavWeight;
  size: TextSize;
  color: NavColor;
  textAlign: NavText;
  src?: string;
  imageWidth?: number;
  imageHeight?: number;
}
