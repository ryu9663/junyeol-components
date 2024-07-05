import { PropsWithChildren, useState } from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";
import { useMountedEffect } from "@/index";

export interface DropdownProps
  extends PropsWithChildren,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  isOpen: boolean;
  className?: string;
}
export const Dropdown = ({
  isOpen,
  children,
  className,
  ...props
}: DropdownProps) => {
  const [dropdownState, setDropdownState] = useState<
    "open" | "closed" | "closing"
  >(isOpen ? "open" : "closed");

  useMountedEffect(() => {
    if (isOpen) {
      setDropdownState("open");
    } else {
      setDropdownState("closing");
      const delayClose = setTimeout(() => setDropdownState("closed"), 500);
      return () => clearTimeout(delayClose);
    }
  }, [isOpen]);

  const divProps = { ...props };

  return (
    <div className={styles.dropdown_wrapper} {...divProps}>
      {dropdownState !== "closed" && (
        <div
          data-testid="dropdown-testid"
          className={cleanClassName(
            `${styles.dropdown} ${className} ${styles[dropdownState]}`,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
