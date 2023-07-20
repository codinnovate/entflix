import React from 'react'
import Entflix from '../Entflix'
// import Header from '../Header'
import MovieSlide from '../MovieSlide'
import Row from '../Row'
// import Tmovies from '../Tmovies'
import requests from '../../Requests'
import Footer from '../Footer'
import Faqs from '../Faqs'


const LandingPage = () => {
  return (
    // <div className=" mx-auto lg:max-w-[90em] max-h-screen overflow-hidden">
    //   <div className='md:grid md:grid-cols-10'>
    //     <div className='md:col-span-2'>
    //    <Navbar />
    //     </div>
        
        <div className=''>
          {/* <Header /> */}
      <Entflix />
      <MovieSlide />
      {/* <Row  title='Latest' fetchURL={requests.requestLatest} /> */}
      <Row  title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row  title='Popular' fetchURL={requests.requestPopular} />
      {/* <Row  title='Trending' fetchURL={requests.requestTrending} /> */}
      <Row  title='Top Rated' fetchURL={requests.requestTopRated} />
        <Faqs />
        <Footer />
         </div>

      //     <Tmovies />
      //   </div>
      //   <div className='md:col-span-2'>

      //   </div>
      //     </div>
      // </div> 
  )
}

export default LandingPage