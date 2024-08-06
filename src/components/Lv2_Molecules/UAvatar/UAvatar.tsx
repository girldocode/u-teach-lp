import { UText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";
import { UAvatarProps } from "./@types";
import styles from "./UAvatar.module.scss";

const SAvatar: React.FC<UAvatarProps> = ({ imageUrl, name, tagline }) => {
  const generalStyling = "display-flex gap-x-4 items-center";
  const style = `${styles["avatar-flex"]}`;

  const classes = $cx(generalStyling);

  return (
    <div className={classes}>
      <Image src={imageUrl} width={64} height={64} alt="avatar" />
      <div className={style}>
        <UText as="strong" size="lg" weight="normal" color="blue-gray-900">
          {name}
        </UText>
        <UText as="strong" size="base" weight="normal" color="blue-gray-600">
          {tagline}
        </UText>
      </div>
    </div>
  );
};

export default SAvatar;
