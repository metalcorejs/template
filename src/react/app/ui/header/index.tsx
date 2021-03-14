import * as React from "react";

import { Navbar } from "../navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h2 className="header__logo">
          <Logo />
        </h2>
        <Navbar />
      </div>
    </header>
  );
};
