import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";

export type ButtonSize = "small" | "normal" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HtmlButtonProps {
  border?: boolean;
  size?: ButtonSize;
  onClick?: () => void;
}

export const Button = ({
  border = true,
  size = "normal",

  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={cleanClassName(
          `${styles["button"]}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]}`
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
