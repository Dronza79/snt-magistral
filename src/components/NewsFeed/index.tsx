/* eslint-disable no-empty-pattern */
 import { Link } from 'react-router-dom';
import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"



// export const NewsFeed = ({  }:indexProps): JSX.Element => {
// 	return (
// 		<>
// 			NewsFeed
// 		</>
// 	)
// }

// type Card = {
//   id: number;
//   title: string;
//   description: string;
// };

// type Props = {
//   cards: Card[];
// };
export const NewsFeed = ({ cards }: indexProps): JSX.Element => {
  return (
    <div className={s.cardContainer}>
      <h1>Новости</h1>
      <div className={s['cardWrapper']}>
        {cards.map((card, inx) => (
          <div key={inx} className={s.card}>
            <h2>Новость</h2>
            <p className={s.cardNumber}> номер{inx + 1}</p>
          </div>
        ))}
      </div>
      <Link to={"Menu/News"} className={s['link']}>Все новости</Link>
    </div>
  );
};


