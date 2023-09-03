/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
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



export const Button = ({ variant = "default", size = "medium", children }:indexProps) => {
  let className = s.button;
  if (variant === "primary") {
    className = s.buttonPrimary;
  } else if (variant === "secondary") {
    className = s.buttonSecondary;
  }
  if (size === "small") {
    className += ` ${s.buttonSmall}`;
  } else if (size === "large") {
    className += ` ${s.buttonLarge}`;
  }
  return <button className={className}>{children}</button>;
};
