import React, { useState, MouseEvent, FC } from "react";

interface IDropdown {
  className: string;
}

export const Dropdown: FC<IDropdown> = ({ className }) => {
  const options = [
    { name: "взрослые", amount: 0 },
    { name: "дети", amount: 0 },
    { name: "младенцы", amount: 0 },
  ];
  const [guests, setGuests] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  const incGuests = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.dataset);
    setGuests((prev) => {
      let newState = [...prev];
      newState = newState.map(({ name, amount }) => {
        if (name === target.dataset.option) return { name, amount: amount + 1 };
        return { name, amount };
      });
      return newState;
    });
  };

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  const decGuests = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.dataset.option === "взрослые");
    const isNull = guests.find(
      ({ name, amount }) => target.dataset.option === name && amount > 0
    );
    console.log(isNull);
    if (!isNull) return;
    setGuests((prev) => {
      let newState = [...prev];
      newState = newState.map(({ name, amount }) => {
        if (name === target.dataset.option) return { name, amount: amount - 1 };
        return { name, amount };
      });
      return newState;
    });
  };

  const optionsJsx = guests.map(({ name, amount }) => (
    <div className="dropdown__option">
      <p className="dropdown__option-title">{name}</p>
      <button
        className={`dropdown__option-btn ${
          !amount && "dropdown__option-btn_empty"
        }`}
        data-option={name}
        onClick={decGuests}
      >
        -
      </button>
      <span className="dropdown__option-amount">{amount}</span>
      <button
        className="dropdown__option-btn"
        data-option={name}
        onClick={incGuests}
      >
        +
      </button>
    </div>
  ));

  return (
    <div className={`dropdown ${className}`}>
      <div
        className={`dropdown__select ${isOpen ? "dropdown__select_open" : ""}`}
        onClick={dropdownHandler}
      >
        Гости
      </div>
      <div
        className={`dropdown__options ${isOpen && "dropdown__options_open"}`}
      >
        {optionsJsx}
      </div>
    </div>
  );
};
