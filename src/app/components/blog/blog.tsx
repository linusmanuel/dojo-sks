'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Card } from '../card/card'
import './style.css'
import './swiper.css'
import 'swiper/css';

export function Blog() {
  return (
    <section className="b-blog">
      <h2 className="b-blog__title">Blog</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}