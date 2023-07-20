import React from 'react'
import Header from '../Header'
import LatestMovies from '../LatestMovies'
import Navbar from '../Navbar'
import WallVideo from '../WallVideo'
// import Row from '../Row'
// import requests from '../../Requests';

const Home = () => {
    return (
    <div className="mx-auto w-full max-w-[90em] max-h-screen overflow-hidden">
      <div className='md:grid md:grid-cols-10'>
        <div className='md:col-span-2'>
       <Navbar />
          </div>
          <div className='md:col-span-6 flex flex-col   w-full mx-auto bg-[#2c2b31] mb-10'>
            {/* <MovieSlide /> */}
            <Header />
            <div className='max-h-screen scrollbar-thin overflow-y-auto scrollbar-thumb-red-600 scrollbar-track-stone-900 scrollbar-rounded-full'>
            <WallVideo />
            </div>
          </div>
          <div className='md:col-span-2 border-[#2c2b31] border-l-[1px] bg-[#19161f]'>
            {/* <Row  title='Popular' fetchURL={requests.requestPopular} /> */}
            <LatestMovies />
          </div> 
        </div>
        
          </div>
    
  )
}

export default Home