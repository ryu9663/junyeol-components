import { PropsWithChildren, useState } from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";
import { useMountedEffect } from "@/index";

export interface DropdownProps extends PropsWithChildren {
  isOpen: boolean;
  className?: string;
}
export const Dropdown = ({ isOpen, children, className }: DropdownProps) => {
  const [dropdownState, setDropdownState] = useState<
    "opening" | "closed" | "closing"
  >(isOpen ? "opening" : "closed");

  useMountedEffect(() => {
    if (isOpen) {
      setDropdownState("opening");
    } else {
      setDropdownState("closing");
      const delayClose = setTimeout(() => setDropdownState("closed"), 500);
      return () => clearTimeout(delayClose);
    }
  }, [isOpen]);

  return (
    <div className={styles.dropdown_wrapper}>
      {dropdownState !== "closed" && (
        <div
          className={cleanClassName(
            `${styles.dropdown} ${className} ${styles[dropdownState]}`
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
