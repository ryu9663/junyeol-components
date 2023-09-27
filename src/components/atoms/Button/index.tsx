import { ReactNode } from "react";
import { cleanClassName } from "../../../utils";
import styles from "./index.module.scss";

export type ButtonSize = "small" | "medium" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends HtmlButtonProps {
  border?: boolean;

  size?: ButtonSize;
  children: ReactNode;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  border = true,
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cleanClassName(
        `${styles["button"]}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
