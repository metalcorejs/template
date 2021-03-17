import * as React from "react";
import { TextField } from "../../../form_elements/text_field";
import { CheckBox } from "../../../form_elements/checkbox";
import { Toggle } from "../../../form_elements/toggle";

export const RegistrationForm = () => {
  return (
    <div className="reg-form__wrapper">
      <h2 className="reg-form__title">Регистрация аккаунта</h2>
      <form id="reg-form" action="" className="reg-form">
        <TextField
          label=""
          placeholder="Имя"
          id="user-name"
          name="user-name"
          type="text"
          className="reg-form__text-field"
        />
        <TextField
          label=""
          placeholder="Фамилия"
          id="user-lastname"
          name="user-lastname"
          type="text"
          className="reg-form__text-field"
        />
        <div className="reg-form__checkboxs">
          <CheckBox
            id="male"
            name="sex"
            type="radio"
            label="Мужчина"
            className="reg-form__radio"
          />
          <CheckBox id="female" name="sex" type="radio" label="Женщина" />
        </div>
        <TextField
          label="Дата Рождения"
          placeholder="ДД.ММ.ГГГГ"
          id="user-birthday"
          name="user-birthday"
          type="date"
          className="reg-form__text-field"
        />
        <TextField
          label="данные для входа в сервис"
          placeholder="Email"
          id="user-email"
          name="user-email"
          type="email"
          className="reg-form__text-field"
        />
        <TextField
          placeholder="Пароль"
          id="user-password"
          name="user-password"
          type="current-password"
          className="reg-form__text-field"
        />
        <Toggle
          type="checkbox"
          id="toggle"
          name="toggle"
          label="Получать спецпредложения"
        />
      </form>
    </div>
  );
};
