import { ToolIcons } from "@/components/Lv1_Atoms";
import { SectionTitle } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import Image from "next/image";
import desktop from "../../../../public/assets/Desktop.png";
import yellowVector from "../../../../public/assets/svgviewer-output (001).svg";
import vector from "../../../../public/assets/svgviewer-output (002).svg";
import blueVector from "../../../../public/assets/svgviewer-output (003).svg";
import dots from "../../../../public/assets/svgviewer-output (004).svg";
import orangeDots from "../../../../public/assets/svgviewer-output (005).svg";
import tracksImg from "./../../../../public/assets/Lines.png";
import styles from "./../../Lv2_Molecules/SectionTitle/SectionTitle.module.scss";
import style from "./ToolsHighlight.module.scss";
const ToolsHighlight = () => {
  const classes = {
    container: $cx(style["container"]),
    rows: $cx(style["container__rows"]),
    textContainer: $cx(style["container__rows--text-container"]),
    imageContainer: $cx(style["container__rows--image-container"]),
    toolIcons: $cx(style["toolsIcons"]),
    positioned: $cx(style["positioned"]),
    blueVector: $cx(style["blueVector"]),
    yellowVector: $cx(style["yellowVector"]),
    vector: $cx(style["vector"]),
    orangeDots: $cx(style["orangeDots"]),
    dots: $cx(style["dots"]),
  };

  return (
    <section className="bg-blue-gray-100 position-relative">
      <div className={classes.container}>
        <div className={classes.rows}>
          <div className={classes.textContainer}>
            <SectionTitle
              title="All the tools that you need"
              desc="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse."
              textAlign="center"
              titleClass={styles["text__title--tools-highlight"]}
              descClass={styles["text__desc--tools-highlight"]}
            />
          </div>
          <div className={classes.imageContainer}>
            <Image src={desktop} alt="desktop" />
          </div>
        </div>
        {/* position */}
        <div className={classes.yellowVector}>
          <Image
            src={yellowVector}
            alt="vectors"
            className={style["yellowVector__Img"]}
          />
        </div>
        <div className={classes.vector}>
          <Image src={vector} alt="vector" className={style["vector__Img"]} />
        </div>
        <div className={classes.orangeDots}>
          <Image
            src={orangeDots}
            alt="dots"
            className={style["orangeDots__Img"]}
          />
        </div>
        <div className={classes.dots}>
          <Image src={dots} alt="dots" className={style["dots__Img"]} />
        </div>
      </div>
      <div className={classes.toolIcons}>
        <ToolIcons />
      </div>

      {/* positioned images */}

      <div className={classes.positioned}>
        <Image
          src={tracksImg}
          alt="desktop"
          className={style["positioned__posImg"]}
        />
      </div>

      <div className={classes.blueVector}>
        <Image
          src={blueVector}
          alt="desktop"
          className={style["blueVector__Img"]}
        />
      </div>
    </section>
  );
};

export default ToolsHighlight;
