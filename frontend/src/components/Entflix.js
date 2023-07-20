import React from 'react'
import { Link } from 'react-router-dom'
const Entflix = () => {
  return (
      <div className='flex items-center place-content-between p-4 z-30 w-full absolute'>
          <Link to='/home'>
          <h1 className='text-red-600 text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer'>ENTFLIX</h1>              
          </Link>
          <div className='flex items-center justify-center'>
              <Link to='/login'>
              <button className='text-white hidden md:flex mr-4 px-6 py-1 hover:border-red-600 border-2'>Sign In</button>                  
              </Link>
              <Link to='/signup'>
              <button className='bg-red-600 px-6 py-1 border-2 border-red-600  cursor-pointer text-white'>Sign Up</button>                  
              </Link>
          </div>
      </div>
  )
}

export default Entflix