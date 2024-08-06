import { $cx } from "@/lib";
import React from "react";
import UText from "../../Lv1_Atoms/UText/UText";
import {
  ButtonColor,
  ButtonProps,
  ButtonText,
  ButtonWeight,
  textAlign,
} from "./@types";
import styles from "./TextButton.module.scss";
const TextButton: React.FC<ButtonProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  className,
  ...props
}) => {
  const TextVariants: Record<ButtonText, string> = {
    xl: styles["font-xl"],
  };

  const colorVariants: Record<ButtonColor, string> = {
    "blue-600": "font-blue-600",
  };

  const weightVariants: Record<ButtonWeight, string> = {
    medium: "font-medium",
  };

  const textAlignVariants: Record<textAlign, string> = {
    center: "align-center",
  };

  const generalStyling =
    "border-none cursor-pointer focus:outline-none bg-white  ";

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <button className={classes} {...props}>
      <UText color={color} weight={weight} size={size} textAlign={textAlign}>
        {children}
      </UText>
    </button>
  );
};

export default TextButton;
