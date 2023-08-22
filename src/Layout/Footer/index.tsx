// import s from './Button.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';


import { indexProps } from "./index.props"

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}
			
// 	</button>)
// }


export const Footer = ({ className }:indexProps): JSX.Element => {
	return (
		<div className={className}>
			<div>Footer</div>
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac065749e88ff9b0bffa12601006ecf84ae8466a3e52c6bc98203cd545ad5fdca&amp;source=constructor" width="341" height="262" ></iframe>
		</div>
	)
}

