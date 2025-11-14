import Judul from "./partials/Judul";
import Filter from "./partials/Filter";
import Item from "./partials/Items";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import portfolio from "../utils/portfolio";
export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="portfolio" className="mt-10 mb-5 ">
      <div id="header" data-aos="fade-down">
        <Judul judul="Portfolio" />
        <div id="category" className="flex justify-center">
          <Filter name="All" />
        </div>
      </div>
      <div
        id="items"
        className="flex flex-wrap justify-center mt-5"
        data-aos="zoom-in"
      >
        {portfolio.map((item, index) => (
          <Item name={item.judul} img={item.img} link={item.link} key={index} />
        ))}
      </div>
    </div>
  );
}
