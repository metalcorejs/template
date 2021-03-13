import React, { FC } from "react";

interface ITextField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  className?: string;
  inputClassName?: string;
}

export const TextField: FC<ITextField> = ({
  id = "",
  label,
  type = "text",
  placeholder = "",
  name = "",
  className = "",
  inputClassName = "",
}) => {
  return (
    <div className={`text-field ${className}`}>
      {label && (
        <label className="text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`text-field__input ${inputClassName}`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
