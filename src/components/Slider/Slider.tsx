// Import libraries 
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import components and data
import slides from '../../data/slides.json';
import styles from './Slider.module.scss'
import SingleSlide from '../SingleSlide/SingleSlide';




// Compontent
const Slider = () => {
  const isMoreThan769 = useMediaQuery({ minWidth: 769 });

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper`}
        style={isMoreThan769 ? { height: 50 + 'vh' } : { height: 35 + 'vh' }}
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