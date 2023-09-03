// example

 import { DetailedHTMLProps,  HtmlHTMLAttributes } from 'react';
// Dispatch SetStateAction
 export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	variant?: "default" | "primary" | "secondary";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	// setModalActive: Dispatch<SetStateAction<boolean>>
 }