import React from 'react'
import './Test.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../img/mugshot.png'
import profilePic2 from '../img/opensonic.png'
import profilePic3 from '../img/puzzlemoppet.png'
import profilePic4 from '../img/steam_icon_215160.png'
import { Autoplay, Pagination } from 'swiper'

import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/autoplay';
import { themeContext } from '../Context';
import { useContext } from 'react';

export default function Test() {

    const theme = useContext(themeContext);
	const darkMode= theme.state.darkMode;

    
    

    const clients=[
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum veniam expedita libero voluptas illum facilis sint nisi. Provident quos maxime doloremque commodi et, quaerat enim voluptate nihil omnis aperiam."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum veniam expedita libero voluptas illum facilis sint nisi. Provident quos maxime doloremque commodi et, quaerat enim voluptate nihil omnis aperiam."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum veniam expedita libero voluptas illum facilis sint nisi. Provident quos maxime doloremque commodi et, quaerat enim voluptate nihil omnis aperiam."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum veniam expedita libero voluptas illum facilis sint nisi. Provident quos maxime doloremque commodi et, quaerat enim voluptate nihil omnis aperiam."
        },
        
    ];
  return (
    <div className="test" id="Tests">
      <div className="t-head">
        <span>Clients who used My </span>
        <span>Exceptional </span>
        <span>Work</span>
        <div className="tblur1"></div>
        <div className="tblur2"></div>
      </div>
        <Swiper
        
        modules={[Autoplay,Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={{clickable: true}}

        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className="t-box">
                        <img src={client.img} alt="" />
                        <span style={{color:darkMode? '#e0daec':'',}}>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}
// #e0daec