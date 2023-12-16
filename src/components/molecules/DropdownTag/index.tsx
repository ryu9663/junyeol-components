import { Button, cleanClassName } from "@/index";
import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { X } from "react-feather";
import { FontSizeType, FontWeightType } from "@/utils/constants";
export interface DropdownTagProps extends PropsWithChildren {
  name: string;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
}

export type DropdownState = "closed" | "opened" | "opening" | "closing";
export const DropdownTag = ({
  name,
  children,
  className,
  fontSize = "normal",
  fontWeight = 700,
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
    <>
      <Button
        fontSize={fontSize}
        fontWeight={fontWeight}
        size="small"
        className={`${styles.drodown_tag}  `}
        onClick={() =>
          //! TODO : dropdown을 만들어야하는구나. animaition 달린,
          setDropdownState(dropdownState === "closed" ? "opening" : "closing")
        }
      >
        {name}
      </Button>
      {
        <>
          <div
            data-testid="dropdowntag-dropdown-testid"
            className={cleanClassName(
              `${styles.dropdown} ${styles[dropdownState]} ${className}`
            )}
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
        </>
      }
    </>
  );
};
