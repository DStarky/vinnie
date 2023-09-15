import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './SingleProduct.module.scss';
import Production from '../../components/Production/Production';
import NotFound from '../NotFound/NotFound';
import AddBasket from '../../components/CardButtons/AddBasket';
import { useSelector } from 'react-redux';
import { selectCakes } from '../../redux/slices/cakesSlice';

const SingleProduct: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [cake, setCake] = useState<{
    name: string;
    price: number;
    category: string;
    properties: [];
    weight: string;
    description: string;
    link: string;
    slug: string;
    id: number;
    image: string;
  }>();
  const [similar, setSimilar] = useState([]);
  const { status } = useSelector(selectCakes);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    const getPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?slug=${slug}`,
        );
        setCake({ ...data[0], id: Number(data[0].id) });
        setIsLoading(false);
      } catch (error) {
        alert(
          'Товар не найден, вы будете автоматически перемещены на главную страницу',
        );
        navigate('/');
      }
    };
    getPizza();
  }, [slug]);

  useEffect(() => {
    const getSimilar = async () => {
      try {
        const { data } = await axios.get(
          `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?category=${cake?.category}`,
        );
        const filteredData = data.filter(
          (product: { name: string }) => product.name !== cake?.name,
        );

        setSimilar(filteredData.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        alert('Похожих товаров не найдено');
      }
    };

    if (!isLoading) {
      getSimilar();
    }
  }, [isLoading]);

  if (!cake) {
    return <>Загрузка ...</>;
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.LoadingParent}>
          <div className={styles.Loading}></div>
        </div>
      ) : (
        <div className={styles.Container}>
          <p className={styles.BreadCrumbs}>
            <Link to='/'>Главная</Link> / {cake.category} / {cake.name}
          </p>
          <article className={styles.Page}>
            <div className={styles.Cover}>
              <img
                src={cake.image}
                alt={cake.name}
                className={styles.Image}
              />
            </div>
            <div className={styles.Content}>
              <ul className={styles.Properties}>
                {cake.properties?.map((property, index) => {
                  return (
                    <li
                      className={styles.Property}
                      key={index}>
                      {property}
                    </li>
                  );
                })}
              </ul>
              <h2 className={styles.Name}>{cake.name}</h2>
              <p className={styles.Price}>
                <span>{cake.price}</span> руб.
              </p>
              <div className={styles.AddToBasket}>
                <AddBasket
                  {...cake}
                  text
                />
              </div>
              <p className={styles.Weight}>
                Вес: <span>{cake.weight}</span>
              </p>
              <p className={styles.Description}>{cake.description}</p>
            </div>
          </article>
          <div className={styles.Similar}>
            <h3 className={styles.FromCategory}>
              Другие товары из этой категории:
            </h3>
            <Production
              cakes={similar}
              status={status}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
