import { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import Production from '../../components/Production/Production';

import categories from '../../data/categories.json';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cakes, setCakes] = useState([]);

  
  useEffect(() => {
    fetch(`https://64e5c4a909e64530d17efcf9.mockapi.io/productions${categories[activeIndex].request}`)
      .then((data) => data.json())
      .then((cakes) => setCakes(cakes))
      .catch((e) => console.log(e));
  }, [activeIndex]);

  return (
    <>
      <Slider />
      <Categories
        categories={categories}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Production cakes={cakes} />
    </>
  );
};
export default Home;
