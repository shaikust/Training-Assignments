import React from 'react'
import './product.css'

const Product=({ image, name, description, price, rating }) =>{
  return (
    <div className="product">
      <img  src={image} alt={name} className="product-image"/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <div className="buttons">
        <button>Like</button>
        <button>Share</button>
        <button>Purchase</button>
      </div>
    </div>
  )
}

export default Product