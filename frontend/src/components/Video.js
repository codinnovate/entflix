import React, { useState, useRef } from 'react'



const Video = () => {
    const [playing, setPlaying] = useState(false)
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

  return (
      <div className='flex' >
          <Video
              src=''
              className=''
              ref={videoRef}
        onClick={handleVideoPress} 
        controls
              >
      </Video> 
        <div>
        <button onClick={() => handleSeek(-10)}>Backward 10s</button>
        <button onClick={() => handleSeek(10)}>Forward 10s</button>
      </div>
    </div>
  )
}

export default Video