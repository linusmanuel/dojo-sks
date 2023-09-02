'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'
// import './swiper.css'

const ArrowSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
      <path d="M9.33188 2.83301L8.31338 3.83176L12.344 7.79134H3.55316V9.20801H12.344L8.31338 13.1676L9.33188 14.1663L15.1106 8.49967L9.33188 2.83301Z"/>
    </svg>
  )
}

export function Gallery() {
  return (
    <section className="b-gallery">
      <h2 className="b-gallery__title">Galeria de fotos</h2>
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
          <picture className='b-gallery__image'>
            <img src="/images/image-3.jpg" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture className='b-gallery__image'>
            <img src="/images/banner1.jpg" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture className='b-gallery__image'>
            <img src="/images/image-4.jpg" alt="" />
          </picture>
        </SwiperSlide>
        
      </Swiper>
      <a className="b-gallery__link" href="#">Ir para galeria <ArrowSVG/></a>
    </section>   
  )
}