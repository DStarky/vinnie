import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import styles from './Slider.module.scss'

import SingleSlide from '../SingleSlide/SingleSlide';

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.Swiper}`}
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