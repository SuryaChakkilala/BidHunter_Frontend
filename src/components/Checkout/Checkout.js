import React from 'react'
import './Checkout.css'
import SubTotal from '../SubTotal/SubTotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div>
                    <h2 className='checkout_title'>Shopping Basket</h2>
                </div>
            </div>

            <div className='checkout_right'>
                <h2>The SubTotal will go here.</h2>
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
