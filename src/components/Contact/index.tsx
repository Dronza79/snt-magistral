/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import telegram from './img/telegram.svg'
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



export const Contact = ({  }:indexProps): JSX.Element => {
	return (
		<>
			<div className={s["contact"]}>
            <div>
              <a href={`tel:+78008888888`}> +78008888888</a>{" "}
              <span>телефон правления</span>
            </div>
            <div>
              <a href={`tel:+78008888888`}> +78008888888</a>{" "}
              <span>телефон правления</span>
            </div>
            <div >
              <a className={s['boxLink']} href="https://t.me/telegram">
                <div className={s['boxTelegramIcon']}><img className={s["telegramIcon"]} src={telegram} alt="" /></div>
                Чат в Telegram
              </a>
            </div>
          </div>
		</>
	)
}

