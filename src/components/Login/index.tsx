import { useEffect, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { useZustandAuth, useZustandContent, useZustandMenu } from "../../store";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import nextId from "react-id-generator";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { fetchMenu } from "../../Api/Api";


// eslint-disable-next-line no-empty-pattern
export const Login = ({}: indexProps): JSX.Element => {
	const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  const setAuth = useZustandAuth((state) => state.setIsAuth);
 const [tokenData, setTokenData] = useLocalStorage([], "token");

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={``} rel="noopener noreferrer">
          Дом
        </Link>
      ),
      key: nextId(),
    },
    {
      label: (
        <Link to={``} onClick={handleClickExit} rel="noopener noreferrer">
          Выйти
        </Link>
      ),
      key: nextId(),
    },
  ];

async function handleClickExit() {
  localStorage.clear();
  //	setTokenData([], "token")
  const data = await fetchMenu(tokenData.access);
  setMenu(data);
  setAuth(false);
}

  return (
    <div className={s["wrapper"]}>
      <Dropdown key={3} menu={{ items }}>
        <Link to={``} rel="noopener noreferrer">
          Дом
        </Link>
      </Dropdown>
    </div>
  );
};

// {isAuth && (
// 	<Menu menuButton={<MenuButton className={s['home']}>Дом</MenuButton>} transition>
// 	  <MenuItem>Дом</MenuItem>
// 	  <MenuItem onClick={handleClickExit}>Выйти</MenuItem>

// 	</Menu>
//  )}
