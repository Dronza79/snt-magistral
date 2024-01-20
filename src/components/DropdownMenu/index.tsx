import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { fetchMenu } from "../../Api/Api";
import { useZustandContent, useZustandMenu } from "../../store";
import { fetchDoclist } from "../../Api/Api";

// eslint-disable-next-line no-empty-pattern
export const DropdownMenu = ({}: indexProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMenu = useZustandMenu((state: any) => state.isUpdatemenu);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMenu = useZustandMenu((state: any) => state.data);
  
  
  const setContent = useZustandContent((state: any) => state.isUpdatemenu);
 
  

  const data = [
    {
      id: 1,
      title: "Правление",
      link: "Menu/Management",
      items: [
        { href: "Menu/Company", title: "О компании" },
        { href: "Menu/News", title: "Новости" },
        { href: "Menu/Contacts", title: "Контакты" },
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

  const newData = data;
  //console.log(dataMenu);

  data[1].items.push(...dataMenu);
  //   console.log(data);

  const [activeId, setActiveId] = useState<number | undefined>();
  const [show, setShow] = useState<boolean>(false);
  const [isAuth] = useState<boolean>(false);
  //const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();
  const [hoveredIndex2, setHoveredIndex2] = useState<number | undefined>();

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
      setActiveId(undefined);
    }, 100);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMenu();
      setMenu(data);
    }
    fetchData();
  }, []);

  function handleMouseEnter(i: number, elem) {
    if (elem.submenu?.length !== 0) {
      setHoveredIndex(i);
    }

   // console.log(elem.submenu);
  }
  function handleMouseEnter2(elem, i: number) {
    if (elem.submenu?.length !== 0) {
      setHoveredIndex2(i);
    }

   // console.log(elem.href);
  }

  function handleMouseLeave2() {
    setHoveredIndex2(undefined);
  }
  function handleMouseLeave() {
    setHoveredIndex(undefined);
  }

  async function  handleClickId (params) {
	const data = await fetchDoclist(params.id)
	setContent(data)
  }

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
                <li
                  onMouseEnter={() => handleMouseEnter(i, item)}
                  onMouseLeave={handleMouseLeave}
                  // className={cn({ [s.sub]: showMenu })}
                  key={i}
                  onClick={handleClickDisActive}
                >
                  {item.href ? (
                    <Link
                      onClick={() => handleClickId(item)}
                      to={`Menu/Documents/${item.href}`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  <ul
                    //   onMouseEnter={handleActive(id)}
                    //   onMouseLeave={handleDisActive}
                    className={cn(s.sub, { [s.subActive]: i === hoveredIndex })}
                  >
                    {item.submenu
                      ? item?.submenu.map((el, inx) =>
                          isAuth ? (
                            <Link
                              onClick={() => handleClickId(el)}
                              key={el.id}
                              to={`Menu/Documents/${el.href}`}
                            >
                              <li>{el.title}</li>
                              <li>{el.submenu[0].href}</li>
                            </Link>
                          ) : el.is_public ? (
                            <ul key={el.id}>
                              <li
                                onMouseEnter={() => handleMouseEnter2(el, inx)}
                                onMouseLeave={handleMouseLeave2}
                              >
                                <Link
                                  onClick={() => handleClickId(el)}
                                  to={`Menu/Documents/${el.href}`}
                                >
                                  {el.title}
                                </Link>

                                <ul
                                  className={cn(s.sub, {
                                    [s.subActive]: inx === hoveredIndex2,
                                  })}
                                  // {el?.submenu.map(item =>(

                                  // ))}
                                  //className={s['sub']}
                                >
                                  {el.submenu.map((el, inx) => (
                                    <Link
                                      to={`Menu/Documents/${el.href}`}
                                      key={inx}
                                      onClick={() => handleClickId(el)}
                                    >
                                      <li>{el.title}</li>
                                    </Link>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          ) : null
                        )
                      : null}
                  </ul>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};
