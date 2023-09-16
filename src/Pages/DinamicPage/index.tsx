 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useParams } from "react-router-dom"
import { indexProps } from "./index.props"
import { useEffect, useState } from "react"
//import {  useZustandNews } from "../../store"
import { fetchNew } from "../../Api/Api"
import { NewsType } from "../../store"




// eslint-disable-next-line no-empty-pattern
export const DinamicPage = ({  }:indexProps): JSX.Element => {
	const [dataNew, setDataNew] = useState<NewsType>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
//const dataNews =useZustandNews((state:any) => state.data) 
const {id} = useParams()
console.log(dataNew);
const numId = Number(id)


useEffect(() => {
	async function fetchData() {
		const data =  await fetchNew(numId)
		setDataNew(data)
	}
	fetchData()
}, [])




	return (
	
				<div className={s['boxNews']}>
			<div className={s['data']}> Дата публикации {dataNew?.pub_date.slice(0,10)}</div>
			<div className={s['title']}>{dataNew?.title_news}</div>
			<div className={s['content']}>{dataNew?.content_news}</div>
			{dataNew?.file_news && dataNew?.file_news.map((el,inx)=>(
				<a key={inx} className={s['link']} href={el.file} target='blank'> {el.file_name}</a>
			))  }
			
		</div>
	
	)
}

