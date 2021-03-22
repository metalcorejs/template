import * as React from "react";
import Logo from "./Logo";
import { TextField } from "../form_elements/text_field";
import { FooterNav } from "./footer_nav";
import { FacebookSvg } from "./facebook";
import { TwitterSvg } from "./twitter";
import { InstagramSvg } from "./instagram";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__main footer-main">
        <div className="container footer-main__container">
          <div className="footer-main__column">
            <Logo className="footer-main__logo" />
            <div className="footer-main__text">
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>
          <div className="footer-main__column">
            <FooterNav
              list={[
                "Навигация",
                "О нас",
                "Новости",
                "Служба поддержки",
                "Услуги",
              ]}
            />
          </div>
          <div className="footer-main__column">
            <FooterNav
              list={[
                "О нас",
                "О сервисе",
                "Наша команда",
                "Вакансии",
                "Инвесторы",
              ]}
            />
          </div>
          <div className="footer-main__column">
            <FooterNav
              list={[
                "Служба поддержки",
                "Соглашения",
                "Сообщества",
                "Связь с нами",
              ]}
            />
          </div>
          <div className="footer-main__column">
            <nav className="nav footer__nav">
              <ul className="nav__menu nav__menu_vertical">
                <li className="nav__item footer__nav-item">
                  <a href="#" className="nav__link nav__link_active">
                    Подписка
                  </a>
                </li>
                <li className="nav__item footer-main__text footer__nav-item">
                  <a href="#" className="nav__link">
                    Получайте специальные предложения и новости сервиса
                  </a>
                </li>
                <TextField
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="text-field_subscription footer-main__text-field"
                  inputClassName="text-field__input_subscription"
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__down">
        <div className="container footer__down-container">
          <p className="footer__text">
            Copyright © 2018 Toxin отель. Все права защищены.
          </p>
          <ul className="footer__socials">
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <FacebookSvg />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <TwitterSvg />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="" className="footer__social-link">
                <InstagramSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
