import { Button } from "@/index";
import styles from "./index.module.scss";
import { MouseEventHandler, useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import { OptionType, Options } from "@/components/atoms/Options";

export type SelectboxSizeType = "small" | "medium" | "large";

export interface SelectboxProps {
  name: string;
  list: OptionType[];
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
  const [selectedOption, setSelectedOption] = useState<OptionType>({
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
      {isOpen && (
        <Options
          className={className}
          onMouseDown={(e) => e.preventDefault()}
          options={list}
          handleClickOption={handleChange}
          upward={upward}
        />
      )}
    </div>
  );
};
