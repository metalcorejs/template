import * as React from "react";
import { TextField } from "../../../form_elements/text_field";
import { CheckBox } from "../../../form_elements/checkbox";
import { Toggle } from "../../../form_elements/toggle";
import { Button } from "../../../button";
import { BackgroundColor } from "chalk";

export const RegistrationForm = () => {
  return (
    <div className="reg-form__wrapper">
      <h1 className="reg-form__title">Регистрация аккаунта</h1>
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
          className="reg-form__toggle"
        />
        <Button href="#" className="btn_filled btn_filled_big reg-form__btn">
          перейти к оплате
        </Button>
        <div className="reg-form__nav">
          <a href="#" className="reg-form__link">
            Уже есть аккаунт на Toxin
          </a>
          <Button href="#" className="btn_shallow">
            войти
          </Button>
        </div>
      </form>
    </div>
  );
};
