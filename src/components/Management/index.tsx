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

const items: MenuProps["items"] = [
  
    
      {
        label: (
          <Link to={`Menu/Company`} rel="noopener noreferrer">
            О компании
          </Link>
        ),
        key: nextId(),
      },
      {
        label: (
          <Link to={`Menu/News`} rel="noopener noreferrer">
            Новости
          </Link>
        ),
        key: nextId(),
      },
      {
        label: (
          <Link to={`Menu/Contacts`} rel="noopener noreferrer">
            Контакты
          </Link>
        ),
        key: nextId(),
      },
      {
        label: (
          <Link to={`Menu/Requisite`} rel="noopener noreferrer">
            Реквизиты
          </Link>
        ),
        key: nextId(),
      },
    
  
 
];

// eslint-disable-next-line no-empty-pattern
export const Management = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);
  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
  const isAuth = useZustandAuth((state) => state.data);

  

  return (
    <div	className={s['wrapper']}>
     
      <Dropdown key={2} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}><Link to={`Menu/Management`} rel="noopener noreferrer">
        Правление
      </Link></a>
      </Dropdown>
    
    </div>
  );
};
