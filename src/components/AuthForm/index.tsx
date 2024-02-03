/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { Input } from "../Input"
import { indexProps } from "./index.props"
import { Button } from '../Button'
import { fetchLogin } from '../../Api/Api'
import { createContext, useState } from 'react'

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

const initialState = {
	username: '',
	password: '',
}
 export const AuthContext = createContext();

export const AuthForm = ({}: indexProps): JSX.Element => {
  const [state, setState] = useState({});
console.log(state);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(e);

    //fetchLogin(data)
  };

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <form onSubmit={handleSubmit} action="">
        <div className={s["container"]}>
          <h1>Авторизация</h1>
          <Input username="Имя Пользователя" type="text" />
          <Input username="Пароль" type="password" />
          <Button>Отправить</Button>
        </div>
      </form>
    </AuthContext.Provider>
  );
};

