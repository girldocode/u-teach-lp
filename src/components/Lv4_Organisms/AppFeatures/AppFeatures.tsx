import { FeaturesLeft, FeaturesRight } from "@/components/Lv3_Cells";
import styles from "./AppFeatures.module.scss";

const AppFeatures = () => {
  return (
    <section className={styles.appFeatures}>
      <div className={styles["appFeatures__container"]}>
        <div className={styles["appFeatures__left"]}>
          <FeaturesLeft />
        </div>
        <div className={styles["appFeatures__right"]}>
          <FeaturesRight />
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
