import { ChipLink } from "../chip-link/chip-link";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ChipLink
        link={"https://t.me/bug_dev"}
        text={"© 2024 @bug_dev"}
        color={"default"}
        size={"m"}
        dot={true}
        dotcolor={"secondary"}
      />
    </footer>
  );
};
