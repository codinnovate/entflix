import { RemoveRedEyeOutlined,  VisibilityOffOutlined } from '@mui/icons-material'
import './pages/Login.css'
import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'



const LoginForm = () => {

    const [togglepassword, setTogglepassword] = useState(false)

    function Clickpass() {
        setTogglepassword(!togglepassword);
    }
    
    return (
        <div className='flex justify-center my-10 p-20 overflow-hidden '>
            <div className='bg-wrapper  rounded-lg p-10'>
                <div className='flex flex-col p-7'>
                    <h2 className='text-white text-2xl md:text-3xl font-bold my-2'>Sign In</h2>

                    <div className='flex items-center justify-center'>
                        <form className=''>
                            <div className='my-4'>
                                <input
                                    name = 'username'
                                    placeholder='Email or Username'
                                    className='outline-none rounded-sm w-[20em] p-3   text-[#8d8b88] bg-[#333333]' />
                            </div>

                            <div className=''>
                                <input
                                    type={togglepassword ? 'password' :'text'}
                                    name = 'password'
                                    placeholder='Password'
                                    className='outline-none rounded-sm w-[20em] p-3   text-[#8d8b88] bg-[#333333]' />
                                <div className=' relative  -top-[2.7em] left-[17.5em]'>
                                    {
                                        togglepassword ? <IconButton onClick={Clickpass}>
                                                    <VisibilityOffOutlined />
                                        </IconButton> :
                                            <IconButton onClick={Clickpass}>
                                            <RemoveRedEyeOutlined  />

                                    </IconButton>
                                    }
                                    
                                </div>
                            </div>
                            <div className='mb-4'>
                            <button className=' w-[20em] bg-red-600 p-3 rounded-sm text-white text-center'>Sign In</button>
                            </div>
                        <div className='flex place-content-between'>
                        <div className='flex items-center '>
                            <input type='checkbox' className='w-4 h-4 bg-red-600'/>
                            <p className='text-white text-sm ml-1'>Remember me</p>
                        </div>
                        <div className=''>
                              <p className='text-white text-sm hover:underline'>Need help?</p>
                        </div>

                            </div>
                            <div className='mt-6 flex'>
                                <p className='text-[#8d8b88]'>New Here ?</p><Link to='/signup'><p className=' ml-2 text-white hover:underline'>Sign Up now</p></Link>
                            </div>
                        </form>

                    </div>
                    
    

                    
             </div>

            </div>
            
        </div>
    )
}

export default LoginForm
