import cn from "classnames";
import styles from "./avatar.module.scss";

interface IAvatarProps {
  src: string;
  alt: string;
  border: boolean;
  status: boolean;
  radius: "s" | "m" | "l";
  size: "s" | "m" | "l";
  color: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const Avatar = ({
  src,
  alt,
  border = false,
  status = false,
  radius,
  size,
  color,
}: IAvatarProps) => {
  return (
    <div
      className={cn(
        styles.avatar,
        styles[`avatar_radius_${radius}`],
        styles[`avatar_size_${size}`],
        border && styles.avatar_border,
        color && styles[`avatar_color_${color}`]
      )}
    >
      <img
        className={cn(styles.avatar__image, styles[`avatar__image_radius_${radius}`])}
        src={src}
        alt={alt}
      />
      {status && <span className={styles.avatar_status}></span>}
    </div>
  );
};
