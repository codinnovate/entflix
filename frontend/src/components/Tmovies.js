import { IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Tmovies() {
    const movie_data = [
        {
            title: "The Woman King",
            poster: "https://th.bing.com/th/id/OIP.rxxR1iZEirGlnM1Ansq1EgHaE8?pid=ImgDet&rs=1",
        },
        {
            title: "Black Panther",
            poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg"
        },
          {
            title: "The Mandalonian",
            poster: "https://th.bing.com/th/id/R.8b34a83371e26928c9e0fee86731ef99?rik=4y%2boTGJ6rmcF6g&riu=http%3a%2f%2fgannonknight.com%2fwp-content%2fuploads%2f2020%2f01%2fmandalorian.jpg&ehk=lj2m085Cdf17N62y5%2b7JxBWYrbpqT4wqN1fFEgwJL2c%3d&risl=&pid=ImgRaw&r=0"
        },
        //  {
        //     title: "SAS:Red Notice 2021",
        //     poster: "https://otakukart.com/wp-content/uploads/2021/03/wrlxe-6YKYM1CNKZH-Full-Image_GalleryBackground-en-US-1615915689822._SX1080_-1024x576.jpg"
        // },
          {
            title: "The Mandalonian",
            poster: "https://th.bing.com/th/id/R.8b34a83371e26928c9e0fee86731ef99?rik=4y%2boTGJ6rmcF6g&riu=http%3a%2f%2fgannonknight.com%2fwp-content%2fuploads%2f2020%2f01%2fmandalorian.jpg&ehk=lj2m085Cdf17N62y5%2b7JxBWYrbpqT4wqN1fFEgwJL2c%3d&risl=&pid=ImgRaw&r=0"
        },
        
    ]
  return (
      <div className='p-2'>
          <div className='flex place-content-between items-center'>
              <h1 className='text-white font-sans font-[600]'>Trending movies</h1>
              <IconButton>
              <span className='text-gray-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-direction-sign" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3.32 12.774l7.906 7.905c.427 .428 1.12 .428 1.548 0l7.905 -7.905a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548z"></path>
   <path d="M8 12h7.5"></path>
   <path d="M12 8.5l3.5 3.5l-3.5 3.5"></path>
</svg>
              </span>
              </IconButton>
          </div>
<div class=" flex  scrollbar-thin scrollbar-rounded-full scrollbar-thumb-[#fcb69f] scrollbar-track-[#ffecd2]">
                  {movie_data.map((item, index) => {
                      return (
                          <Link className='flex flex-col justify-center items-center mb-3 mx-2' to='/' key={item.index}>
                              <div className=''>
                                  <img src={item.poster} alt='movie display poster' className='h-[248px]  rounded-lg  w-[200px]' />
                              </div>

                                  <div className='flex my-2'>
                                      <h3 className='font-bold text-xl text-black'>{item.title}</h3>
                                  </div>
                                  
                                  

                          </Link>
                      )
                  })}
          </div>
      </div>
  )
}

export default Tmovies