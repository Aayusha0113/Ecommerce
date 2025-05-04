import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                <p>Rs.{props.new_price}</p>
            </div>
            <div className="item-price-old">
            <p>Rs.{props.old_price}</p>
            </div>
        </div>

    </div>
  )
}

export default Item