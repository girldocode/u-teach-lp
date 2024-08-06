import { TagColor, TagVariant } from "@/components/Lv1_Atoms/UTag/@type";
import {
  fluidSize,
  FontSize,
  TextAlign,
} from "@/components/Lv1_Atoms/UText/@type";

export type CardProps = {
  textAlign?: TextAlign;
  size?: FontSize;
  fluidSize?: fluidSize;
  title?: string;
  desc?: string;
  text?: string;
  titleClass?: string;
  descClass?: string;
  variant: TagVariant;
  color: TagColor;
};
