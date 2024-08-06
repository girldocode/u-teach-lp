import { footerData } from "@/app/data/app.data";
import { Beta, UText } from "@/components/Lv1_Atoms";
import { ULogo } from "@/components/Lv2_Molecules";
import Image from "next/image";
import arrow from "../../../../public/assets/svgviewer-output (030).svg";
import styles from "./UpperFooter.module.scss";

const UpperFooter = () => {
  return (
    <div className={styles.upperFooter}>
      <div className={styles.upperFooter__container}>
        <div className={styles.upperFooter__logo}>
          <ULogo
            variant="footer"
            weight="bold"
            color="white"
            imageSrc="/assets/svgviewer-output (12).svg"
            imageWidth={28}
            imageHeight={28}
          >
            teach
          </ULogo>
        </div>

        <div className={styles.upperFooter__sections}>
          {footerData.map((section, index) => (
            <div key={index} className={styles.upperFooter__section}>
              <UText
                color="white"
                weight="medium"
                className={styles.upperFooter__section__title}
              >
                {section.title}
              </UText>
              <ul className={styles.upperFooter__section__list}>
                {section.content.map((item, idx) => (
                  <li key={idx} className={styles.upperFooter__item}>
                    <UText
                      color="white"
                      weight="normal"
                      className={styles.upperFooter__item__text}
                    >
                      {item.text}
                    </UText>
                    {item.isBeta && <Beta />}
                    {item.hasIcon && (
                      <span className={styles.upperFooter__item__icon}>
                        <Image src={arrow} alt={`${item.text} icon`} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
