// example

 import { DetailedHTMLProps,  HtmlHTMLAttributes } from 'react';
// Dispatch SetStateAction
// interface Card {
// 	body: string;
// 	id: number;
// 	title: string;
// 	userId: number;
//  }
 export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// cards:  Card[];
	
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	// setModalActive: Dispatch<SetStateAction<boolean>>
 }