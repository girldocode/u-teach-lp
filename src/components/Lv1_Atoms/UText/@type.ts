import { Color, HeadingTag } from "@/~type";

export type TextAs = HeadingTag | "p" | "span" | "strong";

export type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type fluidSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

export type TextLeading =
  | "normal"
  | "none"
  | "shorter"
  | "short"
  | "tall"
  | "taller";
export type TextTracking =
  | "normal"
  | "wide"
  | "wider"
  | "widest"
  | "tighter"
  | "tight";

export type TextWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TextStyle = "normal" | "italic";
export type clamp = "1" | "2" | "3" | "4" | "5" | "6" | "none";
export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";
export type TextDecor = "none" | "underline" | "line-through" | "overline";
export type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
export type offset = "0" | "1" | "2" | "4" | "8";

export type TextColor = Color;

export interface UTextProps {
  children?: React.ReactNode;
  color?: TextColor;
  fluidSize?: fluidSize;
  as?: TextAs;
  size?: FontSize;
  tracking?: TextTracking;
  weight?: TextWeight;
  style?: TextStyle;
  clamp?: clamp;
  textAlign?: TextAlign;
  textDecor?: TextDecor;
  textTransform?: TextTransform;
  offset?: offset;
  className?: string;
}
