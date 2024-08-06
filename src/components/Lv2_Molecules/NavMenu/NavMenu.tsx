import { UText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";
import React from "react";
import { NavColor, NavMenuProp, NavText, NavWeight, TextSize } from "./@types";
import styles from "./NavMenu.module.scss";
const NavMenu: React.FC<NavMenuProp> = ({
  textAlign,
  size,
  color,
  weight,
  src,
  className,
  ...props
}) => {
  const navLinks = [
    { name: "Products", href: "/" },
    { name: "Solutions", href: "/" },
    { name: "Pricing", href: "/" },
    {
      name: "Resources",
      href: "/",
      src: "/assets/svgviewer-output (13).svg",
    },
  ];

  const colorVariants: Record<NavColor, string> = {
    "blue-gray-900": "font-blue-gray-900",
  };

  const weightVariants: Record<NavWeight, string> = {
    medium: "font-medium",
  };

  const textAlignVariants: Record<NavText, string> = {
    center: "text-center",
  };

  const textSizeVariants: Record<TextSize, string> = {
    base: "text-base",
  };

  const generalStyling = "display-flex gap-x-12";

  const classes = $cx(
    generalStyling,
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign],
    textSizeVariants[size],
    className
  );

  return (
    <div className={classes} {...props}>
      {navLinks.map((item, index) => (
        <a href={item.href} key={index} className={`${styles["nav-a"]}`}>
          <div className="display-flex items-center justify-center">
            <UText
              size={size}
              textAlign={textAlign}
              color={color}
              weight={weight}
            >
              {item.name}
            </UText>
            <div>
              {item.src && (
                <Image
                  src={item.src}
                  alt=""
                  width={24}
                  height={24}
                  className="pl-2"
                />
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NavMenu;
