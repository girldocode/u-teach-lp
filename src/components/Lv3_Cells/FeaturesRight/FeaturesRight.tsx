import { cardsData } from "@/app/data/app.data";
import { $cx } from "@/lib";
import Image from "next/image";
import play from "../../../../public/assets/svgviewer-output (007).svg";
import circle from "../../../../public/assets/svgviewer-output (008).svg";
import dots from "../../../../public/assets/svgviewer-output (009).svg";
import CardList from "../CardList/CardList";
import styles from "./FeaturesRight.module.scss";

const classes = {
  container: $cx(styles.featureContainer),
  right: $cx(styles.featureContainer__right),
  img: $cx(styles.featureContainer__right__img),
  cardList: $cx(styles.featureContainer__right__cardList),
  imgSize: $cx(styles.featureContainer__right__img__size),
  circleImg: $cx(styles.featureContainer__right__circleImg),
  sizing: $cx(styles.featureContainer__right__circleImg__sizing),
  dots: $cx(styles.featureContainer__right__dots),
  dotsize: $cx(styles.featureContainer__right__dots__size),
};

const FeaturesRight = () => {
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        {/* Circle image */}
        <div className={classes.circleImg}>
          <Image src={circle} alt="circle" className={classes.sizing} />
        </div>
        {/* dots image */}
        <div className={classes.dots}>
          <Image src={dots} alt="circle" className={classes.dotsize} />
        </div>

        {/* Play image */}
        <div className={classes.img}>
          <Image src={play} alt="Play" className={classes.imgSize} />
        </div>

        {/* Card List */}
        <div className={classes.cardList}>
          <CardList data={cardsData} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesRight;
