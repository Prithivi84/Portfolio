import React from 'react'
import './card.css'


export default function card(props) {
  return (
    <div className="card">
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span style={{color:props.color? '#cfd0de':''}}>{props.detail}</span>
      <button className="c-btn">Learn more</button>
    </div>
  )
}
