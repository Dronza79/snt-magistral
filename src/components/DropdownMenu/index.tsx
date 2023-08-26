/* eslint-disable no-empty-pattern */
 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
 import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useState } from "react";
import { indexProps } from "./index.props"



 export const DropdownMenu = ({  }:indexProps): JSX.Element=> {
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);
  const [isActive1, setIsSActive1] = useState(false);
  const [isActive2, setIsSActive2] = useState(false);

//   const handleToggle1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const handleToggle2 = () => {
//     setIsOpen2(!isOpen2);
//   };
let timerIdRef:number
let timerIdRef2:number

function timerId() {
  return setTimeout(() => {
	setIsSActive1(false);
	console.log('Время вышло!');
  }, 1000);
}

const handleActive1 = () => {
  setIsSActive1(true);
  clearTimeout(timerIdRef);
  console.log('навел');
};

const handleDisActive1 = () => {
  timerIdRef = timerId();
};



function timerId2() {
	return setTimeout(() => {
	setIsSActive2(false);
	console.log('Время вышло!');
	}, 1000);
 }
 
 const handleActive2 = () => {
	setIsSActive2(true);
	clearTimeout(timerIdRef2);
	console.log('навел');
 };
 
 const handleDisActive2 = () => {
	timerIdRef2 = timerId2();
 };
 
  

 
  return (
    <div className={s.dropdownMenu}>
      <div className={s.menuItem}>
        <div className={s.menuItemHeader} >
          Правление 
        </div>
          <ul className={cn(s.dropdownMenuList,{ [s.active]: isActive1 })}  onMouseEnter={handleActive1} onMouseLeave={handleDisActive1} >
            <li>О компании</li>
            <li>Новости</li>
            <li>Контакты</li>
          </ul>
        
      </div>
      <div className={s.menuItem}>
        <div className={s.menuItemHeader} >
		Документы и отчетность 
        </div>
        
          <ul className={cn(s.dropdownMenuList,{ [s.active]: isActive2 })}  onMouseEnter={handleActive2} onMouseLeave={handleDisActive2}>
            <li>Общая информация</li>
            <li>Основные показатели финансово-хозяйственной деятельности</li>
            <li>Сведения о выполняемых работах</li>
            <li>Порядок и условия оказания услуг</li>
            <li>Сведения о стоимости работ</li>
            <li>Тарифы на коммунальные ресурсы</li>
          </ul>
       
      </div>
      <div className={s.menuItem}>Вопрос-ответ</div>
      <div className={s.menuItem}>Контакты</div>
      <div className={s.menuItem}>Авторизация</div>
    </div>
  );
};


