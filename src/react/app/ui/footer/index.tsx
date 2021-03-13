import * as React from "react";
import Logo from "./Logo";
import { TextField } from "../form_elements/text_field";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__main footer-main">
        <div className="container footer-main__container">
          <div className="footer-main__column">
            <Logo />
            <div className="footer-main__text">
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>
          <div className="footer-main__column">
            <nav className="nav footer__nav">
              <ul className="nav__menu nav__menu_vertical">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Навигация
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    О нас
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Новости
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Служба поддержки
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Услуги
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-main__column">
            <nav className="nav footer__nav">
              <ul className="nav__menu nav__menu_vertical">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    О нас
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    О сервисе
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Наша команда
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Вакансии
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Инвесторы
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-main__column">
            <nav className="nav footer__nav">
              <ul className="nav__menu nav__menu_vertical">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Служба поддержки
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Соглашения
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Сообщества
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Связь с нами
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-main__column">
            <nav className="nav footer__nav">
              <ul className="nav__menu nav__menu_vertical">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Навигация
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    О нас
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Новости
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Служба поддержки
                  </a>
                </li>
                <TextField
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="text-field_subscription"
                  inputClassName="text-field__input_subscription"
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__down"></div>
    </footer>
  );
};
