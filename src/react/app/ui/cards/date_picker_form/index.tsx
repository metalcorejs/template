import * as React from "react";
import { DatePicker } from "./date_picker";

export const DatePickerForm = () => {
  return (
    <div className="date-picker-form">
      <h2 className="date-picker-form__title">
        Найдём номера под ваши пожелания
      </h2>
      <form className="date-picker-form__form">
        <DatePicker />
      </form>
    </div>
  );
};
