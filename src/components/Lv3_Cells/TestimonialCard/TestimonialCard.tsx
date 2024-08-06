import { UText } from "@/components/Lv1_Atoms";
import { UAvatar } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import { TestimonialCardProps } from "./@types";
import styles from "./TestimonialCard.module.scss";
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  desc,
  imageUrl,
  name,
  tagline,
}) => {
  const classes = {
    testimonialCard: $cx(styles.testimonialCard),
    content: $cx(styles.testimonialCard__content),
    avatar: $cx(styles.testimonialCard__content__avatar),
    desc: $cx(styles.testimonialCard__content__desc),
  };

  return (
    <div className={classes.testimonialCard}>
      <div className={classes.content}>
        <div className={classes.desc}>
          <UText as="p" weight="normal" color="blue-gray-900">
            {" "}
            {desc}
          </UText>
        </div>
        <div className={classes.avatar}>
          <UAvatar imageUrl={imageUrl} name={name} tagline={tagline} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
