import { Button } from "@/index";
import styles from "./index.module.scss";
import { MouseEventHandler, useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";

export type SelectboxSizeType = "small" | "medium" | "large";

export interface SelectboxListType {
  name: string;
  value: string;
}
export interface SelectboxProps {
  name: string;
  list: SelectboxListType[];
  onChange: (value: string) => void;
  size: SelectboxSizeType;
  upward?: boolean;
  className?: string;
}
export const Selectbox = ({
  name,
  list,
  onChange,
  size = "medium",
  upward = false,
  className,
}: SelectboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectboxListType>({
    name: "",
    value: "",
  });

  const handleChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    const _value = e.currentTarget.value;
    onChange(_value);
    setIsOpen(false);
    const _selectedOption = list.find((option) => option.value === _value);
    if (!_selectedOption) {
      throw Error(
        "컴포넌트 에러입니다. _selectedOption이 falsy 일 수 없습니다."
      );
    }
    setSelectedOption(_selectedOption);
  };

  return (
    <div className={styles.selectbox_wrapper}>
      <Button
        className={`${isOpen ? styles.open : ""} ${styles.selectbox_button} ${
          styles[size]
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.selectbox_button_name}>
          {selectedOption.name || name}
        </span>
        {upward ? (
          <ChevronUp className={styles["arrow"]} width={20} height={20} />
        ) : (
          <ChevronDown className={styles["arrow"]} width={20} height={20} />
        )}
      </Button>
      {isOpen ? (
        <ul
          className={`${styles.dropdown} ${
            upward && styles.upward
          } ${className}`}
          onMouseDown={(e) => e.preventDefault()}
        >
          {list.map(({ name, value }) => {
            return (
              <li key={value}>
                <Button
                  value={value}
                  className={styles.dropdown_list}
                  // onClick={() => handleChange(value)}
                  // onClick={(e) => console.log(e.currentTarget.value)}
                  onClick={handleChange}
                >
                  {name}
                </Button>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
