import { Color } from "@/~type";

export type TagVariant = "purple" | "blue" | "green";
export type TagColor = Color;
export type TagWeight = "normal";
export type TagText = "sm";
export type TagtextAlign = "left" | "center";

export interface TagProps {
  children: React.ReactNode;
  size?: TagText;
  variant: TagVariant;
  className?: string;
  weight: TagWeight;
  color: TagColor;
  textAlign?: TagtextAlign;
}
