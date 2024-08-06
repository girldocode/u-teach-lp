import Image from "next/image";
import UText from "../UText/UText";
import styles from "./UIcons.module.scss";

const UIcons = () => {
  const icons = [
    { src: "/assets/svgviewer-output (17).svg", alt: "Icon 1" },
    { src: "/assets/svgviewer-output (16).svg", alt: "Icon 2" },
    { src: "/assets/svgviewer-output (18).svg", alt: "Icon 3" },
    { src: "/assets/svgviewer-output (19).svg", alt: "Icon 4" },
    { src: "/assets/svgviewer-output (20).svg", alt: "Icon 5" },
  ];

  return (
    <div className={styles["icon__responsive"]}>
      <UText as="span" color="blue-gray-600" size="base" weight="normal">
        Trusted by leading companies
      </UText>

      <div className={styles["icon__responsive__list"]}>
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={25}
            height={25}
          />
        ))}
      </div>
    </div>
  );
};

export default UIcons;
