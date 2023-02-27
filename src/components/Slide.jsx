// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// img
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';

// JSX
export const Slide = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Img1} alt='Image' className='img-st' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt='Image' className='img-st' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='Image' className='img-st' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
