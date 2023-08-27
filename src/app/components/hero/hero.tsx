'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
import './swiper.css'

export function Hero() {
  return (
    <section className='b-hero'>
      <div className='bg-overlay'></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
      >
        <SwiperSlide>
          Cada um deve buscar o aperfeiçoamento do seu <span>carácter</span> 
        </SwiperSlide>
        <SwiperSlide>
          Cada um deve ser fiel e proteger o caminho da <span>sinceridade</span> 
        </SwiperSlide>
        <SwiperSlide>
          Cada um deve nutrir o espírito do <span>esforço</span>
        </SwiperSlide>
        <SwiperSlide>
          Cada um deve respeitar os outros e as regras de <span>etiqueta</span>
        </SwiperSlide>
        <SwiperSlide>
          Cada um deve ter o <span>auto-controlo</span>
        </SwiperSlide>
      </Swiper>
      
    </section>
  )
}


