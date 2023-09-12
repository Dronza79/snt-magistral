/* eslint-disable no-empty-pattern */
import { Link } from "react-router-dom";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props";
import { fileNewsType, useZustandNews } from "../../store";

export const NewsFeed = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataNews = useZustandNews((state: any) => state.data);
  //console.log(dataNews);

  function extractDate(s: string) {
    const timestamp = Date.parse(s);

    if (!isNaN(timestamp)) {
      const dt = new Date(timestamp);
      const date = dt.toISOString().substring(0, 10);
      return date;
    }
    //else {
    //    // Обработка некорректного формата даты
    //    console.error("Некорректный формат даты:", s);
    //    return "Некорректная дата";
    //  }
  }

  const newDataNews = [];
  newDataNews.push(dataNews[0], dataNews[1], dataNews[2]);

  return (
    <div className={s.cardContainer}>
      <h1>Новости</h1>
      <div className={s["cardWrapper"]}>
        {newDataNews?.map((el, inx) => (
          <div key={inx} className={s.card}>
            {/* <p >Опубликовано </p> */}
            <p>Опубликовано {extractDate(el?.pub_date)}</p>
            <Link className={s["title"]} to={""}>
              {el?.title_news}
            </Link>
            {el?.file_news
              ? el.file_news.map((element:fileNewsType, idx:number) => {
                  // вместо console.log(element), отобразите содержимое массива file_news соответствующим образом
                  return (
                    <div className={s["file"]} key={idx}>
                      <p>{element.file_name}</p>
                      <a href={element.file} target="blank">
                        ссылка на файл
                      </a>
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
