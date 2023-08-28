// import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props";


export const _Main = ({ className, children }: indexProps): JSX.Element => {
  return (
    <div className={className}>
       {children}
    </div>
  );
};
