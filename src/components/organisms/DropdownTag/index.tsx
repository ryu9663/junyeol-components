import { Button, ButtonSize, Dropdown, cleanClassName } from "@/index";
import { PropsWithChildren, useState } from "react";
import styles from "./index.module.scss";
import { X } from "react-feather";
import { FontSizeType, FontWeightType } from "@/utils/constants";
export interface DropdownTagProps extends PropsWithChildren {
  name: string;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  size?: ButtonSize;
}

export type DropdownState = "closed" | "opened" | "opening" | "closing";
export const DropdownTag = ({
  name,
  children,
  className,
  fontSize = "normal",
  fontWeight = 700,
  size = "normal",
}: DropdownTagProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.dropdown_tag_wrapper}>
      <Button
        fontSize={fontSize}
        fontWeight={fontWeight}
        size={size}
        className={`${styles.drodown_tag}  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
      </Button>
      {
        <>
          <Dropdown
            isOpen={isOpen}
            className={cleanClassName(
              `${styles.dropdown_wrapper} ${className}`,
            )}
          >
            <Button
              data-testid="dropdown-close-btn-testid"
              className={styles.dropdown_close_btn}
              onClick={() => setIsOpen(false)}
              size="small"
            >
              <X width={15} height={15} />
            </Button>
            {children}
          </Dropdown>
        </>
      }
    </div>
  );
};
