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
import { useNavigate } from 'react-router-dom'
import { useZustandAuth } from '../../store'

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
 
export const AuthForm = ({setModalActive}: indexProps): JSX.Element => {
	const setAuth = useZustandAuth(state => state.setIsAuth)
	//console.log(setAuth);
	

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState([]);
 const navigate = useNavigate()
//console.log(navagate);

 const handleSubmit = async (e: { preventDefault: () => void }) => {
   e.preventDefault();
   try {
     const data = await fetchLogin(state);
	setAuth()
     navigate("/");
	setModalActive(el => !el)
     console.log(data);
   } catch (error: any) {
     //console.log(error.response.status);
     if (error.response.status === 401 || error.response.status === 400) {
       console.log("Неверное имя или пароль");
       setErrors((er) => [...er, error.response.status]);
     }
   }
 };
  //console.log(errors);
  return (
    <AuthContext.Provider value={{ state, setState }}>
      <form onSubmit={handleSubmit} action="">
        <div className={s["container"]}>
          <h1>Авторизация</h1>
          <Input name="Имя Пользователя" type="text" prop={"username"} />
          <Input name="Пароль" type="password" prop={"password"} />
          {errors.length !== 0 && (
            <p className={s["error"]}>Неверное имя или пароль</p>
          )}
          <Button>Отправить</Button>
        </div>
      </form>
    </AuthContext.Provider>
  );
};

