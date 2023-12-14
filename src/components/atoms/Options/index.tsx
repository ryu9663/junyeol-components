import { Button } from "@/index";
import { MouseEventHandler } from "react";
import styles from "./index.module.scss";

export interface OptionType {
  name: string;
  value: string | number | readonly string[] | undefined;
}

export interface OptionsProps {
  className?: string;
  onMouseDown?: MouseEventHandler<HTMLUListElement>;
  options: OptionType[];
  handleClickOption: MouseEventHandler<HTMLButtonElement>;
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
            onClick={handleClickOption}
          >
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
};
