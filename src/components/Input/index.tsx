/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { SetStateAction, useContext, useEffect, useState } from "react"
import { indexProps } from "./index.props"
import { AuthContext } from '../AuthForm';




export const Input = ({name, prop, ...props }: indexProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const { state, setState } = useContext(AuthContext);
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    setState((state: any) => ({ ...state, [prop]: event.target.value } ));
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
          {...props}
        />
      </label>
    </>
  );
};

