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
   //  {
   //    key: "1-1",
   //    label: (
   //      <Link
         
   //        rel="noopener noreferrer"
   //        to={"/"}
   //      >
   //        1st menu item
   //      </Link>
   //    ),
   //    children: [
   //      {
   //        key: "2-1",
   //        label: "3rd menu item",
   //      },
   //      {
   //        key: "2-2",
   //        label: "4th menu item",
   //      },
   //    ],
   //  },
  ];
  //const newData: any = [];
  dataMenu.map((el, indx) => {
   const menuItem: MenuItemType = {
     label: (
       <Link
         rel="noopener noreferrer"
         to={`Menu/Documents/${el.href}`}
       >
         {el.title}
       </Link>
     ),
     key: nextId(),
   };
	if (el.submenu.length !== 0) {
		menuItem.children = []
		el.submenu.map((el,indx)=>{
			menuItem.children.push({
        key: nextId(),
        label: (
          <Link rel="noopener noreferrer" to={`Menu/Documents/${el.href}`}>
            {el.title}
          </Link>
        ),
      });
		if (el.submenu.length !== 0){
			
			el.submenu.map((el,indx)=>{
				
			})
		
		}

		})
		//menuItem.children = []
		
  }
	items.push(menuItem);
  });
  //console.log(newData);
 // items.push(newData)
  //console.log(items);
  
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
        <a onClick={(e) => e.preventDefault()}>Документы и отчетность</a>
      </Dropdown>
    </div>
  );
};
