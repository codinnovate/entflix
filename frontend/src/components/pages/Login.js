import React from 'react'
import './Login.css'
import Entflix from '../Entflix'
import LoginForm from '../LoginForm'

const Login = () => {
    return (
        <div className='bg'>
            <div className='bg-wrap flex flex-col '>
                <Entflix />
                <LoginForm />
                
            </div>
        </div>
    )
}

export default Login
