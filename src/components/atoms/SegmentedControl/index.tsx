import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";

export interface SegmentedControlOption<T extends string = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedControlOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

export const SegmentedControl = <T extends string = string>({
  options,
  value,
  onChange,
  size = "medium",
  disabled = false,
  className,
}: SegmentedControlProps<T>) => {
  return (
    <div
      className={cleanClassName(
        `${styles.toggle} ${styles[`toggle--${size}`]} ${className}`,
      )}
      role="group"
    >
      {options.map((option) => {
        const isSelected = option.value === value;
        const isDisabled = disabled || option.disabled;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={isDisabled}
            className={cleanClassName(
              `${styles.toggle__item}
              ${isSelected ? styles["toggle__item--selected"] : ""}
              ${isDisabled ? styles["toggle__item--disabled"] : ""}`,
            )}
            onClick={() => {
              if (!isDisabled) onChange?.(option.value);
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
