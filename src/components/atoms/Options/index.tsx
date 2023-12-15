import { Button } from "@/index";
import { MouseEventHandler } from "react";
import styles from "./index.module.scss";

export type ValidOptionValue = string | number;
export interface OptionType<OptionValue = ValidOptionValue> {
  name: string;
  value: OptionValue;
}

export interface OptionsProps<OptionValue = ValidOptionValue> {
  className?: string;
  onMouseDown?: MouseEventHandler<HTMLUListElement>;
  options: OptionType<ValidOptionValue>[];
  handleClickOption: (value: OptionValue) => void;
  upward?: boolean;
}

export const Options = ({
  className,
  onMouseDown = (e) => e.preventDefault(),
  options,
  handleClickOption,
  upward = false,
}: OptionsProps) => {
  return (
    <ul
      className={`${className} ${upward && styles.upward} ${styles.options}`}
      onMouseDown={onMouseDown}
    >
      {options.map(({ name, value }, i) => (
        <li key={i}>
          <Button
            value={value}
            className={styles.options_list}
            onClick={() => {
              handleClickOption(value);
            }}
          >
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
};
