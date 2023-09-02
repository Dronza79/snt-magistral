/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import telegram from './img/telegram.svg'
import vk from './img/vk.svg'

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



export const Contact = ({ dop  }:indexProps): JSX.Element => {
	return (
    <>
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
        <div>
          <a
            className={s["boxLink"]}
            href="https://t.me/telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={s["boxTelegramIcon"]}>
              <img className={s["telegramIcon"]} src={telegram} alt="" />
            </div>
            Чат в Telegram
          </a>
          <a
            className={s["boxLink"]}
            href="https://vk.com/club169888777"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dop && (
              <>
                <div className={s["boxTelegramIcon"]}>
                  <img className={s["telegramIcon"]} src={vk} alt="" />
                </div>
                В контакте
              </>
            )}
          </a>
          {dop && (
            <a className={s["email-link"]} href="mailto:pochta@magistral-snt.ru">
              <span>Написать нам</span>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </>
    </>
  );
}

