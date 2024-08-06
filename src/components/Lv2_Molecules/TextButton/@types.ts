export type ButtonColor = "blue-600";
export type ButtonWeight = "medium";
export type ButtonText = "xl";
export type textAlign = "center";

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonText;
  className?: string;
  weight: ButtonWeight;
  color: ButtonColor;
  textAlign: textAlign;
}
