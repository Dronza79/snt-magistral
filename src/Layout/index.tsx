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

import {  useZustandContact, useZustandNews } from "../store";
import { fetchContacts, fetchNews } from "../Api/Api";
import { AuthForm } from "../components/AuthForm";



// eslint-disable-next-line no-empty-pattern
export const Layout = ({}: indexProps): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);


	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	//const dataConfig = useZustand((state: any) => state.data);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setConfig = useZustandContact((state:any) => state.isUpdateContacts)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setNews = useZustandNews((state:any) => state.isUpdateNews)
	

//console.log(dataConfig);
//console.log(setConfig);


  useEffect(() => {
    async function fetchData() {
      const contacts = await fetchContacts();
      const news = await fetchNews();


      setConfig(contacts);
      setNews(news);

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
        
        <AuthForm />
      </Modal>
    </div>
  );
};
