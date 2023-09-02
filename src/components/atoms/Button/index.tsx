import { cleanClassName } from "../../../utils";
import styles from "./index.module.scss";

export type ButtonColor = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: ButtonColor;
  /**
   * What background color to use
   */

  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  size = "medium",
  label,

  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cleanClassName(
        `${styles["storybook-button"]} ${
          styles[`storybook-button--${color}`]
        } ${styles[`storybook-button--${size}`]}`
      )}
      {...props}
    >
      {label}
    </button>
  );
};
