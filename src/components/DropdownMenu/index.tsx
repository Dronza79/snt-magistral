import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { fetchMenu } from "../../Api/Api";
import { useZustandAuth, useZustandContent, useZustandMenu } from "../../store";
import { fetchDoclist } from "../../Api/Api";

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
    <div className={s.dropdownMenu}>
    привет
    </div>
  );
};
