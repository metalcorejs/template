import React, { FC, MouseEvent, useState } from "react";
import { Calendar } from "./calendar";
import { setDate } from "./calendar/date";

interface IDatePicker {
  label: string;
}

export const DatePicker: FC<IDatePicker> = ({ label }) => {
  const [calendar, setCalendar] = useState(setDate);
  const initState = { isHidden: true, in: "11.11.2021", out: "21.11.2021" };
  const [state, setState] = useState(initState);

  const datePickerHandler = (e: MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
    console.dir(event.classList);
    if (
      event.classList.contains("date-picker__input") ||
      event.classList.contains("date-picker__date")
    ) {
      setState((s) => ({ ...s, isHidden: !state.isHidden }));
      return;
    }
    return;
  };
  return (
    <div
      className="date-picker"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.dataset.id) {
          const id = Number(target.dataset.id);
          const date = new Date(calendar.year, calendar.monthNumber, id);
          console.log(id);
          setState((prev) => ({
            ...prev,
            in: `${date.getDate()}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`,
          }));
        }
        return;
      }}
    >
      <div className="date-picker__section">
        <label htmlFor="#" className="date-picker__label">
          {label}
        </label>
        <div className="date-picker__input" onClick={datePickerHandler}>
          <time className="date-picker__date">{state.in}</time>
        </div>
      </div>
      <div className="date-picker__section">
        <label htmlFor="#" className="date-picker__label">
          {state.out}
        </label>
        <div className="date-picker__input" onClick={datePickerHandler}>
          <time className="date-picker__date">10.10.2021</time>
        </div>
      </div>
      <Calendar
        isHidden={state.isHidden}
        calendar={calendar}
        setCalendar={setCalendar}
      />
    </div>
  );
};
