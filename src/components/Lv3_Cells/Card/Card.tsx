import { UButton, UTag, UText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import { CardProps } from "./@type";
import styles from "./Card.module.scss";

const Card: React.FC<CardProps> = ({ title, desc, text, variant, color }) => {
  const classes = {
    titleSize: $cx(styles["text__title"]),
    descSize: $cx(styles["text__desc"]),
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <div>
          {" "}
          <UTag
            variant={variant}
            weight="normal"
            size="sm"
            color={color}
            textAlign="center"
          >
            {text}
          </UTag>
        </div>
        <div>
          <UText
            weight="medium"
            color="blue-gray-900"
            className={classes.titleSize}
          >
            {title}
          </UText>
          <UText
            weight="normal"
            color="blue-gray-600"
            className={classes.descSize}
          >
            {desc}
          </UText>
        </div>
        <div>
          {" "}
          <UButton
            variant="outlineButton"
            size="lg"
            weight="medium"
            color="blue-600"
            textAlign="center"
          >
            Take Lesson
          </UButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
