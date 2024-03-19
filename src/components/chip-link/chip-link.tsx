import { Link } from "react-router-dom";
import styles from "./chip-link.module.scss";
import cn from "classnames";

interface IChipLink {
  link: string;
  text: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size: "s" | "m" | "l";
  dot?: boolean;
  dotcolor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export const ChipLink = ({ link, text, color, size, dot, dotcolor }: IChipLink) => {
  return (
    <Link
      className={cn(
        styles.chiplink,
        styles[`chiplink_color_${color}`],
        styles[`chiplink_size_${size}`]
      )}
      to={link}
    >
      {dot && (
        <span
          className={cn(styles.chiplink__dot, styles[`chiplink__dot_color_${dotcolor}`])}
        ></span>
      )}
      {text}
    </Link>
  );
};
