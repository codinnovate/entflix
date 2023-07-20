import React from 'react'
import './Login.css'
import Entflix from '../Entflix'
import SignupForm from '../SignupForm'

const Signup = () => {
    return (
        <div className='bg'>
            <div className='bg-wrap flex flex-col '>
                <Entflix />
                <SignupForm />
                
            </div>
        </div>
    )
}

export default Signup
