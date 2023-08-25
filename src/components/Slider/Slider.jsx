import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import styles from './Slider.module.scss'

import SingleSlide from '../SingleSlide/SingleSlide';

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
        <SwiperSlide className={styles.Slide}><SingleSlide /></SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.Slide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider