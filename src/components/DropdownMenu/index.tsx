
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";


// eslint-disable-next-line no-empty-pattern
export const DropdownMenu = ({  }:indexProps): JSX.Element=> {
  const data = [
    {
      id: 1,
      title: "Правление",
      items: [
        { link: "Company", name: "О компании" },
        { link: "News", name: "Новости" },
        { link: "Contacts", name: "Контакты" },
      ],
    },
    {
      id: 2,
      title: "Документы и отчетность",
      items: [
        { link: "", name: "Общая информация" },
        { link: "", name: "Основные показатели финансово-хозяйственной деятельности" },
        { link: "", name: "Сведения о выполняемых работах" },
        { link: "", name: "Порядок и условия оказания услуг" },
        { link: "", name: "Сведения о стоимости работ" },
        { link: "", name: "Тарифы на коммунальные ресурсы" },
      ],
    },
    {
      id: 3,
      title: "Вопрос-ответ",
      items: [],
    },
    {
      id: 4,
      title: "Контакты",
      items: [],
    },
    {
      id: 5,
      title: "Авторизация",
      items: [],
    },
  ];

  const [activeId, setActiveId] = useState<number | undefined>();

  let timerId: ReturnType<typeof setTimeout> | null = null;
console.log(timerId);

  const handleActive = (id: number | undefined) => () => {
    setActiveId(id);
    clearTimeout(timerId!);
	console.log('clearTimeout(timerId!)');
	
  };

  const handleDisActive = () => {
    timerId = setTimeout(() => {
      setActiveId(undefined);
		console.log('setTimeout');
		
    }, 1000);
  };

  return (
    <div className={s.dropdownMenu}>
      {data.map(({ id, title, items }) => (
        <div className={s.menuItem} key={id}>
          <div className={s.menuItemHeader}>{title}</div>
          <ul
            className={cn(s.dropdownMenuList, {
              [s.active]: activeId === id,
            })}
            onMouseEnter={handleActive(id)}
            onMouseLeave={handleDisActive}
          >
            {items.map((item, i) => (
              <li key={i}>
                {item.link ? (
                  <Link to={item.link}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};