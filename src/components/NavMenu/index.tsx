import { useEffect, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { fetchMenu } from "../../Api/Api";
import { useZustandAuth, useZustandContent, useZustandMenu } from "../../store";
import { fetchDoclist } from "../../Api/Api";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import nextId from "react-id-generator";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to={`Menu/Management`} rel="noopener noreferrer">
        Правление
      </Link>
    ),
    key: nextId(),
    children: [
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
    ],
  },
  {
    label: (
      <Link to={`Menu/Question`} rel="noopener noreferrer">
        Вопрос-Ответ
      </Link>
    ),
    key: "setting:1",
  },
];

// eslint-disable-next-line no-empty-pattern
export const NavMenu = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);
  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
  const isAuth = useZustandAuth((state) => state.data);

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div	className={s['wrapper']}>
      <Menu
			className={s['menu']}
        onClick={onClick}
        //selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
