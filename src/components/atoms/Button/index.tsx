import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";
import { MouseEventHandler } from "react";

export type ButtonSize = "small" | "normal" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HtmlButtonProps {
  border?: boolean;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  border = true,
  size = "normal",

  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={cleanClassName(
          `${styles["button"]}
        ${border || styles["button--no_border"]}  ${
            styles[`button--${size}`]
          } ${className}`
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
