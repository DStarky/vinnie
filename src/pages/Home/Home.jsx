import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
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
  const [cakes, setCakes] = useState([]);
  const [count, setCount] = useState(4); // Общее количество товар на бэке
  const [isLoading, setIsLoading] = useState(true);

  const { activePage, searchValue, activeIndex } = useSelector((state) => ({
    activePage: state.filter.activePage,
    searchValue: state.filter.searchValue,
    activeIndex: state.filter.categoryIndex,
  }));

  const limit = 8; // Количество товаров на одной странице
  const paginationRequest = `page=${activePage}&limit=${limit}`;

  const filteredCakes = cakes.filter((cake) =>
    cake?.name?.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    // Get pagination
    fetch(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${categories[activeIndex].request}&${paginationRequest}`,
    )
      .then((data) => data.json())
      .then((cakes) => {
        setCakes(cakes);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));

    // Get all products
    fetch(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${categories[activeIndex].request}`,
    )
      .then((data) => data.json())
      .then((cakes) => {
        setCount(cakes.length);
      })
      .catch((e) => console.log(e));
  }, [activeIndex, activePage, count]);

  // QUERY STRING

  useEffect(() => {
    const queryString = qs.stringify({
      category: activeIndex,
      page: activePage,
    });
    console.log(queryString);
  }, [activeIndex, activePage]);

  return (
    <>
      <Slider />
      <Categories
        categories={categories}
        activeIndex={activeIndex}
      />
      <Search />
      <Production
        cakes={filteredCakes}
        isLoading={isLoading}
      />
      <Pagination
        count={count}
        limit={limit}
      />
    </>
  );
};
export default Home;
