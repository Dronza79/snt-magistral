// example

 import { DetailedHTMLProps,  HtmlHTMLAttributes } from 'react';
// Dispatch SetStateAction
 export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	username: string;
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	// setModalActive: Dispatch<SetStateAction<boolean>>
 }