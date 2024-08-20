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

  return (
    <div className={styles.range_date_picker_wrapper}>
      <div className={styles.input_wrapper}>
        <Input
          onClick={() => setSelectedInput("start")}
          onBlur={() => setSelectedInput(null)}
          value={localValue ? convertDateToString(localValue[0]) : ""}
          {...leftInputProps}
        />
        <Input
          onClick={() => setSelectedInput("end")}
          onBlur={() => setSelectedInput(null)}
          value={localValue ? convertDateToString(localValue[1]) : ""}
          {...rightInputProps}
        />
      </div>
      <Dropdown
        isOpen={selectedInput !== null}
        onMouseDown={(e) => e.preventDefault()}
        className={styles.range_date_picker_dropdown}
      >
        {selectedInput !== null && (
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
