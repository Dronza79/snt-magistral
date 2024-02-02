/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { SetStateAction, useState } from "react"
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



export const Input = ({ name, type }: indexProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    //console.log(event.target.value);
  };
  return (
    <>
      <label htmlFor="">
        {" "}
        {name}
        <input
          value={inputValue}
          onChange={handleChange}
          className={s["inpt"]}
          type={type}
        />
      </label>
    </>
  );
};

