import React, { FC, MouseEvent, useState } from "react";
import { Calendar } from "./calendar";
import { setDate } from "./calendar/date";

interface IDatePicker {
  label?: string;
}

interface IState {
  isHidden: boolean;
  in: string;
  isInSelected: boolean;
  inSelectedId: number;
  outSelectedId: number;
  isOutSelected: boolean;
  out: string;
}

export const DatePicker: FC<IDatePicker> = ({ label }) => {
  const [calendar, setCalendar] = useState(setDate);
  const initState: IState = {
    isHidden: true,
    in: "ДД.ММ.ГГГГ",
    isInSelected: false,
    inSelectedId: 0,
    outSelectedId: 0,
    isOutSelected: false,
    out: "ДД.ММ.ГГГГ",
  };
  const [state, setState] = useState(initState);

  const datePickerInputHandler = (e: MouseEvent<HTMLElement>) => {
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
          if (state.isInSelected && id < state.inSelectedId) return;
          const date = new Date(calendar.year, calendar.monthNumber, id);
          console.log(id);
          const newDate = `${date.getDate()}.${
            date.getMonth() + 1
          }.${date.getFullYear()}`;
          setState((prev) => {
            if (!state.isInSelected) {
              return {
                ...prev,
                in: newDate,
                isInSelected: true,
                inSelectedId: id,
              };
            }
            return {
              ...prev,
              out: newDate,
              isOutSelected: true,
              outSelectedId: id,
            };
          });
        }
        return;
      }}
    >
      <div className="date-picker__section">
        <label htmlFor="#" className="date-picker__label">
          Прибытие
        </label>
        <div className="date-picker__input" onClick={datePickerInputHandler}>
          <time className="date-picker__date">{state.in}</time>
        </div>
      </div>
      <div className="date-picker__section">
        <label htmlFor="#" className="date-picker__label">
          Отъезд
        </label>
        <div className="date-picker__input" onClick={datePickerInputHandler}>
          <time className="date-picker__date">{state.out}</time>
        </div>
      </div>
      <Calendar
        isHidden={state.isHidden}
        calendar={calendar}
        setCalendar={setCalendar}
        inSelectedId={state.inSelectedId}
        outSelectedId={state.outSelectedId}
      />
    </div>
  );
};
