import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import styles from './Slider.module.scss'

import SingleSlide from '../SingleSlide/SingleSlide';

import slides from '../../data/slides.json';

const Slider = () => {
  const isMoreThan769 = useMediaQuery({ minWidth: 769 });

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={`mySwiper`}
        style={isMoreThan769 ? { height: 70 + 'vh' } : { height: 35 + 'vh' }}
      >
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.id} className={styles.Slide} style={isMoreThan769 ? { borderRadius: 2.4 + 'rem' } : {}}>
              <SingleSlide {...slide} />
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}
export default Slider