import UText from "../UText/UText";
import styles from "./Beta.module.scss";

const Beta = () => {
  return (
    <div className={styles.container}>
      <div>
        <UText
          weight="normal"
          color="purple-800"
          className={styles.container__beta}
        >
          BETA
        </UText>
      </div>
    </div>
  );
};

export default Beta;
