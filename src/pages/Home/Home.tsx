import qs from 'qs';
import { useRef } from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  resetFilters,
  selectFilter,
  setFilters,
  filterSliceState
} from '../../redux/slices/filterSlice';
import {
  fetchCakesCount,
  fetchCakesPage,
  selectCakes,
} from '../../redux/slices/cakesSlice';

//import components
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import Production from '../../components/Production/Production';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';

// import categories from back
import categories from '../../data/categories.json';
import { useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const { activePage, searchValue, categoryIndex } = useSelector(selectFilter);

  const { cakes, cakesCount, status } = useSelector(selectCakes);

  const limit = 8; // Количество товаров на одной странице
  const paginationRequest = `page=${activePage}&limit=${limit}`;
  const searchRequest = searchValue && `&name=${searchValue}`;
  const categoryRequest = categories[categoryIndex].request;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as { page: string, category: string };
      dispatch(setFilters(params));
    }
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchCakesCount({ categoryRequest, searchRequest })); // for pagination
    dispatch(
      fetchCakesPage({ categoryRequest, searchRequest, paginationRequest }),
    ); // get one of pages
  }, [categoryRequest, searchRequest, paginationRequest]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: categoryIndex,
        page: activePage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryIndex, activePage]);

  return (
    <>
      <Slider />
      <Categories
        categories={categories}
        activeIndex={categoryIndex}
      />
      <Search />
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
