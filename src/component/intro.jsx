import React from 'react'
import './intro.css'
// import Github from '../../src/img/github.png'
// import Linkdin from '../../src/img/linkedin.png'
// import Insta from '../../src/img/instagram.png'
import Portfolio from '../../src/img/profile.png'
import Css from '../../src/img/css3.png'
import Busi from '../../src/img/businessman-with-target.png'
import emoji from '../../src/img/eye-glasses.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'
import {motion} from 'framer-motion'

export default function intro() {

  const transition ={duration: 2, type: "spring"}

  return (
    <div className="intro">
        <div className="left">
            
                <div className="name">
                    <span>Hy! I Am</span>
                    <span>Prithivi Sharma</span>
            
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea optio nemo provident! Doloremque repellat ipsa libero ducimus nemo laboriosam explicabo deserunt, dolorum, n</span>
                 </div>
            <button className='btn intro-btn'>Hire me</button>

            <div className='icon'>
                <a href="/"><Insta color='#6c59d9' size='5rem'></Insta></a>
                <a href="/"><Facebook color='#6c59d9' size='5rem'></Facebook></a>
                <a href="/"><Git color='#6c59d9' size='5rem'></Git></a>
            </div>
        </div>
        <div className="right">
             <div className="port">
            <img src={Portfolio} alt="" className="portfolio" />
              </div> 
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={emoji} alt="" className="emo"/>
            <motion.div
            initial={{top: '-4%', left: '90%'}}
            whileInView={{left: '68%'}}
            style={{top:'-4%', left: '68%'}}
            className='floating'>

            <img src={Css} alt="" className="css" />
            </motion.div>
            <motion.div 
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '2rem'}}
            transition={transition}
            style={{bottom:'10%'}}
            className='floating'>

            <img src={Busi} alt="" className='Busi'/>
            </motion.div>
            <div className="blur" ></div>
            <div className="blur2" ></div>
            {/* <img src={Vector} alt="" className="vector" /> */}
        </div>
      
    </div>
  )
}
