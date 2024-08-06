import { Boxdata } from "@/app/data/app.data";

import { Box } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import styles from "./UserStats.module.scss";

const UserStats = () => {
  const classes = {
    boxList: $cx(styles.boxList),
    boxContent: $cx(styles.boxList__boxContent),
  };

  return (
    <div className={styles.boxList}>
      <div className={classes.boxContent}>
        {Boxdata.map((data) => (
          <Box
            key={data.id}
            imageSrc={data.imageSrc}
            altText={data.altText}
            number={data.number}
            label={data.label}
          />
        ))}
      </div>
    </div>
  );
};

export default UserStats;
