import React, { useState } from "react";
import { setDate } from "./date";

export const Calendar = () => {
  const [calendar, setCalendar] = useState(setDate);
  const { year, monthNumber, month, days, prevDays, nextDays } = calendar;
  console.log(year, monthNumber, month, days, prevDays, nextDays);
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const setNextMonth = () => {
    const newDate = new Date(year, monthNumber + 1);
    setCalendar(setDate(newDate));
  };

  const setPrevMonth = () => {
    const newDate = new Date(year, monthNumber - 1);
    setCalendar(setDate(newDate));
  };
  return (
    <div className="calendar">
      <div className="calendar__slider">
        <button
          className="calendar__btn calendar__btn_back"
          type="button"
          onClick={setPrevMonth}
        ></button>
        <time className="calendar__date">{`${month} ${year}`}</time>
        <button
          className="calendar__btn calendar__btn_forward"
          onClick={setNextMonth}
          type="button"
        ></button>
      </div>
      <div className="calendar__week-days">
        {weekDays.map((day) => (
          <span className="calendar__week-day">{day}</span>
        ))}
      </div>
      <div className="calendar__month-days">
        {prevDays.map((day, i) => (
          <span className="calendar__month-day calendar__month-day_prev">
            {day}
          </span>
        ))}
        {days.map((day, i) => (
          <span className="calendar__month-day">{day}</span>
        ))}
        {nextDays.map((day, i) => (
          <span className="calendar__month-day calendar__month-day_next">
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};
