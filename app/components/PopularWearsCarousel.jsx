'use client';
import Wear from './Wear';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const PopularWearsCarousel = ({ wears }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='popular-bike-slider mb-8'
    >
      {wears.map((wear) => {
        return (
          <SwiperSlide key={wear._id}>
            <Wear wear={wear} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularWearsCarousel;
