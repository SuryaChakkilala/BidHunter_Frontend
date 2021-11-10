import React from 'react'
import Paper from '@mui/material/Paper'
import './Login.css'
import { TextField } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button'
import DomainIcon from '@mui/icons-material/Domain'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import {useState} from 'react'
import {useHistory} from 'react-router-dom' 

function Login({login, setLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleUsername = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(username.length===0 || password.length===0) {
            return
        }
        setUsername('')
        setPassword('')
        setLogin(true)
        history.push('/home')
    }

    const secondHandler = (event) => {
        event.preventDefault()
        setUsername('')
        setPassword('')
        setLogin(false)
        history.push('/home')
    }
    return (
        <div className="login">
            <video src="pexels-gabby-k-7429357.mp4" autoPlay loop muted />
            <div className="login_con">
                <div className="login_container">
                    <Paper elevation={5} className="login_paper" background>
                        <div className="login_bid">
                            <div className="login_bid_icon">
                                <DomainIcon />
                            </div>
                            <h2>BidHunter</h2>
                            <div className="login_bid_icon">
                                <AttachMoneyIcon />
                            </div>
                        </div>
                        <div className="login_title">
                            <h1>Login</h1>
                            <AccountCircle className="login_acc_icon" />
                        </div>
                        <h3 className="login_instruction">Enter Your Username and Password in the below fields</h3>
                        <div className="login_form">
                            <form onSubmit={submitHandler}>
                                <div className="login_textfield">
                                    <TextField fullWidth id="username" label="Username" variant="outlined" onChange={handleUsername}/>         
                                </div>
                                <div className="login_textfield">
                                    <TextField fullWidth type="password" id="password" label="Password" variant="outlined" onChange={handlePassword} />          
                                </div>
                                <div className="login_button_row">
                                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                                    <Button variant="outlined" onClick={secondHandler}>Proceed without Logging In</Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default Login
