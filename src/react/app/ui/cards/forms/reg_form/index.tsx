import * as React from "react";
import { TextField } from "../../../form_elements/text_field";
import { CheckBox } from "../../../form_elements/checkbox";

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
      </form>
    </div>
  );
};
