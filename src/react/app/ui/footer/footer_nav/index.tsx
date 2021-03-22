// Core
import React, { FC } from "react";

// Interface
interface IFooterNav {
  list: string[];
  className?: string;
}

// Component
export const FooterNav: FC<IFooterNav> = ({ list, className = "" }) => {
  // JSX
  const navItemsJsx = list.map((item, i) =>
    i === 0 ? (
      <li className="nav__item footer-nav__item">
        <a href="#" className="nav__link footer-nav__link nav__link_active">
          {item}
        </a>
      </li>
    ) : (
      <li className="nav__item footer-nav__item">
        <a href="#" className="nav__link footer-nav__link">
          {item}
        </a>
      </li>
    )
  );
  return (
    <nav className={`footer-nav ${className}`}>
      <ul className="nav__menu nav__menu_vertical footer-nav__menu">
        {navItemsJsx}
      </ul>
    </nav>
  );
};
