/* eslint-disable no-empty-pattern */
 import { Link } from 'react-router-dom';
import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"






export const NewsFeed = ({ cards }: indexProps): JSX.Element => {

	console.log(cards)
	
  return (
	
	
    <div className={s.cardContainer}>
      <h1>Новости</h1>
      <div className={s['cardWrapper']}>
        {cards?.map((card, inx) => (
			
			
          <div key={inx} className={s.card}>
             <h2>{card?.title.slice(0, 5) + '...'}</h2> 
             <p className={s.cardNumber}> {card?.body}</p> 
          </div>
        ))}
      </div>
      <Link to={"Menu/News"} className={s['link']}>Все новости</Link>
    </div>
  );
};


