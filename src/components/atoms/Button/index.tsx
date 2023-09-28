import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";
import { Link, MemoryRouter } from "react-router-dom";

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
      <MemoryRouter initialEntries={["/my-entry"]}>
        {link ? (
          <Link
            to={link}
            className={cleanClassName(
              `${styles["button"]}
        ${border || styles["button--no_border"]}  ${styles[`button--${size}`]}`
            )}
          >
            {children}
          </Link>
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
      </MemoryRouter>
    </>
  );
};
