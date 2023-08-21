 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"
import  logo  from './img/logoM.png'
import { NavLink } from 'react-router-dom'



// eslint-disable-next-line no-empty-pattern
export const _Header = ({ className }:indexProps): JSX.Element => {

	const setActive = ({isActive}) => isActive ? 'active-link' : ''
	

	return (
		// <header className={className}>
		// header
		// </header>
		<header className={className}>
      <div className= {s["container"]}>
        <div className={s["header-wrapper"]}>
          <a href="#" className={s['logo']}>
            <img src={logo} alt="logo magistral" className="logo-img" />
          </a>
          <nav className={s["header-nav"]}>
            <ul className={s["header-nav__list"]} >
              <li className={s["header-nav__item"]}>
                <NavLink to="/" className={s["header-nav__link"]}>
                  Главная страница
                </NavLink>
              </li>
              <li className={s["header-nav__item"]}>
                <NavLink to="News" className={s["header-nav__link"]}>
                  Объявления и новости
                </NavLink>
              </li>
              <li className="header-nav__item">
                <a href="#" className={s["header-nav__link"]}>
                  Руководящие документы
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className={s["header-nav__link"]}>
                  Календарь мероприятий
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className={s["header-nav__link"]}>
                  Отчетные документы
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className={s["header-nav__link"]}>
                  Обращение к правлению СНТ
                </a>
              </li>
            </ul>
            <button className={s["btn"]}>Войти</button>
          </nav>
        </div>
      </div>
    </header>
	)
}

