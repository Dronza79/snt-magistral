import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';



import { Contact } from "../../components/Contact"
import { indexProps } from "./index.props"

export const Footer = ({ className }:indexProps): JSX.Element => {
	return (
		<div className={className}>
			<div className={s['footerWrapper']}>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac065749e88ff9b0bffa12601006ecf84ae8466a3e52c6bc98203cd545ad5fdca&amp;source=constructor" width="360" height="289" ></iframe>
				<Contact dop/>
			</div>
		</div>
	)
}

