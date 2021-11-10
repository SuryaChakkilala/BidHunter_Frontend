import React from 'react'
import './Product.css'
import Button from '@mui/material/Button'

function Product({title, price, image}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small><strong>{price}</strong>
                </p>
            </div>
            <img className='product_image' src={image} alt={title} />
            <Button>View Bids</Button>
        </div>
    )
}

export default Product
