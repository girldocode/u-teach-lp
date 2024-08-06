import {
  fluidSize,
  FontSize,
  TextAlign,
} from "@/components/Lv1_Atoms/UText/@type";

export type SectionTitleProps = {
  textAlign?: TextAlign;
  size?: FontSize;
  fluidSize?: fluidSize;
  title: string;
  desc?: string;
  titleClass?: string;
  descClass?: string;
};
