import { UText } from "@/components/Lv1_Atoms";
import React from "react";
import { SectionTitleProps } from "./@types";
import styles from "./SectionTitle.module.scss";

const SectionTitle: React.FC<SectionTitleProps> = ({
  fluidSize,
  title,

  desc,
  textAlign,
  titleClass = "",
  descClass = "",
}) => {
  const titleSize = `${styles["text__title--responsive"]} ${titleClass}`;
  const descSize = `${styles["text__desc--responsive"]} ${descClass}`;

  return (
    <div className={styles.text}>
      <UText
        as="h1"
        color="blue-gray-900"
        textAlign={textAlign}
        weight="extrabold"
        fluidSize={fluidSize}
        className={titleSize}
      >
        {title}
      </UText>
      <UText
        as="p"
        textAlign={textAlign}
        fluidSize={fluidSize}
        color="blue-gray-900"
        weight="normal"
        className={descSize}
      >
        {desc}
      </UText>
    </div>
  );
};

export default SectionTitle;
