import * as React from "react";
import { Calendar } from "./calendar";

export const DatePicker = () => {
  return (
    <div className="date-picker">
      <label htmlFor="#" className="date-picker__label">
        Прибытие
      </label>
      <div className="date-picker__input">
        <time>10.10.2021</time>
        <Calendar />
      </div>
    </div>
  );
};
