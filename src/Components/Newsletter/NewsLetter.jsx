import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On your Email</h1>
        <p>Subsribe to our Newsletter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email' name="" id="" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
