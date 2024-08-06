import { UButton, UIcons } from "@/components/Lv1_Atoms";
import { SectionTitle, TextButton } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import Image from "next/image";
import heroImg from "../../../../public/assets/svgviewer-output (21).svg";
import vector from "../../../../public/assets/svgviewer-output (22).svg";
import style from "./../../Lv2_Molecules/SectionTitle/SectionTitle.module.scss";
import styles from "./Hero.module.scss";
const Hero = () => {
  const generalStyles = `${styles["hero__section--responsive"]}`;
  const classes = {
    general: $cx(generalStyles),
    left: $cx(styles["hero__section--responsive__left"]),
    right: $cx(styles["hero__section--responsive__right--lg"]),
    icons: $cx(styles["hero__section--responsive__left--icons"]),
    SectionTitle: $cx(styles["hero__section--responsive__left--sectionTitle"]),
    rightImg: $cx(styles["hero__section--responsive__right--sm"]),
  };

  return (
    <section className={classes.general}>
      {/* left hero section */}
      <div className={classes.left}>
        <div className={classes.SectionTitle}>
          <SectionTitle
            title="Teach students worldwide"
            desc="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
            textAlign="left"
            titleClass={style["text__title--hero"]}
            descClass={style["text__desc--hero"]}
          />
        </div>

        {/* buttons */}
        <div className="display-flex gap-x-4 items-center mt-8">
          <UButton
            variant="primary"
            size="2xl"
            weight="bold"
            color="white"
            textAlign="center"
          >
            Sign Up Now
          </UButton>

          <TextButton
            color="blue-600"
            textAlign="center"
            weight="medium"
            size="xl"
            className={styles.textBtn}
          >
            <span
              className={`display-flex items-center gap-x-4 ${styles.txtBtn}`}
            >
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22.2662C6.477 22.2662 2 17.7892 2 12.2662C2 6.74317 6.477 2.26617 12 2.26617C17.523 2.26617 22 6.74317 22 12.2662C22 17.7892 17.523 22.2662 12 22.2662ZM12 20.2662C14.1217 20.2662 16.1566 19.4233 17.6569 17.923C19.1571 16.4227 20 14.3879 20 12.2662C20 10.1444 19.1571 8.10961 17.6569 6.60932C16.1566 5.10903 14.1217 4.26617 12 4.26617C9.87827 4.26617 7.84344 5.10903 6.34315 6.60932C4.84285 8.10961 4 10.1444 4 12.2662C4 14.3879 4.84285 16.4227 6.34315 17.923C7.84344 19.4233 9.87827 20.2662 12 20.2662ZM16.126 14.0122L12.071 16.9102C11.166 17.5562 9.941 17.2992 9.334 16.3342C9.11494 15.9833 8.99918 15.5778 9 15.1642V9.36817C9 8.20817 9.883 7.26617 10.972 7.26617C11.363 7.26617 11.746 7.39017 12.071 7.62217L16.126 10.5202C17.031 11.1672 17.272 12.4722 16.666 13.4372C16.5251 13.6621 16.3417 13.8574 16.126 14.0122ZM10.972 9.36817V15.1642L15.027 12.2662L10.972 9.36817Z"
                  fill="#2563EB"
                />
              </svg>
              View Demo
            </span>
          </TextButton>
        </div>

        {/* icons */}
        <div className={classes.icons}>
          <UIcons />
        </div>
      </div>

      {/* large screens */}
      <div className={classes.right}>
        <Image
          src={heroImg}
          alt="Hero Image"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      {/* small screens */}
      <div className={classes.rightImg}>
        <Image
          src={vector}
          alt="Hero Image"
          layout="responsive"
          width={361}
          height={329}
        />
      </div>
    </section>
  );
};

export default Hero;
