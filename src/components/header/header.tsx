import { Avatar } from "../avatar/avatar";
import styles from "./header.module.scss";
import avatar from "../../images/avatar.jpeg";
import { Logo } from "../logo/logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <Logo path={"/"} color={"black"} width={40} height={40} />
      </div>
      <div className={styles.header__box}>
        <Avatar
          src={avatar}
          alt={"avatar"}
          border={true}
          status={true}
          radius={"m"}
          size={"m"}
          color={"secondary"}
        />
      </div>
    </header>
  );
};
