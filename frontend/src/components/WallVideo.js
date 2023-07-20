import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

const site = 'http://127.0.0.1:8000/'
const baseUrl = `${site}bug/movies/`

const WallVideo = () => {
      const [playing, setPlaying] = useState(false)
    const [video, setVideos] = useState([''])
    const videoRef = useRef(null)
    const handleSeek = (seconds) => {
      videoRef.current.currentTime +=seconds
  }
      const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)

        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    useEffect(() => {
    try {
      axios.get(baseUrl)
        .then((res) => {
          setVideos(res.data)
        });
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
      <div className='scrollbar-thumb-red-600  mb-[25%] scrollbar-thin   scrollbar-track-white scrollbar-rounded-full scroll-y-auto'>
          
      
      {
        video.map((item, id) => {
          return (
            <div key={item.id} className='flex flex-col justify-center  ' >
          {/* <img src={item.poster} alt={item.title} className=" " /> */}
                   <video
                        className='w-full'
                        src={item.File}
                       controls
                 ref={videoRef}
                        onClick={handleVideoPress} 

                          > 
              </video>
               <div className='bg-white flex items-center p-3 place-content-between'>
        <button  className='p-2 bg-red-600  text-white rounded-none' onClick={() => handleSeek(-10)}>Backward 10s</button>
        <button className='p-2 bg-red-600  text-white rounded-none' onClick={() => handleSeek(10)}>Forward 10s</button>
      </div>
              <div className='flex flex-col  justify-content items-center'>
                <div className='flex border-[1px] border-red-600  shadow-2xl   w-full px-2'>
                  <h1 className='text-white  text-2xl my-3'>{item.title}</h1>
                </div>
                <div className='flex items-center'>
                  <button className='border-red-600 text-white p-2 w-64 m-5 h-12 border-[1px] text-xl  shadow-xl'><a href={item.File}>Download</a></button>
                  {
                  item.subtitles ? <button className='border-red-600 border-[1px] text-white p-2 w-64 h-12 m-5 rounded-none text-xl  shadow-xl'><a href={item.subtitles}>Download Subtitle</a></button>: ''
                  }
                  </div>
                </div>
                   </div> 
        )
      })
      }
 
         
    </div>
  )
}

export default WallVideo