import React from 'react'
import './work.css'
import Py from '../img/python.png'
import Sql from '../img/mysql-workbench.png'
import Php from '../img/applications-php.png'
import Node from '../img/nodejs.png'
import Java from '../img/java.png'
import {motion} from 'framer-motion'

export default function work() {
  return (
    <div className="work" id="works"> 
      <div className="left">
      <div className="name">
                    <span>Works with All these</span>
                    <span>Languages & Servers</span>
            
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sed ea optio nemo provident! Doloremque repellat ipsa libero ducimus nemo laboriosam explicabo deserunt, dolorum, n</span>
                 </div>
            {/* <button className='btn d-btn'>Download CV</button> */}
            <div className="s-blur" ></div>
      </div>
      <div className="R">
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate:0}}
        viewport={{margin: '-40px'}}
        transition={{duration:3.5, type: 'spring'}}
        className="m-circle">
            <div className="s-circle">
                <img src={Py} alt="" />
            </div>
            <div className="s-circle">
                <img src={Sql} alt="" />
            </div>
            <div className="s-circle">
                <img src={Java} alt="" />
            </div>
            <div className="s-circle">
                <img src={Php} alt="" />
            </div>
            <div className="s-circle">
                <img src={Node} alt="" />
            </div>
        </motion.div>
        <div className="b-circle1"></div>
        <div className="b-circle2"></div>
      </div>
    </div>
  )
}
