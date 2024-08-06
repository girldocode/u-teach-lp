import { $cx } from "@/lib";
import {
  clamp,
  fluidSize,
  FontSize,
  offset,
  TextAlign,
  TextColor,
  TextDecor,
  TextStyle,
  TextTracking,
  TextTransform,
  TextWeight,
  UTextProps,
} from "./@type";
import styles from "./UText.module.scss";

const UText: React.FC<UTextProps> = ({
  children,
  as = "p",
  fluidSize,
  size,
  tracking = "normal",
  weight = "normal",
  style = "normal",
  clamp = "none",
  textAlign = "left",
  textDecor = "none",
  textTransform = "none",
  offset = "0",
  color = "blue-gray-600",
  className,
}) => {
  const Tag = as;

  // size
  const sizeVariants: Record<FontSize, string> = {
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

  // fluid size
  const fluidSizeVariants: Record<fluidSize, string> = {
    xs: "fluid-text-xs",
    sm: "fluid-text-sm",
    base: "fluid-text-base",
    lg: "fluid-text-lg",
    xl: "fluid-text-xl",
    "2xl": "fluid-text-2xl",
    "3xl": "fluid-text-3xl",
    "4xl": "fluid-text-4xl",
    "5xl": "fluid-text-5xl",
    "6xl": "fluid-text-6xl",
    "7xl": "fluid-text-7xl",
  };

  // letter spacing
  const trackingVariants: Record<TextTracking, string> = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  // text weight
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

  // text style
  const textStyleVariants: Record<TextStyle, string> = {
    normal: "font-normal",
    italic: "font-italic",
  };

  // clamp variants
  const clampVariants: Record<clamp, string> = {
    "1": "line-clamp-1",
    "2": "line-clamp-2",
    "3": "line-clamp-3",
    "4": "line-clamp-4",
    "5": "line-clamp-5",
    "6": "line-clamp-6",
    none: "none",
  };

  // text align
  const textAlignVariants: Record<TextAlign, string> = {
    left: "align-left",
    center: "align-center",
    right: "align-right",
    justify: "align-justify",
    start: "align-start",
    end: "align-end",
  };

  // text decoration
  const textDecorationVariants: Record<TextDecor, string> = {
    none: "decor-no-underline",
    underline: "decor-underline",
    overline: "decor-overline",
    "line-through": "decor-line-through",
  };

  // text transform
  const textTransformVariants: Record<TextTransform, string> = {
    none: "transform-normal-case",
    uppercase: "transform-uppercase",
    lowercase: "transform-lowercase",
    capitalize: "transform-capitalize",
  };

  // offset variants
  const offsetVariants: Record<offset, string> = {
    "0": "outline-offset-0",
    "1": "outline-offset-1",
    "2": "outline-offset-2",
    "4": "outline-offset-4",
    "8": "outline-offset-8",
  };

  // clamp

  // color variants
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
  const generalStyling = `${styles["font-fm"]} `;

  const classes = $cx(
    generalStyling,
    sizeVariants[size as keyof typeof sizeVariants],
    trackingVariants[tracking],
    weightVariants[weight],
    textStyleVariants[style],
    clampVariants[clamp],
    textAlignVariants[textAlign],
    textDecorationVariants[textDecor],
    textTransformVariants[textTransform],
    offsetVariants[offset],
    fluidSizeVariants[fluidSize as keyof typeof fluidSizeVariants],
    colorVariants[color],
    className
  );
  return <Tag className={classes}>{children}</Tag>;
};

export default UText;
