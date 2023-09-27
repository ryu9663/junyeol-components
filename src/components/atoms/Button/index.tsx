import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";

export type ButtonSize = "small" | "medium" | "large";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HtmlButtonProps {
  border?: boolean;
  size?: ButtonSize;
  onClick?: () => void;
  link?: string;
}

export const Button = ({
  border = true,
  size = "medium",

  link,
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          className={cleanClassName(
            `${styles["button"]}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]}`
          )}
        >
          {children}
        </a>
      ) : (
        <button
          className={cleanClassName(
            `${styles["button"]}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]}`
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
