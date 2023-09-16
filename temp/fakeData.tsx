export const fakeMenu = {
  menu: [
    {
      name: "Главная",
      link: "/",
      icon: "home",
    },
    {
      name: "О нас",
      link: "/about",
      icon: "info",
      subMenu: [
        {
          name: "Команда",
          link: "/about/team",
        },
        {
          name: "История",
          link: "/about/history",
        },
      ],
    },
    {
      name: "Услуги",
      link: "/services",
      icon: "services",
      subMenu: [
        {
          name: "Разработка",
          link: "/services/development",
          subMenu: [
            {
              name: "Веб-разработка",
              link: "/services/development/web",
            },
            {
              name: "Мобильная разработка",
              link: "/services/development/mobile",
            },
          ],
        },
        {
          name: "Дизайн",
          link: "/services/design",
          subMenu: [
            {
              name: "Web-дизайн",
              link: "/services/design/web",
            },
            {
              name: "Графический дизайн",
              link: "/services/design/graphic",
            },
          ],
        },
        {
          name: "Консалтинг",
          link: "/services/consulting",
        },
      ],
    },
    {
      name: "Контакты",
      link: "/contacts",
      icon: "contacts",
    },
  ],
};
