 //import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useParams } from "react-router-dom"
import { indexProps } from "./index.props"
//import { useEffect, useState } from "react"
//import {  useZustandNews } from "../../store"
//import { fetchNew } from "../../Api/Api"
//import { NewsType } from "../../store"




// eslint-disable-next-line no-empty-pattern
export const DinamicPageDocuments = ({  }:indexProps): JSX.Element => {
	//const [dataNew, setDataNew] = useState<NewsType>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
//const dataNews =useZustandNews((state:any) => state.data) 
const {id} = useParams()
 console.log(id);
// const numId = Number(id)


// useEffect(() => {
// 	async function fetchData() {
// 		const data =  await fetchNew(numId)
// 		setDataNew(data)
// 	}
// 	fetchData()
// }, [])




	return (
	<>
<div> параметр из пути страницы - "{id}"</div>
	</>
	
	)
}

