import {
  Calendar,
  CalendarProps,
  DateValue,
  Dropdown,
  Input,
  InputProps,
} from "@/components/atoms";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { PickerFooter } from "@/components/molecules/PickerFooter";
import { usePrevious } from "@/utils/hooks";
import { convertDateToString } from "@/components/organisms/DatePicker/convert";
import CalendarIcon from "@/assets/calendar.svg";
import CalendarActiveIcon from "@/assets/calendar_active.svg";
import ArrowRight from "@/assets/arrow-right.svg";
import ArrowRightActive from "@/assets/arrow-right_active.svg";
import { cleanClassName } from "@/utils";

export type RangeDatePickerValueType = [DateValue | null, DateValue | null];
export interface RangeDatePickerProps {
  value?: RangeDatePickerValueType;
  onChange?: React.Dispatch<React.SetStateAction<RangeDatePickerValueType>>;
  leftInputProps?: InputProps;
  rightInputProps?: InputProps;
  calendarProps?: Omit<CalendarProps, "value" | "onChange">;
}

export const RangeDatePicker = ({
  value,
  onChange,
  leftInputProps,
  rightInputProps,
  calendarProps,
}: RangeDatePickerProps) => {
  const [selectedInput, setSelectedInput] = useState<"start" | "end" | null>(
    null,
  );
  const [localValue, setLocalValue] = useState<RangeDatePickerValueType>(
    value || [null, null],
  );

  const previousLocalValue = usePrevious<RangeDatePickerValueType>(localValue);

  const handleOk = () => {
    onChange?.(localValue);
    setSelectedInput(null);
  };

  const handleCancel = () => {
    const _previousLocalValue = previousLocalValue || [null, null];

    new Promise<void>(() => {
      setTimeout(() => {
        setLocalValue(_previousLocalValue);
      }, 500);
    });
    setLocalValue(_previousLocalValue);
    setSelectedInput(null);
  };

  const handleCalendarChange = (date: DateValue) => {
    if (selectedInput === "start") {
      setLocalValue([date, localValue[1]]);
    } else if (selectedInput === "end") {
      setLocalValue([localValue[0], date]);
    }
  };

  useEffect(() => {
    setLocalValue(value || [null, null]);
  }, [value]);
  const hasValue =
    convertDateToString(localValue[1]) !== "" ||
    convertDateToString(localValue[0]) !== "";
  const isOpen = selectedInput !== null;
  return (
    <div className={styles.range_date_picker_wrapper}>
      <div
        className={cleanClassName(
          `${styles.input_wrapper} ${isOpen && styles.open} ${
            hasValue && styles["has-value"]
          }`,
        )}
      >
        <div className={styles.input_left_wrapper}>
          <Input
            className={cleanClassName(
              `
              ${styles.input}
              ${styles.input_left} ${styles["font-size-small"]} ${
                styles["font-weight-400"]
              }
              ${isOpen && styles.open}
              `,
            )}
            onClick={() => setSelectedInput("start")}
            onBlur={() => setSelectedInput(null)}
            value={localValue ? convertDateToString(localValue[0]) : ""}
            {...leftInputProps}
          />
          <img
            src={hasValue ? ArrowRightActive : ArrowRight}
            alt="arrow right"
            className={styles.arrow_right}
          />
        </div>
        <div className={styles.input_right_wrapper}>
          <Input
            className={cleanClassName(
              `${styles.input}
              ${styles.input_right} ${styles["font-size-small"]} ${
                styles["font-weight-400"]
              } ${isOpen && styles.open}
              `,
            )}
            onClick={() => setSelectedInput("end")}
            onBlur={() => setSelectedInput(null)}
            value={localValue ? convertDateToString(localValue[1]) : ""}
            {...rightInputProps}
          />
          <img
            src={hasValue ? CalendarActiveIcon : CalendarIcon}
            alt="calendar icon"
            className={styles.calendar_icon}
          />
        </div>
      </div>
      <Dropdown
        isOpen={isOpen}
        onMouseDown={(e) => e.preventDefault()}
        className={styles.range_date_picker_dropdown}
      >
        {isOpen && (
          <>
            <Calendar
              value={localValue[selectedInput === "start" ? 0 : 1]}
              onChange={handleCalendarChange}
              // minDate={
              //   selectedInput === "end" ? (localValue[0] as Date) : undefined
              // }
              // maxDate={
              //   selectedInput === "start" ? (localValue[1] as Date) : undefined
              // }
              {...calendarProps}
            />
            <PickerFooter onOk={handleOk} onCancel={handleCancel} />
          </>
        )}
      </Dropdown>
    </div>
  );
};
