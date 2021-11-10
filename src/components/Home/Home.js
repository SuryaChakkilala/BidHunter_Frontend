import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className="home">
            <div>
                <img className="home_image" src='marvel-spider-man-miles-morales-iz.jpg' alt='R' />
                <div className="home_row">
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                </div>
                <div className="home_row">
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                </div>
                <div className="home_row">
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                    <Product title="Spiderman" price={55} image="dbz.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home
