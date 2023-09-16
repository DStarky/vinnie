import qs from 'qs';
import { useRef } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  resetFilters,
  selectFilter,
  setFilters,
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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  const { activePage, searchValue, categoryIndex } = useSelector(selectFilter);

  const { cakes, cakesCount, status } = useSelector(selectCakes);

  const limit = 8; // Количество товаров на одной странице
  const paginationRequest = `page=${activePage}&limit=${limit}`;
  const searchRequest = searchValue && `&name=${searchValue}`;
  const categoryRequest = categories[categoryIndex].request;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const filteredParams = {categoryIndex : params.category, activePage: params.page}
      dispatch(setFilters({...filteredParams}));
    }
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // @ts-ignore
    dispatch(fetchCakesCount({ categoryRequest, searchRequest })); // for pagination
    dispatch(
      // @ts-ignore
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
