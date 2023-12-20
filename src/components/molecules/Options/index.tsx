import { Button, Dropdown, cleanClassName, useMountedEffect } from "@/index";
import { MouseEventHandler, useState } from "react";
import styles from "./index.module.scss";
import { FontSizeType, FontWeightType } from "@/utils/constants";

export type ValidOptionValue = string | number;
export interface OptionType<OptionValue = ValidOptionValue> {
  name: string;
  value: OptionValue;
}

export interface OptionsProps<OptionValue = ValidOptionValue> {
  className?: string;
  onMouseDown?: MouseEventHandler<HTMLUListElement>;
  options: OptionType<OptionValue>[];
  handleClickOption: (value: OptionValue) => void;
  upward?: boolean;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  isOpen: boolean;
}

export const Options = <ValidOption extends ValidOptionValue>({
  className,
  isOpen = false,
  onMouseDown = (e) => e.preventDefault(),
  options,
  handleClickOption,
  upward = false,
  fontSize = "normal",
  fontWeight = 700,
}: OptionsProps<ValidOption>) => {
  const [optionState, setOptionState] = useState(isOpen ? "opening" : "closed");

  useMountedEffect(() => {
    if (isOpen) {
      setOptionState("opening");
    } else {
      setOptionState("closing");
      const delayClose = setTimeout(() => setOptionState("closed"), 500);
      return () => clearTimeout(delayClose);
    }
  }, [isOpen]);

  return (
    <>
      <Dropdown isOpen={isOpen} className={cleanClassName(className)}>
        <ul
          className={cleanClassName(
            `${upward && styles.upward} ${styles.options} ${
              styles[optionState]
            }`
          )}
          onMouseDown={onMouseDown}
        >
          {options.map(({ name, value }, i) => (
            <li key={i}>
              <Button
                value={value}
                className={cleanClassName(
                  `${styles.options_list} ${styles[`font-size-${fontSize}`]} ${
                    styles[`font-weight-${fontWeight}`]
                  }`
                )}
                onClick={() => {
                  handleClickOption(value as ValidOption);
                }}
              >
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </Dropdown>
    </>
  );
};
