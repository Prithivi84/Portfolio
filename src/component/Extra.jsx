import React from 'react'
import './Extra.css'

export default function Extra(props) {
  return (
    <div className="extra" style={{color:'black'}}>
        <img src={props.image} alt="" />
        <span>{props.text}<br/>{props.txt}</span>
    </div>
  )
}
