// import s from './Button.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';


import { useLocation } from "react-router-dom"
import { indexProps } from "./index.props"
import { useZustandMenu } from "../../store";

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




export const SideBar = ({ className }:indexProps): JSX.Element => {
	const dataMenu = useZustandMenu((state: any) => state.data);
	const location = useLocation();
  const path = location.pathname;
  const regex = /Documents/;
  let document 
  

  if (regex.test(path)) {
   // console.log("Строка содержит подстроку");
    document = true;
  } else {
    //console.log("Строка не содержит подстроку");
    document = false;
  }

	console.log(dataMenu);
	


	return (
    <div className={className}>
      <div>Sidebar</div>

      {document && <div> Documents </div>}
      {document && dataMenu.map((el) => <p>{el?.title}</p>)}
    </div>
  );
}

