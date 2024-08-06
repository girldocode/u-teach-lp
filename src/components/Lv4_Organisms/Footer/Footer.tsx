import { LowerFooter, UpperFooter } from "@/components/Lv3_Cells";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <UpperFooter />
      <LowerFooter />
    </footer>
  );
};

export default Footer;
