import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';



 import { Footer } from "./Footer"
import { _Main } from "./_Main"
import { _Header } from "./_Header"
import { indexProps } from "./index.props"
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import { Modal } from '../components/Modal/Modal'
import { useState } from 'react'
// import { useZustand } from '../store'




// eslint-disable-next-line no-empty-pattern
export const Layout = ({  }:indexProps): JSX.Element => {
	
	
	const [modalActive, setModalActive] = useState<boolean>(false)
	
	//console.log(setModalActive);
	

	return (
		<div className={s.wrapper}>	
			<_Header
			setModalActive={setModalActive}
			className={s.header}
			/>
			<SideBar className={s.bar}/>
			<_Main
			className={s.main}>
				<Outlet/>
			</_Main>
			<Footer
			className={s.footer}
			/>
			<Modal modalActive={modalActive} setModalActive={setModalActive}> Авторизация</Modal>
		</div>
		
	)
}


