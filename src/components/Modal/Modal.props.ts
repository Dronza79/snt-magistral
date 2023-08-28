import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';
// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
// 	children: ReactNode;
// 	appearance: 'primary' | 'ghost';
// 	arrow?: 'right' | 'down' | 'none';
// }



export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode
	modalActive: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>

}