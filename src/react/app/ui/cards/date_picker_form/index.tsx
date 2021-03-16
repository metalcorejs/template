import * as React from "react";
import { DatePicker } from "./date_picker";
import { Dropdown } from "../../dropdown";
import { Button } from "../../button";

export const DatePickerForm = () => {
  return (
    <div className="date-picker-form">
      <h2 className="date-picker-form__title">
        Найдём номера под ваши пожелания
      </h2>
      <form className="date-picker-form__form">
        <DatePicker />
      </form>
      <Dropdown className="date-picker-form__dropdown" />
      <Button href="#" className="btn_filled btn_filled_big">
        Подобрать номер
      </Button>
    </div>
  );
};
