import { Button, cleanClassName } from "@/index";
import styles from "./index.module.scss";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import {
  OptionType,
  Options,
  OptionsProps,
  ValidOptionValue,
} from "@/components/molecules/Options";

export type SelectboxSizeType = "small" | "normal" | "large";

export interface SelectboxProps<_ValidOptionValue = ValidOptionValue>
  extends Pick<OptionsProps, "fontSize" | "fontWeight"> {
  name: string;
  options: OptionType<_ValidOptionValue>[];
  onChange: (value: _ValidOptionValue) => void;
  size?: SelectboxSizeType;
  upward?: boolean;
  className?: string;
}

export const Selectbox = <_ValidOption extends ValidOptionValue>({
  name,
  options,
  onChange,
  size = "small",
  upward = false,
  fontSize = "small",
  fontWeight = 400,
  className,
}: SelectboxProps<_ValidOption>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    name: "",
    value: "",
  });

  const handleChange = (_value: ValidOptionValue) => {
    onChange(_value as _ValidOption);
    setIsOpen(false);
    const _selectedOption = options.find((option) => option.value === _value);
    if (!_selectedOption) {
      throw Error(
        "컴포넌트 에러입니다. _selectedOption이 falsy 일 수 없습니다.",
      );
    }
    setSelectedOption(_selectedOption);
  };

  return (
    <div className={styles.selectbox_wrapper}>
      <Button
        className={cleanClassName(
          ` ${styles.selectbox_button} ${styles[size]} ${
            styles[`font-size-${fontSize}`]
          } ${styles[`font-weight-${fontWeight}`]}
           ${isOpen && styles["open"]}`,
        )}
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
      <div
        className={`${styles.dropdown} ${styles[size]}
        ${styles[upward ? "upward" : "downward"]}`}
      >
        <Options
          isOpen={isOpen}
          className={cleanClassName(`${className} ${styles.selectbox_options}`)}
          fontSize={fontSize}
          fontWeight={fontWeight}
          onMouseDown={(e) => e.preventDefault()}
          options={options}
          handleClickOption={handleChange}
        />
      </div>
    </div>
  );
};
