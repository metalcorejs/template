import React, { useState } from "react";

import { Navbar } from "../navbar";
import { Logo } from "./Logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div
        className={`container header__container ${
          isOpen ? "header__container_opened" : ""
        }`}
      >
        <h2 className="header__logo" role="link">
          <Logo />
        </h2>
        <Navbar />
      </div>
      <div className="header__hamburger hamburger" onClick={hamburgerHandler}>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
    </header>
  );
};
