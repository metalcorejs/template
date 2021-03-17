import React, { FC } from "react";

interface ICheckBox {
  id: string;
  name: string;
  type: string;
  label?: string;
  className?: string;
  inputClassName?: string;
}

export const CheckBox: FC<ICheckBox> = ({
  className = "",
  id = "",
  label = "checkbox label",
  name = "",
  inputClassName = "",
  type = "checkbox",
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <input
        className={`checkbox__input ${inputClassName}`}
        name={name}
        type={type}
        id={id}
      />
      {label && (
        <label className="checkbox__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
