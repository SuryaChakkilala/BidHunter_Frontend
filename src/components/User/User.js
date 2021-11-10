import React from 'react'
import './User.css'
import HomeIcon from '@mui/icons-material/Home'
import {Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'

function User() {
    const obj = {
        name: 'name123',
        email: 'email123',
        phn: '1234567890',
        username: 'username123'
    }

    return (
        <div className='user'>
            <Link to='/home'>
                <div className='user_home'>
                    <h2>Go To Home </h2>
                    <div className='user_home_icon'>
                        <HomeIcon />
                    </div>
                </div>
            </Link>
            <Paper elevation={4}>
                <h1 className='user_name'>Hi, {obj.username}!</h1>
                <div className='user_info'>
                    <h2>Details:</h2>
                    <div className='user_info_entry'>
                        Name: {obj.name}
                    </div>
                    <div className='user_info_entry'>
                        Username: {obj.username}
                    </div>
                    <div className='user_info_entry'>
                        Email: {obj.email}
                    </div>
                    <div className='user_info_entry'>
                        Phone Number: {obj.phn}
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default User
