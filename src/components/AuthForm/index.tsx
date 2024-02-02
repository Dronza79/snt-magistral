/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { Input } from "../Input"
import { indexProps } from "./index.props"
import { Button } from '../Button'
import { fetchLogin } from '../../Api/Api'

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



export const AuthForm = ({  }:indexProps): JSX.Element => {
	const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
	console.log(e);
	
    //fetchLogin(data)
  };


	return (
		<>
		<form onSubmit={handleSubmit} action="">
			<div className={s['container']}>
				<h1>Авторизация</h1>
				<Input name='Имя Пользователя' type='text'/>
				<Input name='Пароль' type='password'/>
				<Button >
					Отправить
				</Button>
					
				
			</div>
			</form>
		</>
	)
}

