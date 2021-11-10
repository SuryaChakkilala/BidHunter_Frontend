import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

function Header() {
    return (
        <div>
            <div className="header">
                <span className="header_title"> BidHunter </span>
                <img className="header_logo" src='logo192.png' alt='logo' />
                <div className="header_search">
                    <input className="header_search_input" type="text" placeholder="Search" />
                    <SearchIcon  className="header_search_icon"/>
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        <span className="header_option_l1">Hello</span>
                        <span className="header_option_l2">Sign In</span>
                    </div>
                    <div className="header_option">
                        <span className="header_option_l1">Hello</span>
                        <span className="header_option_l2">Sign In</span>
                    </div>
                    <div className="header_option">
                        <span className="header_option_l1">Hello</span>
                        <span className="header_option_l2">Sign In</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
