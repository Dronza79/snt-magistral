import { NewsFeed } from '../../components/NewsFeed';
import Slider from '../../components/Slider'
import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"


const slides: React.ReactNode[] = [
	<img src="https://kartinkived.ru/wp-content/uploads/2021/11/fon-dlya-slajda-volna.jpg" alt="Slide 1" key={1} />,
	<img src="https://w.forfun.com/fetch/5b/5b9aef9fe2c03351fbd65aea2fe97730.jpeg" alt="Slide 2" key={2} />,
	<img src="https://gas-kvas.com/uploads/posts/2023-02/1675471211_gas-kvas-com-p-fonovie-risunki-dlya-slaidov-10.jpg" alt="Slide 3" key={3} />,
 ];
const arr = [1,2,3]
// eslint-disable-next-line no-empty-pattern
export const Home = ({  }:indexProps): JSX.Element => {
	return (
		<>
		<div className={s['home']} style={{fontSize: '40px', textAlign: "center"}}>Home </div>	
		<Slider slides={slides} /> 
		<NewsFeed cards={arr}></NewsFeed>
		</>
	)
}

