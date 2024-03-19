import styles from "./button.module.scss";
import cn from "classnames";

interface IButtonProps {
  text: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius: "s" | "m" | "l";
  size: "s" | "m" | "l";
  onClick: () => void;
}

export const Button = ({ text, color, radius, size, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        styles[`button_color_${color}`],
        styles[`button_radius_${radius}`],
        styles[`button_size_${size}`]
      )}
      type="button"
    >
      {text}
    </button>
  );
};
