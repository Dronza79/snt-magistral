import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';
import logo from "./img/logoMS.svg";
//import Accordion from "../../components/Accordion"

/************************************************************************************************************************************
 					Отключил липкую шапку в CSS class menuScrolled
 **********************************************************************************************************************************/

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { DropdownMenu, DynamicMenu } from "../../components/DynamicMenu";
import { indexProps } from "./index.props";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Contact } from "../../components/Contact";
import { useZustandAuth } from "../../store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NavMenu } from "../../components/NavMenu";
import { Management } from "../../components/Management";
import { Login } from "../../components/Login";

//import  logo  from './img/logoM.png'
//import { Link, NavLink } from 'react-router-dom'

// eslint-disable-next-line no-empty-pattern
export const _Header = ({
  className,
  setModalActive,
}: indexProps): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isAuth = useZustandAuth((state) => state.data);
  const setAuth = useZustandAuth((state) => state.setIsAuth);
  const [tokenData, setTokenData] = useLocalStorage([], "token");

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
          <Contact />
        </div>
      </div>
      <div className={cn(s["header-menu"], { [s.menuScrolled]: isScrolled })}>
        <Management />
        <DynamicMenu />
        <Link to="Menu/Question">Вопрос-Ответ</Link>
        {isAuth && <Link to={"Menu/Voting"}>Голосование</Link>}
        {isAuth && <Login />}

        <div className={s["auth"]}>
          {!isAuth && (
            <p className={s["auth-box"]} onClick={handleClick}>
              Авторизация
            </p>
          )}
        </div>
      </div>
    </header>
  );
};
