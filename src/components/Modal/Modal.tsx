
import s from './Modal.module.css'
import cn from 'classnames'
// import { ButtonProps } from './Button.props'

// import ArrowIcon from './arrow.svg';

import { ModalProps } from "./Modal.props"

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}

// 	</button>)
// }


// export const шаблон = ({  }): JSX.Element => {
// 	return <></>
// }


export function Modal({ children, modalActive, setModalActive }: ModalProps): JSX.Element {
	//console.log(setModalActive);
	
	return (
		<div
			className={cn(s.modal, { [s.active]: modalActive })}
			onClick={() => setModalActive(false)}
		>
			<div className={cn(s.modalWrapper, { [s.active]: modalActive })}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={s.modalBody}>
					<div className={s['more-snow']}>
					{children}
					</div>
				</div>
				<div className={s.cross} onClick={() => setModalActive(a => !a)}></div>
				
			</div>
		</div>
	)

}