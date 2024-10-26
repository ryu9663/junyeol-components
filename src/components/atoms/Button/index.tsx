import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";
import { MouseEventHandler } from "react";
import { FontSizeType, FontWeightType } from "@/utils/constants";

export type ButtonSize = "small" | "normal" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HtmlButtonProps {
  border?: boolean;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  isLoading?: boolean;
}

export const Button = ({
  border = true,
  size = "normal",
  children,
  className,
  fontSize = "normal",
  fontWeight = 400,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={cleanClassName(
        `${styles["button"]}
        ${disabled ? styles["button--disabled"] : ""}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]} 
          ${styles[`font-size-${fontSize}`]}
          ${styles[`font-weight-${fontWeight}`]}
          ${styles[isLoading ? "loading" : ""]}
          ${className}`,
      )}
      {...props}
    >
      {isLoading ? <div className={styles.loading_spinner} /> : children}
    </button>
  );
};
