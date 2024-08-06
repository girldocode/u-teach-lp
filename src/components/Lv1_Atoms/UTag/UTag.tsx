import { $cx } from "@/lib";
import React from "react";
import { TextColor } from "../UText/@type";
import UText from "../UText/UText";
import {
  TagProps,
  TagText,
  TagtextAlign,
  TagVariant,
  TagWeight,
} from "./@type";
import styles from "./UTag.module.scss";
const UTag: React.FC<TagProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  variant,
  className,
  ...props
}) => {
  const variantStyles: Record<TagVariant, string> = {
    purple: `${styles["tag-w-purple"]} bg-purple-100`,
    blue: `${styles["tag-w-blue"]} bg-blue-100`,
    green: `${styles["tag-w-green"]} bg-green-100`,
  };

  const TextVariants: Record<TagText, string> = {
    sm: "font-sm",
  };

  const colorVariants: Record<TextColor, string> = {
    "blue-gray-900": "font-blue-gray-900",
    "orange-600": "font-orange-600",
    white: " font-white",
    "yellow-400": "font-yellow-400",
    "blue-600": "font-blue-600",
    "blue-100": " font-blue-100",
    "blue-800": "font-blue-800",
    "blue-gray-600": "font-blue-gray-600",
    "purple-100": "font-purple-100",
    "purple-800": "font-purple-800",
    "green-100": "font-green-100",
    "green-800": "font-green-800",
    "orange-400": "font-orange-400",
    "blue-gray-200": " font-blue-gray-200",
    "blue-gray-700": "font-blue-gray-700",
  };

  const weightVariants: Record<TagWeight, string> = {
    normal: "font-normal",
  };

  const textAlignVariants: Record<TagtextAlign, string> = {
    left: "align-left",
    center: "align-center",
  };

  const generalStyling = "cursor-pointer py-1 px-1 border-rounded";

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    variantStyles[variant as keyof typeof variantStyles],
    colorVariants[color as keyof typeof colorVariants],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <div className={classes} {...props}>
      <UText color={color} weight={weight} size={size} textAlign={textAlign}>
        {children}
      </UText>
    </div>
  );
};

export default UTag;
