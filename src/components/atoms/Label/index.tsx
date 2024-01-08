import { DetailedHTMLProps, LabelHTMLAttributes, memo } from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";

export type HTMLLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export interface LabelProps extends HTMLLabelProps {
  isError?: boolean;
  isDisabled?: boolean;
}

export const Label = memo(
  ({
    htmlFor,
    children,
    className,
    isError = false,
    isDisabled = false,
  }: LabelProps) => {
    return (
      <label
        htmlFor={htmlFor}
        className={cleanClassName(
          `${styles.label}  ${isError && styles.error} ${
            isDisabled && styles.disabled
          } ${className}`,
        )}
      >
        {children}
      </label>
    );
  },
  (prev, next) => prev.isError === next.isError,
);
