import * as React from "react";

export const Calendar = () => {
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return (
    <div className="calendar">
      <div className="calendar__slider">
        <button className="calendar__btn calendar__btn_back"></button>
        <time className="calendar__date">August 2021</time>
        <button className="calendar__btn calendar__btn_forward"></button>
      </div>
      <div className="calendar__week-days">
        {weekDays.map((day) => (
          <span className="calendar__week-day">{day}</span>
        ))}
      </div>
      <div className="calendar__month-days">
        {[...new Array(42)].fill(null).map((_, i) => (
          <span className="calendar__month-day">{i + 1}</span>
        ))}
      </div>
    </div>
  );
};
