/* eslint-disable no-empty-pattern */
// import s from './index.module.css'
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
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


export const Ymap = ({  }:indexProps): JSX.Element => {
	const defaultState = {
		center: [59.772315, 31.234063],
		
		zoom: 13.5,
 };
	return (
		<>
			<YMaps>
      <Map defaultState={defaultState}>
        <Placemark geometry={[59.772315, 31.234063]} />
      </Map>
    </YMaps>
		</>
	)
}




