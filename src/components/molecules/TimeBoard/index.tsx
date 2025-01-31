import { Button } from "@/components/atoms";
import styles from "./index.module.scss";
import { useState } from "react";

const HOURS = Array.from({ length: 24 }, (_, i) => i + 1);
const MINUTES = Array.from({ length: 60 }, (_, i) => i + 1);

export interface TimeBoardProps {
  value?: {
    hour: number;
    minute: number;
  };
  onChange?: (value: { hour: number; minute: number }) => void;
}

export const TimeBoard = ({ value, onChange }: TimeBoardProps) => {
  const [selectedHour, setSelectedHour] = useState<number>(
    new Date().getHours(),
  );
  const [selectedMinute, setSelectedMinute] = useState<number>(
    new Date().getMinutes(),
  );

  const handleChangeHour = (hour: number) => {
    setSelectedHour(hour);
    value && onChange && onChange({ ...value, hour });
  };

  const handleChangeMinute = (minute: number) => {
    setSelectedMinute(minute);
    value && onChange && onChange({ ...value, minute });
  };
  return (
    <div className={styles["time-board"]}>
      <ul className={styles["time-board_buttons"]}>
        {HOURS.map((hour, i) => (
          <li key={i}>
            <Button
              isSelected={selectedHour === hour}
              className={styles["time-board_button"]}
              onClick={(e) => {
                handleChangeHour(Number(e.currentTarget.textContent));
              }}
            >
              {hour}
            </Button>
          </li>
        ))}
      </ul>

      <ul className={styles["time-board_buttons"]}>
        {MINUTES.map((minute, i) => (
          <li key={i}>
            <Button
              isSelected={selectedMinute === minute}
              onClick={(e) => {
                handleChangeMinute(Number(e.currentTarget.textContent));
              }}
              className={styles["time-board_button"]}
            >
              {minute}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
