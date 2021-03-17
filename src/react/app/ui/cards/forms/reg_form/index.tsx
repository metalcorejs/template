import * as React from "react";
import { TextField } from "../../../form_elements/text_field";

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
        />
        <TextField
          label=""
          placeholder="Фамилия"
          id="user-lastname"
          name="user-lastname"
          type="text"
        />
      </form>
    </div>
  );
};
