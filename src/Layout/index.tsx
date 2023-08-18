import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';



 import { Footer } from "./Footer"
import { _Main } from "./_Main"
import { _Header } from "./_Header"
import { indexProps } from "./index.props"
import { Outlet } from 'react-router-dom'
// import { useZustand } from '../store'




// eslint-disable-next-line no-empty-pattern
export const Layout = ({  }:indexProps): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	//const isAuthActive = useZustand((state:any) => state.isAuthActive)
	
	
	

	

	return (
		<div className={s.wrapper}>	
			<_Header
			className={s.header}
			/>
			<_Main
			className={s.main}>
				<Outlet/>
			</_Main>
			<Footer
			className={s.footer}
			/>
		</div>
	)
}

