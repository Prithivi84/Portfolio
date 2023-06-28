import React from 'react'
import './services.css'
import Card from './card'
import Resume from '../img/Prithivi_resume.pdf'
import Figma from '../img/figma.png'
import react from '../img/react.png'
import Ux from '../img/laptop.png'
import {motion} from 'framer-motion'

export default function services(props) {

  const transition ={duration: 2, type: "spring"}
  return (
    <div className="service" id="services">
      <div className="left">
      <div className="name">
                    <span>My Awesome</span>
                    <span>services</span>
            
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sed ea optio nemo provident! Doloremque repellat ipsa libero ducimus nemo laboriosam explicabo deserunt, dolorum, n</span>
                 </div>
                 <a href={Resume} download>
            <button className='btn d-btn'>Download CV</button></a>
            <div className="s-blur" ></div>
      </div>
      <div className="cards">
       <motion.div 
       whileInView={{left: '14rem'}}
       initial={{left: '25rem'}}
       transition={transition} 
       style={{left: '14rem'}}>
        <Card emoji={Figma} heading={"Design"} detail={"Figma, Sketch, Photoshop, Adobe Illustrator"} color={props.color}></Card>
       </motion.div>
       <motion.div
        whileInView={{left: '-4rem'}}
        initial={{left: '-15rem'}}
        transition={transition} 
       style={{top:'12rem', left: '-4rem'}}>
        <Card emoji={react} heading={"Developer"} detail={"Html, Css, JavaScript, React, PHP"} color={props.color}></Card>
       </motion.div>
       <motion.div 
        whileInView={{top: '19rem'}}
        initial={{top: '25rem'}}
        transition={transition} 
       style={{top:'19rem', left: '12rem',
          }}>
        <Card emoji={Ux} heading={"UI/UX"} detail={"Figma, Adobe Illustrator"} color={props.color}></Card>
       </motion.div>
       <div className="s-blur2" style={{background:'#7bddf1e6'}}></div>
      </div>
    </div>
  )
}
