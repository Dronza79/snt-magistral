import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { Footer } from "./Footer";
import { _Main } from "./_Main";
import { _Header } from "./_Header";
import { indexProps } from "./index.props";
import { Outlet } from "react-router-dom";
//import { SideBar } from './SideBar'
import { Modal } from "../components/Modal/Modal";
import { useEffect, useState } from "react";

import { useZustandContact, useZustandNews } from "../store";
import { fetchContacts, fetchNews, fetchRefresh } from "../Api/Api";
import { AuthForm } from "../components/AuthForm";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "../hooks/useLocalStorage";

// eslint-disable-next-line no-empty-pattern
export const Layout = ({}: indexProps): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //const dataConfig = useZustand((state: any) => state.data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setConfig = useZustandContact((state: any) => state.isUpdateContacts);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setNews = useZustandNews((state: any) => state.isUpdateNews);
  const [tokenData, setTokenData] = useLocalStorage([], "token");

  //console.log(dataConfig);
  //console.log(setConfig);

  useEffect(() => {
    async function fetchData() {
      const contacts = await fetchContacts();
      const news = await fetchNews();
      setConfig(contacts);
      setNews(news);
      if (typeof tokenData.access === "string") {
        const decoded = jwtDecode(tokenData.access);
        const date = new Date(decoded.exp * 1000);
        const dataIsNow = new Date();
        const tokenLifeTime = Math.round((dataIsNow - date) / 1000);
        console.log(tokenData.access);

        if (tokenLifeTime > 0) {
          console.log(tokenLifeTime);
          const refreshToken = await fetchRefresh(tokenData.refresh);
          console.log(refreshToken);
          setTokenData(refreshToken);

          // доработать fetchRefresh(tokenData.refresh); чтобы менять ключи в хронилище
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <_Header
        //   dataContact={dataContact}
        setModalActive={setModalActive}
        className={s.header}
      />
      {/* <SideBar className={s.bar}/> */}
      <_Main className={s.main}>
        <Outlet />
      </_Main>
      <Footer className={s.footer} />
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <AuthForm setModalActive={setModalActive} />
      </Modal>
    </div>
  );
};
