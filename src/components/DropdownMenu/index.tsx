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
import { Dropdown  } from "antd";

const items: MenuProps["items"] = [
  {
    
      
        key: "1-1",
        label: "1st menu item",
        children: [
          {
            key: "2-1",
            label: "3rd menu item",
          },
          {
            key: "2-2",
            label: "4th menu item",
          },
        ],
      
    
  },

];
const items2: MenuProps["items2"] = [
  {
    
      
        key: "1-1",
        label: "1st menu item",
        children: [
          {
            key: "2-1",
            label: "3rd menu item",
          },
          {
            key: "2-2",
            label: "4th menu item",
          },
        ],
      
    
  },
  {
    key: "2",
    label: "sub menu",
    children: [
      {
        key: "2-1",
        label: "3rd menu item",
      },
      {
        key: "2-2",
        label: "4th menu item",
      },
    ],
  },
  {
    key: "3",
    label: "disabled sub menu",
    disabled: false,
    children: [
      {
        key: "3-1",
        label: "5d menu item",
      },
      {
        key: "3-2",
        label: "6th menu item",
      },
    ],
  },
];

// eslint-disable-next-line no-empty-pattern
export const DropdownMenu = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);

  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
  const isAuth = useZustandAuth((state) => state.data);
  console.log(dataMenu);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMenu();
      setMenu(data);
    }
    fetchData();
  }, []);

  return (
	<React.Fragment>
   
      <Dropdown key={1} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>Документы и отчетность</a>
      </Dropdown>
      <Dropdown  key={2} menu={{ items2 }}>
        <a onClick={(e) => e.preventDefault()}>Документы </a>
      </Dropdown>
  
 </React.Fragment>
  );
};
