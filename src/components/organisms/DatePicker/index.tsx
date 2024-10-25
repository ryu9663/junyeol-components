import { Calendar, DateValue, Dropdown, InputProps } from "@/components/atoms";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { CalendarProps } from "react-calendar";
import styles from "./index.module.scss";
import { PickerFooter } from "@/components/molecules/PickerFooter";
import { usePrevious } from "@/utils/hooks/usePrevious";
import { convertDateToString } from "@/components/organisms/DatePicker/convert";
import { cleanClassName } from "@/utils";
import CalendarIcon from "@/assets/calendar.svg";
import CalendarActiveIcon from "@/assets/calendar_active.svg";

export interface DatePickerProps extends CalendarProps {
  value?: DateValue | null;
  onChange?: React.Dispatch<React.SetStateAction<DateValue | null>>;
  inputProps?: InputProps;
  placeholder?: InputProps["placeholder"];
}

export const DatePicker = ({
  value,
  placeholder,
  onChange,
  inputProps,
  ...props
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState<DateValue | null>(value || null);
  const [inputValue, setInputValue] = useState(
    localValue ? convertDateToString(localValue) : "",
  );

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 한글 입력불가, 숫자를 입력하면 자동으로 Calendar값에 맞게 설정
    const { value } = e.target;
    const onlyNumbers = value.replace(/[^\d]/g, "");
    setInputValue(onlyNumbers);

    if (onlyNumbers.length === 8) {
      const year = parseInt(onlyNumbers.substring(0, 4), 10);
      const month = parseInt(onlyNumbers.substring(4, 6), 10) - 1;
      const day = parseInt(onlyNumbers.substring(6, 8), 10);

      const dateObj = new Date(year, month, day);
      if (!isNaN(dateObj.getTime())) {
        setLocalValue(dateObj);
        setInputValue(convertDateToString(dateObj));
      }
    }
  };

  const previousLocalValue = usePrevious<DateValue>(localValue);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!isOpen) setIsOpen(true);
    if (e.key === "Enter") {
      handleOk();
      setIsOpen(false);
    }
  };

  const handleOk = () => {
    onChange?.(localValue);
    setLocalValue(localValue);
    setInputValue(convertDateToString(localValue));
    setIsOpen(false);
  };

  const handleCancel = () => {
    const _previousLocalValue = previousLocalValue || null;
    new Promise(() => {
      setTimeout(() => {
        setLocalValue(_previousLocalValue);
      }, 500);
    });
    setInputValue(convertDateToString(_previousLocalValue));

    setIsOpen(false);
  };

  useEffect(() => {
    if (value) {
      setLocalValue(value);
      setInputValue(convertDateToString(value));
    } else {
      setLocalValue(null);
      setInputValue("");
    }
  }, [value]);

  const hasValue = inputValue !== "";

  return (
    <div className={styles.datepicker_wrapper}>
      <div
        className={cleanClassName(
          `${styles.input_wrapper} ${isOpen && styles.open}
           ${hasValue && styles["has-value"]}`,
        )}
      >
        <input
          className={cleanClassName(
            `${styles.input} ${styles["font-size-small"]} ${
              styles["font-weight-400"]
            } ${isOpen && styles.open}
        `,
          )}
          onClick={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          {...inputProps}
        />{" "}
        <img
          src={hasValue ? CalendarActiveIcon : CalendarIcon}
          alt="calendar icon"
          className={styles.calendar_icon}
        />
      </div>

      <Dropdown
        isOpen={true}
        onMouseDown={(e) => e.preventDefault()}
        className={styles.datepicker_dropdown}
      >
        <Calendar value={localValue} onChange={setLocalValue} {...props} />
        <PickerFooter onOk={handleOk} onCancel={handleCancel} />
      </Dropdown>
    </div>
  );
};
