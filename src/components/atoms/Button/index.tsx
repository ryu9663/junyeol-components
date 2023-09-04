import { ReactNode } from "react";
import { cleanClassName } from "../../../utils";
import styles from "./index.module.scss";

export type ButtonColor = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends HtmlButtonProps {
  color?: ButtonColor;

  size?: ButtonSize;
  children: ReactNode;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  console.log("hi");
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
      {children}
    </button>
  );
};
