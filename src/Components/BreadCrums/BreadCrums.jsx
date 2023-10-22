import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../assests/breadcrum_arrow.png'

export const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home
        <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
