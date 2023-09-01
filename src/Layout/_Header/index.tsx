import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import logo from './img/logoM.png'
//import Accordion from "../../components/Accordion"

import { DropdownMenu } from "../../components/DropdownMenu";
import { indexProps } from "./index.props";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import telegram from "./img/telegram.svg"
//import  logo  from './img/logoM.png'
//import { Link, NavLink } from 'react-router-dom'

// eslint-disable-next-line no-empty-pattern
export const _Header = ({
  className,
  setModalActive,
}: indexProps): JSX.Element => {
 
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setModalActive(true);
  };

  return (
    <header className={className}>
      {/* <Accordion title= 'писец'></Accordion> */}
      <div>
        <div className={s["HeaderTop"]}>
          <Link to={"/"} className={s["logo"]}>
            <img className={s["img"]} src={logo} alt="magistarl" />
          </Link>
          <div className={s["contact"]}>
            <div>
              <a href={`tel:+78008888888`}> +78008888888</a>{" "}
              <span>телефон правления</span>
            </div>
            <div>
              <a href={`tel:+78008888888`}> +78008888888</a>{" "}
              <span>телефон правления</span>
            </div>
            <div >
              <a className={s['boxLink']} href="https://t.me/telegram">
                <div className={s['boxTelegramIcon']}><img className={s["telegramIcon"]} src={telegram} alt="" /></div>
                Чат в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(s["header-menu"], { [s.menuScrolled]: isScrolled })}>
        <DropdownMenu></DropdownMenu>
        <div className={s["auth"]} onClick={handleClick}>
          Авторизация
        </div>
      </div>
    </header>
  );
};

{
  /* <div className= {s["container"]}>
<div className={s["header-wrapper"]}>
  <Link to="/" className={s['logo']}>
	 <img src={logo} alt="logo magistral" className="logo-img" />
  </Link>
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
		  <NavLink to="Documents" className={s["header-nav__link"]}>
			 Руководящие документы
		  </NavLink>
		</li>
		<li className="header-nav__item">
		  <NavLink to="Celender" className={s["header-nav__link"]}>
			 Календарь мероприятий
		  </NavLink>
		</li>
		<li className="header-nav__item">
		  <NavLink to="Reports" className={s["header-nav__link"]}>
			 Отчетные документы
		  </NavLink>
		</li>
		<li className="header-nav__item">
		  <NavLink to="Appeal" className={s["header-nav__link"]}>
			 Обращение к правлению СНТ
		  </NavLink>
		</li>
	 </ul>
	 <button className={s["btn"]}>Войти</button>
  </nav>
</div>
</div> */
}
