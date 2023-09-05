import { useEffect, useState } from 'react';
//import styles
import styles from './Home.module.scss';

//import components
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import Production from '../../components/Production/Production';
import Search from '../../components/Search/Search';

// import categories from back
import categories from '../../data/categories.json';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cakes, setCakes] = useState(new Array(4).fill(null));
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const filteredCakes = cakes.filter((cake) =>
    cake?.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    fetch(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions${categories[activeIndex].request}`,
    )
      .then((data) => data.json())
      .then((cakes) => {
        setCakes(cakes);
        setIsLoading(false);
      })
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
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Production
        cakes={filteredCakes}
        isLoading={isLoading}
      />
      <Pagination />
    </>
  );
};
export default Home;
