import React from 'react'
import './offer.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='Offer'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>

    </div>
  )
}

export default Offer