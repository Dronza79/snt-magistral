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

import nextId from "react-id-generator"

// eslint-disable-next-line no-empty-pattern
export const DropdownMenu = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);

  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
  const isAuth = useZustandAuth((state) => state.data);
 // console.log(dataMenu);

  const items: MenuProps["items"] = [
  
  ];
  //const newData: any = [];

  //console.log(newData);
 // items.push(newData)
  //console.log(items);
  const newData = dataMenu.map((el) => {
 const item = {
  label: (
    <Link onClick={() => handleClickId(el)} rel="noopener noreferrer" to={`Menu/Documents/${el.href}`}>
      {el.title}
    </Link>
  ),
  key: nextId(),
}
if (el.submenu.length !== 0) {
	item.children = []
	el.submenu.map((el)=>{
		
		const item1 = {
      label: (
        <Link onClick={() => handleClickId(el)} rel="noopener noreferrer" to={`Menu/Documents/${el.href}`}>
          {el.title}
        </Link>
      ),
      key: nextId(),
    };
	item.children.push(item1);
	if (el.submenu.length !== 0) {
		item1.children = []
		//console.log(el.submenu);
		el.submenu.map((el)=>{
			//console.log(el);
			const item2 = {
        label: (
          <Link onClick={() => handleClickId(el)} rel="noopener noreferrer" to={`Menu/Documents/${el.href}`}>
            {el.title}
          </Link>
        ),
        key: nextId(),
      };
		item1.children.push(item2);
		})	
	}
	})
}
return item
  })
//console.log(dataMenu);
//console.log(newData);
newData.map((el)=>{
	items.push(el)
})
//console.log(items);


  useEffect(() => {
    async function fetchData() {
      const data = await fetchMenu();
      setMenu(data);
    }
    fetchData();
  }, []);

  async function  handleClickId (params) {
	const data = await fetchDoclist(params.id)
	setContent(data)
  }

  return (
    <div className={s.dropdownMenu}>
      <Dropdown key={1} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>Документы и отчетность</a>
      </Dropdown>
    </div>
  );
};
