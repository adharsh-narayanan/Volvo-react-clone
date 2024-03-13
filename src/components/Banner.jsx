import React, { useRef, useState } from 'react'
import './Banner.css'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';


function Banner() {
  const [isplay, setIsplay] = useState(true);
  const videoRef = useRef(null);
 
  const videoControl = () => {      
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsplay(true);
    } else {
      video.pause();
      setIsplay(false);
    }
  }



  return (
    <>
     <div style={{position:'relative'}}className=' d-flex justify-content-center align-items-center text-center' >
        <video ref={videoRef} autoPlay muted loop id="myVideo" onClick={videoControl}>
          <source src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" type="video/mp4" media="(min-width: 1024px)"/>
          <source src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/bltdefdc9fdb6c04392/6572f9b005aefe000e4a7d7d/homepage-hero-video-tablet-1x1.mp4?branch=prod_alias" type="video/mp4" media="(min-width: 768px) and (max-width: 1023px)"/>
          <source src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt08cafeef5a353aa3/6572f9aec59865000ac8524d/homepage-hero-video-mobile-4x6.mp4?branch=prod_alias" type="video/mp4"/>
        </video>
    

      <button onClick={videoControl} className=' playpause d-flex justify-content-center align-items-center text-center' >
        {isplay ? <PauseOutlinedIcon className='btn1' fontSize={'large'} style={{ fill: 'black' }} /> : <PlayArrowOutlinedIcon className='btn1' fontSize="large" style={{ fill: 'black' }} />}
      </button>

      <div className='text-center homeText '>
        <p className='home1'>A new era for safety</p>
        <p className='home2'>Does how you feel affect how you drive?</p>
        <button className='button3 rounded mt-3 mb-3 '  >Learn more</button>

      </div>
      </div>



    


    </>
  )
}

export default Banner