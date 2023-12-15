import { Button } from "@/index";
import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { X } from "react-feather";
export interface DropdownTagProps extends PropsWithChildren {
  name: string;
  className?: string;
}

export type DropdownState = "closed" | "opened" | "opening" | "closing";
export const DropdownTag = ({
  name,
  children,
  className,
}: DropdownTagProps) => {
  const [dropdownState, setDropdownState] = useState("closed");

  useEffect(() => {
    switch (dropdownState) {
      case "opening":
        setTimeout(() => setDropdownState("opened"), 500);
        break;

      case "closing": {
        const closeTimer = setTimeout(() => setDropdownState("closed"), 300);
        return () => clearTimeout(closeTimer);
      }
      default:
    }
  }, [dropdownState]);

  return (
    <div className={styles["option_tag_wrapper"]}>
      <Button
        size="small"
        className={`${styles.option_tag} ${className} `}
        onClick={() =>
          setDropdownState(dropdownState === "closed" ? "opening" : "closing")
        }
      >
        {name}
      </Button>
      {
        <div
          data-testid="dropdowntag-dropdown-testid"
          className={`${styles.dropdown} ${styles[dropdownState]}`}
        >
          <Button
            data-testid="dropdown-close-btn-testid"
            className={styles.dropdown_close_btn}
            onClick={() => setDropdownState("closing")}
          >
            <X width={15} height={15} />
          </Button>
          {children}
        </div>
      }
    </div>
  );
};
