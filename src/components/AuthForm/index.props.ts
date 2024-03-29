// example

 import { DetailedHTMLProps,  Dispatch,  HtmlHTMLAttributes, SetStateAction } from 'react';
// Dispatch SetStateAction
 export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>
 }