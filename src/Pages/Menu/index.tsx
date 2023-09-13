 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { Route, Routes } from "react-router-dom"
import { indexProps } from "./index.props"
import { Company } from "../Company"
import { News } from "../News"
import { Info } from "../Info"
import { Finance } from "../Finance"
import { Works } from "../Works"
import { Tariffs } from "../Tariffs"
import { CostOfWork } from "../CostOfWork"
import { Services } from "../Services"
import { Contacts } from "../Contacts"
import { Documents } from "../Documents"
import { Management } from "../Management"
import { Question } from "../Question"
import { Reports } from "../Reports"
import { Celender } from "../Celender"
import { DinamicPage } from '../DinamicPage'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const arr = [
// 	{ id: 1, name: 'Товар1', price: 100 },
// 	{ id: 2, name: 'Товар2', price: 200 },
// 	{ id: 3, name: 'Товар3', price: 300 },
//  ];


// eslint-disable-next-line no-empty-pattern
export const Menu = ({  }:indexProps): JSX.Element => {
	return (
	
				<div className={s['menu']}>
					<div className={s['one-third']}>sidebar</div>
					<div className={s['two-thirds']} >
						
								Menu
								<Routes>
								{/* {arr.map((el) => {
							return <Route key={el?.id}  path={el?.name} />;
						})} */}
								<Route  path="News" element={<News />} />
								<Route  path="News/:id" element={<DinamicPage />} />
								<Route path="Company" element={<Company />} />
								<Route path="Info" element={<Info />} />
								<Route path="Finance" element={<Finance />} />
								<Route path="Works" element={<Works />} />
								<Route path="Tariffs" element={<Tariffs  />} />
								<Route path="CostOfWork" element={<CostOfWork />} />
								<Route path="Services" element={<Services />} />
								<Route path="Contacts" element={<Contacts />} />
								<Route path="Documents" element={<Documents />} />
								<Route path="Celender" element={<Celender />} />
								<Route path="Reports" element={<Reports />} />
								<Route path="Management" element={<Management />} />
								<Route path="Question" element={<Question />} />
								</Routes>
							</div>
				</div>
	
	)
}

