import React, { FC } from "react";
import { Button } from "../button";

const navList = ["О нас", "Услуги", "Вакансии", "Новости", "Соглашения"];

interface INav {
  navList?: string[];
}

export const Navbar: FC<INav> = ({ navList }) => {
  return (
    <nav className="nav header__nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link nav__link_active">
            О нас
          </a>
        </li>
        <li className="nav__item nav__item_dropdown">
          <a href="#" className="nav__link">
            Услуги
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Вакансии
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Новости
          </a>
        </li>
        <li className="nav__item nav__item_dropdown">
          <a href="#" className="nav__link">
            Соглашения
          </a>
        </li>
        <li className="nav__item">
          <Button href="#" className="header__btn btn_shallow">
            Войти
          </Button>
        </li>
        <li className="nav__item">
          <Button href="#" className="header__btn btn_filled">
            Зарегистрироваться
          </Button>
        </li>
      </ul>
    </nav>
  );
};
