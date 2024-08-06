import { UButton, UText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";
import bubble from "../../../../public/assets/svgviewer-output (023).svg";
import round from "../../../../public/assets/svgviewer-output (024).svg";
import bubblesm from "../../../../public/assets/svgviewer-output (028).svg";
import roundsm from "../../../../public/assets/svgviewer-output (029).svg";
import styles from "./JoinLearning.module.scss";
const JoinLearning = () => {
  const classes = {
    join: $cx(styles.join),
    container: $cx(styles.join__container),
    textContainer: $cx(styles.join__container__textcontainer),
    title: $cx(styles.join__container__textcontainer__title),
    desc: $cx(styles.join__container__textcontainer__desc),
    description: $cx(styles.join__container__textcontainer__description),
    button: $cx(styles.join__container__textcontainer__button),
    bubble: $cx(styles.join__container__bubble),
    bubbleSize: $cx(styles.join__container__bubble__size),
    round: $cx(styles.join__container__round),
    roundSize: $cx(styles.join__container__round__size),
    bubblesm: $cx(styles.join__container__bubblesm),
    bubblesmSize: $cx(styles.join__container__bubblesm__size),
    roundsm: $cx(styles.join__container__roundsm),
    roundsmSize: $cx(styles.join__container__roundsm__size),
  };
  return (
    <section className={classes.join}>
      <div className={classes.container}>
        <div className={classes.bubble}>
          <Image src={bubble} alt="bubble" className={classes.bubbleSize} />
        </div>
        <div className={classes.bubblesm}>
          <Image
            src={bubblesm}
            alt="bubblesm"
            className={classes.bubblesmSize}
          />
        </div>
        <div className={classes.textContainer}>
          <UText
            weight="extrabold"
            color="blue-gray-900"
            className={classes.title}
            textAlign="center"
          >
            Join a world of learning
          </UText>

          <UText
            color="blue-gray-900"
            weight="normal"
            className={classes.desc}
            textAlign="center"
          >
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          </UText>
          <UText
            color="blue-gray-900"
            weight="normal"
            textAlign="center"
            className={classes.description}
          >
            Risus elit et fringilla habitant ut facilisi.
          </UText>
          <div className={classes.button}>
            <UButton
              variant="primary"
              size="2xl"
              weight="bold"
              color="white"
              textAlign="center"
            >
              Sign Up Now
            </UButton>
          </div>
        </div>
        <div className={classes.round}>
          <Image src={round} alt="round" className={classes.roundSize} />
        </div>
        <div className={classes.roundsm}>
          <Image src={roundsm} alt="roundsm" className={classes.roundsmSize} />
        </div>
      </div>
    </section>
  );
};

export default JoinLearning;
