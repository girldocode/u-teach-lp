"use client";

import { UButton, UText } from "@/components/Lv1_Atoms";
import { NavMenu, ULogo } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const generalStyles = `${styles["header-header-responsive"]} `;
  const classes = {
    general: $cx(generalStyles),
    btn: $cx(styles["header-buttons"], styles["header-buttons-responsive"]),
    atag: $cx(styles["header-mobile-menu-list-text-a"]),
  };

  return (
    <header className={classes.general}>
      <div className={styles["header-logo"]}>
        <ULogo
          variant="header"
          color="blue-gray-900"
          weight="bold"
          imageSrc="/assets/svgviewer-output (12).svg"
          imageWidth={28}
          imageHeight={28}
        >
          teach
        </ULogo>

        <div className={styles["header-nav-responsive"]}>
          <NavMenu
            color="blue-gray-900"
            textAlign="center"
            weight="medium"
            size="base"
          />
        </div>
      </div>

      <div className={classes.btn}>
        <div>
          <UText
            as="p"
            color="blue-gray-900"
            weight="medium"
            size="base"
            className="cursor-pointer items-center"
          >
            Log In
          </UText>
        </div>

        <div>
          <UButton
            variant="secondary"
            size="lg"
            weight="medium"
            color="blue-gray-900"
            textAlign="center"
          >
            Sign Up Now
          </UButton>
        </div>
      </div>

      {/* hamburger icon */}
      <div
        className={styles["header-hamburger-responsive"]}
        onClick={handleNavbar}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 8C3 7.58579 3.33579 7.25 3.75 7.25H20.25C20.6642 7.25 21 7.58579 21 8C21 8.41421 20.6642 8.75 20.25 8.75H3.75C3.33579 8.75 3 8.41421 3 8Z"
            fill="#0F172A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 12.5C3 12.0858 3.33579 11.75 3.75 11.75H20.25C20.6642 11.75 21 12.0858 21 12.5C21 12.9142 20.6642 13.25 20.25 13.25H3.75C3.33579 13.25 3 12.9142 3 12.5Z"
            fill="#0F172A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 17C3 16.5858 3.33579 16.25 3.75 16.25H20.25C20.6642 16.25 21 16.5858 21 17C21 17.4142 20.6642 17.75 20.25 17.75H3.75C3.33579 17.75 3 17.4142 3 17Z"
            fill="#0F172A"
          />
        </svg>
      </div>

      {/* Mobile Menu */}

      <div
        className={`${styles["header-mobile-menu-responsive"]} ${
          menuOpen ? styles["show"] : styles["hide"]
        } bg-orange-600 position-fixed top-0 right-0 h-full p-10 z-10`}
      >
        {/* button */}
        <div className="position-absolute top-2 right-2 ">
          <button
            className="cursor-pointer border-none border-2 bg-orange-600 color-white"
            onClick={handleNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,300,150"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        {/* menu */}
        <div className={styles["header-mobile-menu-list"]}>
          <ul className={styles["header-mobile-menu-list-text"]}>
            <a href="/" className={styles["header-mobile-menu-list-text-a"]}>
              <li>Products</li>
            </a>
            <a href="/" className={classes.atag}>
              <li>Solutions</li>
            </a>
            <a href="/" className={classes.atag}>
              <li>Pricing</li>
            </a>
            <a href="/" className={classes.atag}>
              <li>Resources</li>
            </a>
            <a href="/" className={classes.atag}>
              <li>Log In</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
