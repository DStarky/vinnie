import { useState } from "react";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";

const categories = ['Все', 'Новинки', 'Выпечка', 'Пирожные', 'Без сахара', 'Торты', 'Печенье'];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Slider />
      <Categories categories={categories} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  )
}
export default Home