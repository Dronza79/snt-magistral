
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { fetchMenu } from "../../Api/Api";
import { useZustandMenu } from "../../store";


// eslint-disable-next-line no-empty-pattern
export const DropdownMenu = ({}: indexProps): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dataMenu = useZustandMenu((state: any) => state.data);

	
	
  const data = [
    {
      id: 1,
      title: "Правление",
      link: "Menu/Management",
      items: [
        { link: "Menu/Company", title: "О компании" },
        { link: "Menu/News", title: "Новости" },
        { link: "Menu/Contacts", title: "Контакты" },
      ],
    },
    {
      id: 2,
      link: "Menu/Documents",
      title: "Документы и отчетность",
      items: [
      //   { link: "Menu/info", name: "Общая информация" },
      //   {
      //     link: "Menu/finance",
      //     name: `Основные показатели  финансово-хозяйственной деятельности`,
      //   },
      //   { link: "Menu/Works", name: "Сведения о выполняемых работах" },
      //   { link: "Menu/Services", name: "Порядок и условия оказания услуг" },
      //   { link: "Menu/CostOfWork", name: "Сведения о стоимости работ" },
      //   { link: "Menu/Tariffs", name: "Тарифы на коммунальные ресурсы" },

      ],
    },
    {
      id: 3,
      link: "Menu/Question",
      title: "Вопрос-ответ",
      items: [],
    },
    {
      id: 4,
      link: "Menu/Contacts",
      title: "Контакты",
      items: [],
    },
    //  {
    //    id: 5,
    // 	link: '',
    //    title: "Авторизация",
    //    items: [],
    //  },
  ];

  //const newData = data
  //console.log(dataMenu);
  
 data[1].items.push(...dataMenu);
 console.log(data);
 

  const [activeId, setActiveId] = useState<number | undefined>();
  const [show, setShow] = useState<boolean>(false);

  let timerId: ReturnType<typeof setTimeout> | null = null;
 // console.log(timerId);

  const handleActive = (id: number | undefined) => () => {
    setActiveId(id);
    clearTimeout(timerId!);
    //console.log("clearTimeout(timerId!)");
  };

  const handleDisActive = () => {
    timerId = setTimeout(() => {
      setActiveId(undefined);
     // console.log("setTimeout");
    }, 1000);
  };
  const handleClickDisActive = () => {
    setShow((e) => !e);
    setTimeout(() => {
      setShow((e) => !e);
		setActiveId(undefined)
    }, 100);
  };

  useEffect(() => {
		async function fetchData() {
			const data = await fetchMenu()
			setMenu(data)
		}
		fetchData()
  }, [])
  

  return (
    <div className={s.dropdownMenu}>
      {data.map(({ id, title, items, link }) => (
        <div className={s.menuItem} key={id}>
          <Link to={link}>
            <div className={s.menuItemHeader}>{title}</div>
          </Link>
          {items.length > 0 ? (
            <ul
              className={cn(
                s.dropdownMenuList,
                {
                  [s.active]: activeId === id,
                },
                {
                  [s.disActive]: show,
                }
              )}
              onMouseEnter={handleActive(id)}
              onMouseLeave={handleDisActive}
            >
              {items.map((item, i) => (
                <li key={i} onClick={handleClickDisActive}>
                  {item.link ? (
                    <Link to={item.link}>{item.title}</Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};