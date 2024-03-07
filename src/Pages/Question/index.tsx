import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useEffect, useState } from "react";
import { indexProps } from "./index.props";
import { fetchVotingList } from "../../Api/Api";
import { Link } from "react-router-dom";

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

// eslint-disable-next-line no-empty-pattern
export const Question = ({}: indexProps): JSX.Element => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await fetchVotingList();
      setData(res);
    }

    getData();
  }, []);

  console.log(data);

  return (
    <div className={s["wrapper"]}>
      <h1>Вопрос-ответ</h1>
      {data?.map((el) => (
        <div key={el.id}>
          <Link className={s["link"]} to={""} >
            {el.title}
          </Link>
          <span> Cтатус голосовалки - {el.status}</span>  <p>Закрытие голосования <span className={s['box']}>{el.close_event}</span></p>
        </div>
      ))}
    </div>
  );
};
