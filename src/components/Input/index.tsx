/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { SetStateAction, useContext, useState } from "react"
import { indexProps } from "./index.props"
import { AuthContext } from '../AuthForm';
//import AuthContext from "../AuthForm/index"
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



export const Input = ({ username, ...props }: indexProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const { state, setState } = useContext(AuthContext);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    setState( state.username = inputValue);
    //console.log(event.target.value);
  };
  return (
    <>
      <label htmlFor="">
        {" "}
        {username}
        <input
          value={inputValue}
          onChange={handleChange}
          className={s["inpt"]}
          {...props}
        />
      </label>
    </>
  );
};

