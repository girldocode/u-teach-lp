import { UText } from "@/components/Lv1_Atoms";
import Image from "next/image";
import check from "../../../../public/assets/svgviewer-output (006).svg";
import { IconTextProps } from "./@types";
import styles from "./IconText.module.scss";

const IconText: React.FC<IconTextProps> = ({ text }) => {
  return (
    <div>
      <div className="display-flex gap-x-4 items-center ml-4">
        <div>
          <Image src={check} alt="check" />
        </div>
        <div>
          <UText
            color="blue-gray-900"
            weight="normal"
            className={styles["iconText--text"]}
          >
            {text}
          </UText>
        </div>
      </div>
    </div>
  );
};

export default IconText;
