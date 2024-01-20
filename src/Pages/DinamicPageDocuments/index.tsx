 //import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useParams } from "react-router-dom"
import { indexProps } from "./index.props"
import { useZustandContent } from "../../store"
import { useEffect } from "react";
//import { useEffect, useState } from "react"
//import {  useZustandNews } from "../../store"
//import { fetchNew } from "../../Api/Api"
//import { NewsType } from "../../store"




// eslint-disable-next-line no-empty-pattern
export const DinamicPageDocuments = ({  }:indexProps): JSX.Element => {
	const Content = useZustandContent((state: any) => state.data);
	//const [dataNew, setDataNew] = useState<NewsType>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
//const dataNews =useZustandNews((state:any) => state.data) 
const {id} = useParams()
const {id2} = useParams()
const {id3} = useParams()
//  console.log(id);
//  console.log(id2);
// const numId = Number(id)


useEffect(() => {
	console.log(Content);
	
}, [Content])




	return (
	<>
<div>1й параметр из пути страницы - "{id}"</div>
<div>2й параметр из пути страницы - "{id2}"</div>
<div>3й параметр из пути страницы - "{id3}"</div>
{Content.map((item: any) => (
	<div key={item.id}>
        <p >{item.title}</p>
        <p >{item.content}</p>
  </div>
      ))}
		
	</>
	
	)
}

