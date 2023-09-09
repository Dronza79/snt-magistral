
import { NewsFeed } from "../../components/NewsFeed";
import Slider from "../../components/Slider";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';
import { useEffect,  } from "react";
import { indexProps } from "./index.props";
//import { fetchContacts } from "../../Api/Api";

const slides: React.ReactNode[] = [
  <img
    src="https://kartinkived.ru/wp-content/uploads/2021/11/fon-dlya-slajda-volna.jpg"
    alt="Slide 1"
    key={1}
  />,
  <img
    src="https://w.forfun.com/fetch/5b/5b9aef9fe2c03351fbd65aea2fe97730.jpeg"
    alt="Slide 2"
    key={2}
  />,
  <img
    src="https://gas-kvas.com/uploads/posts/2023-02/1675471211_gas-kvas-com-p-fonovie-risunki-dlya-slaidov-10.jpg"
    alt="Slide 3"
    key={3}
  />,
];
//  interface News {
// 	userId: number;
// 	id: number;
// 	title: string;
// 	body: string;
//  }

// eslint-disable-next-line no-empty-pattern
export  const Home = ({}: indexProps): JSX.Element => {
	//const [first, setfirst] = useState(null)
	//console.log(first);
	
  // 	const [data, setData] = useState<Array<News>>([]);

  // 	const newDate: News[] = []
  // 	newDate.push(data[0],data[1],data[2])

  useEffect(() => {
    //  async function fetchData() {
    //    const result = await axios.get(
    //      "http://127.0.0.1:8000/api/conf/"
    //    );
    //    setData(result.data);
    //  }

    //  fetchData();


   //  async function fetchData() {
   //    try {
   //      const data = await fetchContacts();
	// 	setfirst(data)
   //    } catch (error) {
   //      console.error("Error fetching data:", error);
   //    }
   //  }
	
  }, []);

//   console.log(
//     ff().then((res) => {
//       console.log(res);
//     })
//   );

  return (
    <>
      <div
        className={s["home"]}
        style={{ fontSize: "40px", textAlign: "center" }}
      >
        Home{" "}
      </div>
      <Slider slides={slides} />
      <NewsFeed></NewsFeed>
    </>
  );
};
