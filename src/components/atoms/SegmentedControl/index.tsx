import { useRef } from "react";
import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";

export interface SegmentedControlOption<T extends string | number = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string | number = string> {
  options: SegmentedControlOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const SegmentedControl = <T extends string | number = string>({
  options,
  value,
  onChange,
  size = "medium",
  disabled = false,
  className,
  ariaLabel,
}: SegmentedControlProps<T>) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const enabledOptions = options.filter((opt) => !opt.disabled && !disabled);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentValue: T,
  ) => {
    const currentIndex = enabledOptions.findIndex(
      (opt) => opt.value === currentValue,
    );
    if (currentIndex === -1) return;

    let nextIndex: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % enabledOptions.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + enabledOptions.length) % enabledOptions.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = enabledOptions.length - 1;
    }

    if (nextIndex !== null) {
      const nextOption = enabledOptions[nextIndex];
      onChange?.(nextOption.value);
      const refIndex = options.findIndex((opt) => opt.value === nextOption.value);
      buttonRefs.current[refIndex]?.focus();
    }
  };

  return (
    <div
      className={cleanClassName(
        `${styles.toggle} ${styles[`toggle--${size}`]} ${className}`,
      )}
      role="radiogroup"
      aria-label={ariaLabel}
    >
      {options.map((option, index) => {
        const isSelected = option.value === value;
        const isDisabled = disabled || option.disabled;

        return (
          <button
            key={option.value}
            ref={(el) => { buttonRefs.current[index] = el; }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={isDisabled}
            tabIndex={isSelected ? 0 : -1}
            className={cleanClassName(
              `${styles.toggle__item}
              ${isSelected ? styles["toggle__item--selected"] : ""}
              ${isDisabled ? styles["toggle__item--disabled"] : ""}`,
            )}
            onClick={() => onChange?.(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
