import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination,Navigation } from 'swiper';
import {AiOutlineArrowRight ,AiOutlineArrowLeft} from 'react-icons/ai'
import {HiExternalLink} from 'react-icons/hi'
import './caruosal.css'
export default function Caruosel({slides,title,icon}) {
  return (

<div id='MOTORCYCLE' className='relative flex justify-center align-middle w-full p-5 bg-blue-100'>
     <div className=' md:w-4/5  lg:w-4/5  p-3  sm:w-4/5  overflow-hidden'>
        <div><h3 className='stroke-txt'>{title}</h3>
         <br /><h3 className='txt'>{title}</h3></div>
         <br />
     <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     loop={true}
     slidesPerView={'auto'}
     coverflowEffect={{
        rotate:0,
        stretch:0,
        dept:100,
        modifier:2.5,
     }}
     pagination={{el:'.swiper-pagination',clickable:true}}
     navigation={{nextEl:'.swiper-button-next ',
                  prevEl:'.swiper-button-prev ',
                  clickable:true,}}
                  
     modules={[EffectCoverflow,Pagination,Navigation]}
     className='swiper_container' >
    {slides.map((obj,index)=>{
      return (<SwiperSlide key={index}>
                <img src={obj.img} alt="" />
                <div className='stroke'>{obj.name}</div>
                <span className='absolute xl:text-4xl right-16  lg:text-4xl  cursor-pointer'><HiExternalLink></HiExternalLink></span>
              </SwiperSlide>)
    })}
    <div className='slider-controler'>
        <div className='swiper-button-prev-slider-arrow'>
            <ion-icon name="arrow-back-outline" >
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </ion-icon>
        </div>
        <div className='swiper-button-next-slider-arrow'>
            <ion-icon name="arrow-forward-outline" >
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </ion-icon>
        </div>
        <div className="swiper-pagination"></div>
    </div>
   </Swiper>

     </div>

</div>
  )
}
