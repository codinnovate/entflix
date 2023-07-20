import { Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

const LatestMovies = () => {
  return (
    <div className='flex bg-[#19161f] border-[#2c2b31] pb-1 border-b-[1px]'>
      <div className='flex items-center place-content-between w-full p-2'>
        <div className='flex rounded-full shadow-2xl bg-[#19161f] ring-2 ring-[#2c2b31]'>
        
          <input
            type='text'
            placeholder='Search'
            className='outline-none rounded-full w-[9em] mx-1   p-1 bg-inherit'
          />
            <IconButton style={{backgroundColor:'#19161f', color:'white'}}>
          <Search    />
          </IconButton>
        </div>

        <IconButton>
          <Avatar
            fontSize="large"
            
          />
        </IconButton>
      </div>
      
          
    </div>
  )
}

export default LatestMovies