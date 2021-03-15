import React, { FC, MouseEvent, useState } from "react";
import { Calendar } from "./calendar";

interface IDatePicker {
  label: string;
}

export const DatePicker: FC<IDatePicker> = ({ label }) => {
  const [isHidden, setIsHidden] = useState(true);

  const datePickerHandler = (e: MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
    console.dir(event.classList);
    if (
      event.classList.contains("date-picker__input") ||
      event.classList.contains("date-picker__date")
    ) {
      setIsHidden(!isHidden);
      return;
    }
    return;
  };
  return (
    <div className="date-picker">
      <label htmlFor="#" className="date-picker__label">
        {label}
      </label>
      <div className="date-picker__input" onClick={datePickerHandler}>
        <time className="date-picker__date">10.10.2021</time>
        <Calendar isHidden={isHidden} />
      </div>
    </div>
  );
};
