import { Calendar, DateValue, Dropdown, Input } from "@/components/atoms";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { CalendarProps } from "react-calendar";
import styles from "./index.module.scss";
import { convertDateToString } from "@/components/molecules/DatePicker/convert";
import { PickerFooter } from "@/components/molecules/PickerFooter";
import { usePrevious } from "@/utils/hooks/usePrevious";

export interface DatePickerProps extends CalendarProps {
  value?: DateValue;
  onChange?: React.Dispatch<React.SetStateAction<DateValue>>;
}

export const DatePicker = ({ value, onChange, ...props }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState<DateValue>(new Date());
  const [date, setDate] = useState("");

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 한글 입력불가, 숫자를 입력하면 자동으로 Calendar값에 맞게 설정
    const { value } = e.target;
    const onlyNumbers = value.replace(/[^\d]/g, "");
    setDate(onlyNumbers);

    if (onlyNumbers.length === 8) {
      const year = parseInt(onlyNumbers.substring(0, 4), 10);
      const month = parseInt(onlyNumbers.substring(4, 6), 10) - 1;
      const day = parseInt(onlyNumbers.substring(6, 8), 10);

      const dateObj = new Date(year, month, day);
      if (!isNaN(dateObj.getTime())) {
        setLocalValue(dateObj);
        onChange?.(dateObj);
      }
    }
  };

  const previousLocalValue = usePrevious<DateValue>(localValue);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!isOpen) setIsOpen(true);
    if (e.key === "Enter") {
      setIsOpen(false);
    }
  };

  const handleOk = () => {
    onChange?.(localValue);
    setIsOpen(false);
  };

  const handleCancel = () => {
    new Promise(() => {
      setTimeout(() => {
        previousLocalValue && setLocalValue(previousLocalValue);
      }, 500);
    });

    setIsOpen(false);
  };

  useEffect(() => {
    if (value) {
      setDate(convertDateToString(value));
    }
  }, [value]);

  return (
    <div className={styles.datepicker_wrapper}>
      <Input
        onClick={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        value={date}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />

      <Dropdown
        isOpen={isOpen}
        onMouseDown={(e) => e.preventDefault()}
        className={styles.datepicker_dropdown}
      >
        <Calendar value={localValue} onChange={setLocalValue} {...props} />
        <PickerFooter onOk={handleOk} onCancel={handleCancel} />
      </Dropdown>
    </div>
  );
};
