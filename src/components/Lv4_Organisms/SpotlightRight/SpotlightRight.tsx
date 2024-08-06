import { $cx } from "@/lib";
import Image from "next/image";
import orangeVector from "../../../../public/assets/svgviewer-output (021).svg";
import Card from "../../Lv3_Cells/Card/Card";
import work from "./../../../../public/assets/svgviewer-output (017).svg";
import people from "./../../../../public/assets/svgviewer-output (018).svg";
import girl from "./../../../../public/assets/svgviewer-output (019).svg";
import thumb from "./../../../../public/assets/svgviewer-output (020).svg";
import styles from "./SpotlightRight.module.scss";

const SpotlightRight = () => {
  const classes = {
    spotlight: $cx(styles.spotlight),
    container: $cx(styles.spotlight__container),
    upper: $cx(styles.spotlight__container__upper),
    lower: $cx(styles.spotlight__container__lower),
    card: $cx(styles.spotlight__container__upper__card),
    image: $cx(styles.spotlight__container__upper__image),
    imageSize: $cx(styles.spotlight__container__upper__image__size),
    image1: $cx(styles.spotlight__container__lower__image1),
    image1Size: $cx(styles.spotlight__container__lower__image1__size),
    image2: $cx(styles.spotlight__container__lower__image2),
    image2Size: $cx(styles.spotlight__container__lower__image2__size),
    vectorImg: $cx(styles.spotlight__container__vectorImg),
    vectorSize: $cx(styles.spotlight__container__vectorImg__size),
    thumb: $cx(styles.spotlight__container__upper__image__thumb),
    sizes: $cx(styles.spotlight__container__upper__image__thumb__sizes),
  };

  return (
    <div className={classes.spotlight}>
      <div className={classes.container}>
        <div className={classes.vectorImg}>
          <Image
            src={orangeVector}
            alt="orange vector"
            className={classes.vectorSize}
          />
        </div>
        <div className={classes.upper}>
          <Card
            title="Design for how people think"
            desc="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
            text="Popular"
            variant="blue"
            color="blue-800"
          />

          <div className={classes.image}>
            <Image src={work} alt="working" className={classes.imageSize} />
            <div className={classes.thumb}>
              <Image src={thumb} alt="thumb" className={classes.sizes} />
            </div>
          </div>
        </div>
        <div className={classes.lower}>
          <div className={classes.image1}>
            <Image src={people} alt="people" className={classes.image1Size} />
          </div>
          <div className={classes.image2}>
            <Image src={girl} alt="girl" className={classes.image2Size} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightRight;
