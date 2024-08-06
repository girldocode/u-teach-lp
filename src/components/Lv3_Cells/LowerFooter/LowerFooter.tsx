import { UText } from "@/components/Lv1_Atoms";
import Image from "next/image";
import styles from "./LowerFooter.module.scss";

const footerItems = [
  { text: "Terms", icon: null },
  { text: "Privacy", icon: null },
  { text: "Contact", icon: null },
  { text: "EN", icon: "/assets/svgviewer-output (031).svg" },
  { text: "EUR", icon: "/assets/svgviewer-output (032).svg" },
  { text: null, icon: "/assets/svgviewer-output (033).svg" },
];

const LowerFooter = () => {
  return (
    <div className={styles.lowerFooter}>
      <div className={styles.lowerFooter__container}>
        <div className={styles.lowerFooter__left}>
          <UText
            weight="normal"
            color="white"
            className={styles.lowerFooter__left__text}
          >
            Uteach @ 2023. All rights reserved.
          </UText>
        </div>
        <div className={styles.lowerFooter__right}>
          {footerItems.map((item, index) => (
            <div key={index} className={styles.lowerFooter__item}>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={`${item.text || "icon"} icon`}
                  width={24}
                  height={24}
                  className={styles.lowerFooter__icon}
                />
              )}
              {item.text && (
                <UText
                  weight="normal"
                  color="white"
                  size="base"
                  className={styles.lowerFooter__utext}
                >
                  {item.text}
                </UText>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
