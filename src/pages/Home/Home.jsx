import qs from 'qs';
import { useRef } from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../../redux/slices/filterSlice';
import { fetchCakesCount, fetchCakesPage } from '../../redux/slices/cakesSlice';

//import styles
import styles from './Home.module.scss';

//import components
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import Production from '../../components/Production/Production';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';

// import categories from back
import categories from '../../data/categories.json';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  // const [cakes, setCakes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const { activePage, searchValue, activeIndex } = useSelector((state) => ({
    // Способ фильтрации продуктов
    activePage: state.filter.activePage,
    searchValue: state.filter.searchValue,
    activeIndex: state.filter.categoryIndex,
  }));

  const { cakes, cakesCount, status } = useSelector((state) => state.cakes);

  const limit = 8; // Количество товаров на одной странице
  const paginationRequest = `page=${activePage}&limit=${limit}`;
  const searchRequest = searchValue && `&name=${searchValue}`;
  const categoryRequest = categories[activeIndex].request;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters({ ...params }));
    }
  }, []);

  // const fetchCakesWithPagination = () => {
  //   fetch(
  //     `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${paginationRequest}&${categoryRequest}`,
  //   )
  //     .then((data) => data.json())
  //     .then((cakes) => {
  //       setCakes(cakes);
  //       setIsLoading(false);
  //     })
  //     .catch((e) => console.log(e));
  // };
  // const fetchCakesCount = () => {
  //   fetch(
  //     `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${categoryRequest}`,
  //   )
  //     .then((data) => data.json())
  //     .then((cakes) => {
  //       setCount(cakes.length);
  //     })
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchCakesCount({ categoryRequest, searchRequest })); // for pagination
    dispatch(fetchCakesPage({ categoryRequest, searchRequest, paginationRequest })); // get one of pages

    // fetchCakesWithPagination();
    // fetchCakesCount();
  }, [categoryRequest, searchRequest, paginationRequest]);

  // QUERY STRING

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: activeIndex,
        page: activePage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [activeIndex, activePage]);

  return (
    <>
      <Slider />
      <Categories
        categories={categories}
        activeIndex={activeIndex}
      />
      <Search searchValue={searchValue} />
      <Production
        cakes={cakes}
        status={status}
      />
      <Pagination
        count={cakesCount}
        limit={limit}
        activePage={activePage}
      />
    </>
  );
};
export default Home;
