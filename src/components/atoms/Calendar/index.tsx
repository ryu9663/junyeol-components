import ReactCalendar, {
  CalendarProps as ReactCalendarProps,
} from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.scss";
import { useState } from "react";
import { formatDate } from "date-fns";

export type DateValuePiece = Date | null;
export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

export interface CalendarProps extends ReactCalendarProps {
  value?: DateValue;
  onChange?: React.Dispatch<React.SetStateAction<DateValue>>;
}

export const Calendar = ({ value, onChange, ...props }: CalendarProps) => {
  const [localValue, setLocalValue] = useState<DateValue>(new Date());

  return (
    <>
      <ReactCalendar
        formatDay={(_, date) => formatDate(date, "dd")}
        formatShortWeekday={(_, date) => formatDate(date, "eee")}
        formatMonthYear={(_, date) => formatDate(date, "yyyy.MM")}
        calendarType="gregory"
        onChange={onChange || setLocalValue}
        value={value || localValue}
        {...props}
      />
    </>
  );
};
