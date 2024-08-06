import { TagColor, TagVariant } from "@/components/Lv1_Atoms/UTag/@type";

export interface CardSingle {
  id: number;
  title: string;
  desc: string;
  text: string;
  variant: TagVariant;
  color: TagColor;
}

export type CardListProps = {
  data: CardSingle[];
};
