import { $cx } from "@/lib";
import Image from "next/image";
import React from "react";
import UText from "../../Lv1_Atoms/UText/UText";
import {
  LogoColor,
  LogoProps,
  LogoText,
  LogoVariant,
  LogoWeight,
} from "./@types";
import styles from "./ULogo.module.scss";
const ULogo: React.FC<LogoProps> = ({
  children,
  textAlign,
  color,
  weight,
  variant,
  className,
  imageSrc,
  imageWidth,
  imageHeight,

  ...props
}) => {
  //  variant styles
  const variantStyles: Record<LogoVariant, string> = {
    header: "",
    footer: "",
  };

  // Define color styles
  const colorVariants: Record<LogoColor, string> = {
    "blue-gray-900": "font-blue-gray-900",
    white: " font-white",
  };

  // text weight
  const weightVariants: Record<LogoWeight, string> = {
    bold: "font-bold",
  };

  // text align

  const textAlignVariants: Record<LogoText, string> = {
    center: "align-center",
  };

  const generalStyling = `${styles["logo-size"]} display-flex align-center `;

  // Combine classes
  const classes = $cx(
    generalStyling,
    variantStyles[variant], // Variant-specific styles
    colorVariants[color], // Color-specific styles
    weightVariants[weight], // Weight-specific styles
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className // Additional classes
  );

  return (
    <div className={classes} {...props}>
      <Image
        src={imageSrc}
        alt="logo"
        width={imageWidth}
        height={imageHeight}
      />
      <UText color={color} weight={weight}>
        {children}
      </UText>
    </div>
  );
};

export default ULogo;
