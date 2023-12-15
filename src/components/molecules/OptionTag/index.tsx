import { Button } from "@/index";
import { PropsWithChildren, useState } from "react";
import styles from "./index.module.scss";
export interface OptionTagProps extends PropsWithChildren {
  name: string;
  className?: string;
}

export const OptionTag = ({ name, children, className }: OptionTagProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles["option_tag_wrapper"]}>
      <Button
        size="small"
        className={`${styles.option_tag} ${className} `}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
      </Button>
      {
        <div
          data-testid="optiontag-dropdown-testid"
          className={`${styles.dropdown} ${
            isOpen ? styles.opened : styles.closed
          }`}
          onMouseDown={(e) => e.preventDefault()}
        >
          {children}
        </div>
      }
    </div>
  );
};
