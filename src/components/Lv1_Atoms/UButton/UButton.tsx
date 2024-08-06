import { $cx } from "@/lib";
import React from "react";
import { TextColor, TextWeight } from "../UText/@type";
import UText from "../UText/UText";
import { ButtonProps, ButtonText, ButtonVariant, textAlign } from "./@types";
import styles from "./UButton.module.scss";

const UButton: React.FC<ButtonProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  variant,
  className,
  ...props
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    primary: `${styles["button__primary"]}`,
    secondary:
      "px-3 py-3 border-2 border-solid border-blue-gray-900 w-40 bg-white",
    outlineButton: `${styles["button__outline"]}`,
  };

  const TextVariants: Record<ButtonText, string> = {
    xs: "font-xs",
    sm: "font-sm",
    base: "font-base",
    lg: "font-lg",
    xl: "font-xl",
    "2xl": "font-2xl",
    "3xl": "font-3xl",
    "4xl": "font-4xl",
    "5xl": "font-5xl",
    "6xl": "font-6xl",
    "7xl": "font-7xl",
    "8xl": "font-8xl",
    "9xl": "font-8xl",
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

  const weightVariants: Record<TextWeight, string> = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "black",
  };

  const textAlignVariants: Record<textAlign, string> = {
    left: "align-left",
    center: "align-center",
    right: "align-right",
    justify: "align-justify",
    start: "align-start",
    end: "align-end",
  };

  const generalStyling = "border-lg border-none border-2  cursor-pointer";

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    variantStyles[variant],
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

export default UButton;
