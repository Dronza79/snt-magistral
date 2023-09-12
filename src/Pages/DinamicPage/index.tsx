// import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useParams } from "react-router-dom"
import { indexProps } from "./index.props"




// eslint-disable-next-line no-empty-pattern
export const DinamicPage = ({  }:indexProps): JSX.Element => {
const params = useParams()
const {id} = useParams()
console.log(params);
console.log('sda');


	return (
	
				<div style={{fontSize: '40px', textAlign: "center"}}>
			DinamicPage {id}
		</div>
	
	)
}

