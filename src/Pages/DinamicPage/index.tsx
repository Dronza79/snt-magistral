// import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useParams } from "react-router-dom"
import { indexProps } from "./index.props"
import { useEffect } from "react"
import {  useZustandNews } from "../../store"




// eslint-disable-next-line no-empty-pattern
export const DinamicPage = ({  }:indexProps): JSX.Element => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataNews =useZustandNews((state:any) => state.data) 
//const params = useParams()
const {id} = useParams()

useEffect(() => {
	console.log(dataNews);
}, [])



	return (
	
				<div style={{fontSize: '40px', textAlign: "center"}}>
			DinamicPage {id}
		</div>
	
	)
}

