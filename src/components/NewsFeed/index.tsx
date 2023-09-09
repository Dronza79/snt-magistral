/* eslint-disable no-empty-pattern */
 import { Link } from 'react-router-dom';
import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"
import { useEffect, useState } from 'react';
import axios from 'axios';


interface News {
	pub_date: string;
	autor: string;
	tag_news: string;
	title_news: string;
	content_news: string;
	file_news?: Array<{
		file: string;
		file_descr: string;
		file_name: string;
	}>;

 }



export const NewsFeed = ({}: indexProps): JSX.Element => {
  const [dataNews, setDataNews] = useState<News[] | []>([]);
//console.log(dataNews);

  function extractDate(s:string) {
	// Создание объекта Date из строки.
	const dt = new Date(s);
	// Получение даты из объекта Date.
	const date = dt.toISOString().substr(0, 10);
	return date;
 }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://127.0.0.1:8000/api/news/");
		const newResult = []
		newResult.push(result.data[0],result.data[1],result.data[2])
		setDataNews(newResult);
    }

   

    fetchData();
  }, []);
// console.log(dataNews);

  return (
    <div className={s.cardContainer}>
      <h1>Новости</h1>
      <div className={s["cardWrapper"]}>
		{dataNews?.map((el, inx) => (
          <div key={inx} className={s.card}>
				
				<p >Опубликовано {extractDate(el?.pub_date)}</p>
            <Link className={s['title']} to={''}>{el?.title_news}</Link>
				{el?.file_news
              ? el.file_news.map((element, idx) => {
                  // вместо console.log(element), отобразите содержимое массива file_news соответствующим образом
                  return (
                    <div className={s['file']} key={idx}>
							<p>{element.file_name}</p>
							<a href={element.file} target='blank'>ссылка на файл</a>
                      
                    </div>
                  );
                })
              : null}
            {/* <p className={s.cardNumber}> {el?.content_news}</p> */}
          </div>
        ))}
         {/* {dataNews?.map((el, inx) => (
          <div key={inx} className={s.card}>
            <h2>{el?.title_news.slice(0, 5) + "..."}</h2>
            <p className={s.cardNumber}> {el?.body}</p>
          </div>
        ))}  */}
      </div>
      <Link to={"Menu/News"} className={s["link"]}>
        Все новости
      </Link>
    </div>
  );
};


