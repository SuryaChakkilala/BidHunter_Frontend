import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import {useHistory} from 'react-router-dom'

function Header({login, setLogin}) {
    const content = () => {
        if(!login)
            return "Login"
        return "Logout"
    }
    const history = useHistory()
    const clickHandler = () => {
        setLogin(!login)
        history.push('/login')
    }
    return (
        <div className="container">
            <div className="header">
                <Link to='/'>
                    <span className="header_title"> BidHunter </span>
                </Link>
                <img className="header_logo" src='logo192.png' alt='logo' />
                <div className="header_search">
                    <input className="header_search_input" type="text" placeholder="Search" />
                    <SearchIcon  className="header_search_icon"/>
                </div>
                <div className="header_nav">
                    <Link to='/user'>
                        <div className="header_option">
                            <span className="header_option_l1">Your</span>
                            <span className="header_option_l2">Profile</span>
                        </div>
                    </Link>
                    <Link to='/ongoing'>
                        <div className="header_option">
                            <span className="header_option_l1">Ongoing</span>
                            <span className="header_option_l2">Bids</span>
                        </div>
                    </Link>
                    <div className="header_logout">
                        <Button onClick={clickHandler}>{content()}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
