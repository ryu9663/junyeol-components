import { DetailedHTMLProps, LabelHTMLAttributes, memo } from "react";
import styles from "./InputLabel.module.scss";

export type HTMLLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export interface LabelProps extends HTMLLabelProps {
  isError?: boolean;
}

export const InputLabel = memo(
  ({ htmlFor, children, className, isError = false }: LabelProps) => {
    return (
      <label
        htmlFor={htmlFor}
        className={`${className} ${styles.label} ${isError && styles.error}`}
      >
        {children}
      </label>
    );
  },
  (prev, next) => prev.isError === next.isError
);
