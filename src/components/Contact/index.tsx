/* eslint-disable no-empty-pattern */
import s from "./index.module.css";
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import telegram from "./img/telegram.svg";
import vk from "./img/vk.svg";

import { indexProps } from "./index.props";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

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

interface SiteInfo {
  site_url: string;
  site_title: string;
  site_email: string;
  site_social: string;
  site_telegram: string;
  site_postal: string;
}

export const Contact = ({ dop }: indexProps): JSX.Element => {
  const [dataContact, setDataContac] = useState<SiteInfo | null>(null);
//   const pattern = /\b(Магистраль)\b/g;
//   const test = dataContact?.site_title
//   const replacedStr = test?.replace(pattern, '<span>$1</span>');
//   console.log(replacedStr);
// const str = 'Это строка, в которой нужно найти слово Магистраль';
// const pattern = /\b(Магистраль)\b/g;
// const replacedStr = str.replace(pattern, '<span>$1</span>');
// console.log(replacedStr);
// const dataContact?.site_title = "Это строка, в которой есть слово Магистраль";

const words = dataContact?.site_title.split(" ");
//console.log(words);


const highlightedText = words?.map((word, index) => {
  if (word === "Магистраль") {
	console.log('оно');
	
    return <span className={s['box']} key={index}>&laquo;{word}&raquo;</span>;
  }
  return word;
});
const renderedText = highlightedText?.map((item, i) =>
    i + 1 !== highlightedText.length
      ? [item, <React.Fragment key={`space-${i}`}>&nbsp;</React.Fragment>]
      : item
  )
//  console.log(highlightedText?.join(" "));

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://127.0.0.1:8000/api/conf/");
      setDataContac(result.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <>
        <div className={s["contact"]}>
          {/* <div>
          <a href={`tel:+78008888888`}> +78008888888</a>{" "}
          <span>телефон правления</span>
        </div>
        <div>
          <a href={`tel:+78008888888`}> +78008888888</a>{" "}
          <span>телефон правления</span>
        </div> */}
          <div>
            {dop && (
              <>
                <div className={s["boxAdress"]}>
                  <div className={s["title"]}>{renderedText}</div>
                  <div className={s["postal"]}>{dataContact?.site_postal}</div>
                </div>
              </>
            )}
            <a
              className={s["boxLink"]}
              href={dataContact?.site_telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s["boxIcons"]}>
                <img className={s["icon"]} src={telegram} alt="" />
              </div>
              Чат в Telegram
            </a>
            <a
              className={s["boxLink"]}
              href={dataContact?.site_social}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dop && (
                <>
                  <div className={s["boxIcons"]}>
                    <img className={s["icon"]} src={vk} alt="" />
                  </div>
                  В контакте
                </>
              )}
            </a>
            {dop && (
              <a
                className={s["email-link"]}
                href={`mailto:${dataContact?.site_email}`}
              >
                <span>{dataContact?.site_email}</span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </>
    </>
  );
};
