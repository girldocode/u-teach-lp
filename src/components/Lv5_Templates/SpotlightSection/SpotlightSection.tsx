import { SpotlightLeft } from "@/components/Lv3_Cells";
import { SpotlightRight } from "@/components/Lv4_Organisms";
import { $cx } from "@/lib";
import styles from "./SpotlightSection.module.scss";
const SpotlightSection = () => {
  const classes = {
    section: $cx(styles["section"]),
    container: $cx(styles["section__container"]),
    left: $cx(styles["section__container__left"]),
    right: $cx(styles["section__container__right"]),
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <SpotlightLeft />
        </div>
        <div className={classes.right}>
          <SpotlightRight />
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;

