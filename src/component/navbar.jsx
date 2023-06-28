import React from 'react'
import './navbar.css'
import Toggle from './Toggle'
import {Link} from 'react-scroll'
import { UilBars } from '@iconscout/react-unicons'

export default function navbar(){

  
    return(
        <div className="navbar">
          <div className="head">
            <div className="name">Prithivi</div>
            <Toggle></Toggle>
          </div>
          <div className="menu">
            <div className="list">
              <ul>
                <Link spy={true} to='navbar' smooth={true} activeClass="activeClass">
                <li className="active">Home</li>
                </Link>
                <Link spy={true} to='services' smooth={true} activeClass="activeClass">

                <li>Servies</li>
                </Link>
                {/* <Link spy={true} to='achiev' smooth={true} activeClass="activeClass">

                <li>Experience</li>
                </Link> */}
                <Link spy={true} to='works' smooth={true} activeClass="activeClass">
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Tests' smooth={true} activeClass="activeClass">

                <li>Testimonials</li>
                </Link>
              </ul>
            </div>
            <Link spy={true} to='BTN' smooth={true} activeClass="activeClass">

            <button className="btn n-btn">
              Contact me
            </button>
            </Link>
            
          </div>
          
              <div className="menu-down">
              <button className="dropbtn"><i class="uil uil-bars"></i></button>
              <div className="menu2">
              <Link spy={true} to='navbar' smooth={true} activeClass="activeClass">
                <a href="#" className="active">Home</a>
                </Link>
                <Link spy={true} to='services' smooth={true} activeClass="activeClass">

                <a href="#" >Servies</a>
                </Link>
                <Link spy={true} to='achiev' smooth={true} activeClass="activeClass">

                <a href="#" >Experience</a>
                </Link>
                <Link spy={true} to='works' smooth={true} activeClass="activeClass">
                <a href="#" >Portfolio</a>
                </Link>
                <Link spy={true} to='Tests' smooth={true} activeClass="activeClass">

                <a href="#" >Testimonials</a>
                </Link>
              </div>
              </div>

        </div>
    )
}