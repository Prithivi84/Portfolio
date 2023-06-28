import React from 'react'
import './projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Project1 from '../img/Pizza_project.png'
import Project2 from '../img/VPN_project.png'
import Project3 from '../img/Curd_project.png'
import Project4 from '../img/CHAT_project.png'
import 'swiper/css'


export default function projects(props) {

    
  return (
    <div className="project">
        <span style={{color:props.color?'white':''}}>React Project</span>
        <span>Projects</span>

        <Swiper
        spaceBetween={30} 
        slidesPerView={3} 
        grabCursor={true} 
        className='project-slider'>
            <SwiperSlide>
                <img src={Project1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project4} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
