 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { NewsType, useZustandNews } from "../../store";


import { indexProps } from "./index.props"
import { Link } from 'react-router-dom';


// eslint-disable-next-line no-empty-pattern
export const News = ({  }:indexProps): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dataNews = useZustandNews((state: any) => state.data);
	console.log(dataNews);
	// dataNews?.map((el, inx) => 
	// 	console.log(el)
		
	// 	)
	return (
		<div className={s['news']}>
			{dataNews?.map((el:NewsType) => 
			<div className={s['boxNews']} key={el.id}>
			<div>{el?.pub_date}</div>
			<Link  className={s['link']}to={`${el.id}`}>{el?.title_news}</Link>
			
			</div>
			)}
		</div>
	)
}

