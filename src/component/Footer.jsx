import React from 'react'
import './Footer.css'
import Wave from '../img/wave2.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'

export default function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="inside">

        <span>prithivi.shrama.84@gmail.com</span>
        <div className="ficon">
        <Insta color='white' size='3rem'></Insta>
        <Facebook color='white' size='3rem'></Facebook>
        <Git color='white' size='3rem'></Git>
        </div>
        </div>
    </div>
  )
} 
