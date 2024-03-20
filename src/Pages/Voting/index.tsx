import { useEffect, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";
import { indexProps } from "./index.props";
import { useZustandAuth, useZustandContent, useZustandMenu } from "../../store";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import nextId from "react-id-generator";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { fetchVotingList } from "../../Api/Api";

// eslint-disable-next-line no-empty-pattern
export const Voting = ({}: indexProps): JSX.Element => {
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
      <h1>Голосование</h1>
      {data?.map((el) => (
        <div key={el.id}>
          <Link className={s["link"]} to={""}>
            {el.title}
          </Link>
          <span> Cтатус голосовалки - {el.status}</span>{" "}
          <p>
            Закрытие голосования{" "}
            <span className={s["box"]}>{el.close_event}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
