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
import axios from "axios";

// import { useZustand } from '../store'

interface SiteInfo {
  site_url: string;
  site_title: string;
  site_email: string;
  site_social: string;
  site_telegram: string;
  site_postal: string;
}

// eslint-disable-next-line no-empty-pattern
export const Layout = ({}: indexProps): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [dataContact, setDataContac] = useState<SiteInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://127.0.0.1:8000/api/conf/");
      setDataContac(result.data);
    }

    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <_Header
        dataContact={dataContact}
        setModalActive={setModalActive}
        className={s.header}
      />
      {/* <SideBar className={s.bar}/> */}
      <_Main className={s.main}>
        <Outlet />
      </_Main>
      <Footer className={s.footer} />
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        {" "}
        Авторизация
      </Modal>
    </div>
  );
};
