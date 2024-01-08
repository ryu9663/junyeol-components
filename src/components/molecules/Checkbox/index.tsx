import { Label, LabelOptionType, cleanClassName } from "@/index";
import styles from "./index.module.scss";
import { ChangeEventHandler, LegacyRef, forwardRef, useState } from "react";

export interface CheckboxProps {
  value?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  id?: string;
  isRequired?: boolean;
  label?: LabelOptionType;
  description?: React.ReactNode;
  className?: string;
  ref?: LegacyRef<HTMLInputElement>;
  isDisabled?: boolean;
}

export const Checkbox = forwardRef(
  ({
    value,
    onChange,
    label,
    ref,
    isDisabled,
    isRequired,
    ...args
  }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(value || false);
    return (
      <div className={styles.checkbox_wrapper}>
        {isRequired && <span className={styles.required}>*</span>}
        <input
          {...args}
          type="checkbox"
          className={cleanClassName(
            `${styles.checkbox} ${isDisabled && styles.disabled}`,
          )}
          id={label && label.htmlFor}
          disabled={isDisabled}
          required={isRequired}
          checked={isChecked}
          onChange={() => {
            if (!isDisabled) {
              setIsChecked(!isChecked);
              onChange;
            }
          }}
          ref={ref}
        />
        {label && (
          <Label
            htmlFor={label.htmlFor}
            isDisabled={isDisabled}
            className={`${label.className} ${styles.checkbox_label}`}
          >
            {label.name}
          </Label>
        )}
      </div>
    );
  },
);
