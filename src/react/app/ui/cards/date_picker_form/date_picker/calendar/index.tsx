import * as React from "react";

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar__slider">
        <button className="calendar__btn calendar__btn_back"></button>
        <time className="calendar__date">August 2021</time>
        <button className="calendar__btn calendar__btn_forward"></button>
      </div>
    </div>
  );
};
