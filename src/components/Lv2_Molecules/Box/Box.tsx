import { UText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";
import { BoxProps } from "./@types";
import styles from "./Box.module.scss";

const Box: React.FC<BoxProps> = ({ imageSrc, altText, number, label }) => {
  const classes = {
    box: $cx(styles.box),
    content: $cx(styles.box__content),
    image: $cx(styles.box__content__image),
    sizes: $cx(styles.box__content__image__sizes),
    number: $cx(styles.box__content__number),
    label: $cx(styles.box__content__label),
  };

  return (
    <div className={classes.box}>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image
            src={imageSrc}
            alt={altText}
            className={classes.sizes}
            width={64}
            height={64}
          />
        </div>
        <div className={classes.number}>
          <UText color="yellow-400" weight="extrabold" size="7xl">
            {number}
          </UText>
        </div>
        <div className={classes.label}>
          <UText weight="normal" color="yellow-400" size="2xl">
            {label}
          </UText>
        </div>
      </div>
    </div>
  );
};

export default Box;
