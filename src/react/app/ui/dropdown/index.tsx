import * as React from "react";

export const Dropdown = () => {
  const options = ["взрослые", "дети", "младенцы"];

  const optionsJsx = options.map((option) => (
    <div className="dropdown__option">
      <p className="dropdown__option-title">{option}</p>
      <button className="dropdown__option-btn">-</button>
      <span className="dropdown__option-amount">0</span>
      <button className="dropdown__option-btn">+</button>
    </div>
  ));

  return (
    <div className="dropdown">
      <div className="dropdown__select">Гости</div>
      <div className="dropdown__options">{optionsJsx}</div>
    </div>
  );
};
