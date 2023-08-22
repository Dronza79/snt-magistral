// import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props";


export const _Main = ({ className, children }: indexProps): JSX.Element => {
  return (
    <div className={className}>
      <div> Main{children}</div>
		<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A29255475e3869a8692dc35cfdf9fc60d8edc5dc6876b93832c739e207cde4f5f&amp;source=constructor" width="500" height="484" ></iframe>
    </div>
  );
};
