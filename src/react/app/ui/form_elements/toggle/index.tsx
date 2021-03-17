import React, { FC } from "react";

interface Toggle {
  id: string;
  name: string;
  type: string;
  label?: string;
  className?: string;
  inputClassName?: string;
}

export const Toggle: FC<Toggle> = ({
  className = "",
  id = "",
  label = "checkbox label",
  name = "",
  inputClassName = "",
  type = "radio",
}) => {
  return (
    <div className={`toggle ${className}`}>
      <input
        className={`toggle__input ${inputClassName}`}
        name={name}
        type={type}
        id={id}
      />
      {label && (
        <label className="toggle__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
