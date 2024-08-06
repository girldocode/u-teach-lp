import { Color } from "@/~type";
import { FontSize, TextAlign, TextWeight } from "../UText/@type";

export type ButtonVariant = "primary" | "secondary" | "outlineButton";
export type ButtonColor = Color;
export type ButtonWeight = TextWeight;
export type ButtonText = FontSize;
export type textAlign = TextAlign;
export type ButtonWidth = "full" | "auto" | "fit" | "min" | "max";

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonText;
  variant: ButtonVariant;
  className?: string;
  weight: ButtonWeight;
  color: ButtonColor;
  textAlign: textAlign;
}
