import { ChangeEventHandler, useState } from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";

export interface SwitchProps {
  value?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  className?: string;
  valueSync?: boolean;
}

export const Switch = ({ id, value, onChange }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("ㅗㅑㄷ");
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <button
      id={id}
      className={cleanClassName(
        `${styles.switch_wrapper}
        ${styles[isChecked ? "on" : "off"]}`,
      )}
      type="button"
    >
      <div
        className={cleanClassName(
          `${styles.circle} ${styles[isChecked ? "on" : "off"]}`,
        )}
      />
      <input
        id={id}
        checked={isChecked}
        type="checkbox"
        className={styles.switch_element}
        onChange={handleChange}
      />
    </button>
  );
};
