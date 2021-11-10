import React from 'react'
import Product from '../Product/Product'
import './Ongoing.css'

const bidList = [
    {
        id: 445,
        title: 'product1',
        description: 'desc1',
        currentValue: 55,
        initialValue: 23,
        image: "R.jpg"
    },
    {
        id: 446,
        title: 'product2',
        description: 'desc2',
        currentValue: 34,
        initialValue: 11,
        image: "dbz.jpg"
    },
    {
        id: 244,
        title: 'product3',
        description: 'desc3',
        currentValue: 444,
        initialValue: 144,
        image: "marvel-spider-man-miles-morales-iz.jpg"
    }
]

function Ongoing() {
    return (
        <div className="ongoing_page">
            <div className="ongoing_product_list">
                {bidList.map(bid=> <Product title={bid.title} image={bid.image} price={bid.currentValue} />)}
            </div>
        </div>
    )
}

export default Ongoing
