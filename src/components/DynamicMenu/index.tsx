import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { fetchMenu } from "../../Api/Api";
import { useZustandAuth, useZustandContent, useZustandMenu } from "../../store";
import { fetchDoclist } from "../../Api/Api";
import React from "react";

import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

import nextId from "react-id-generator";


// eslint-disable-next-line no-empty-pattern
export const DynamicMenu = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);

  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
  const isAuth = useZustandAuth((state) => state.data);


  const items: MenuProps["items"] = [];

  const element = (param) => {
    return {
      label: (
        <Link
          onClick={() => handleClickId(param)}
          rel="noopener noreferrer"
          to={`Menu/Documents/${param.href}`}
        >
          {param.title}
        </Link>
      ),
      key: nextId(),
    };
  };

  const createMenuItem = (el) => {
    const item = element(el);
    if (el.submenu.length !== 0) {
      item.children = el.submenu.map(createMenuItem);
    }
    return item;
  };



  const newData = dataMenu.map(createMenuItem);
  
  //console.log(newData);
  newData.map((el) => {
    items.push(el);
  });

  async function handleClickId(params) {
	const data = await fetchDoclist(params.id);
	setContent(data);
 }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMenu();
      setMenu(data);
    }
    fetchData();
  }, []);


  return (
    <div className={s.dropdownMenu}>
      <Dropdown key={1} menu={{ items }}>
        <Link to={`Menu/Documents`}>Документы и отчетность</Link>
      </Dropdown>
    </div>
  );
};
