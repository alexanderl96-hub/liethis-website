import React, { useState} from 'react'
// import {Link } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
// import Service from './Service/Service'
// import Artistwork from './ArtistWork/ArtistWork'
import './Mission.css'
import Liethis from '../../Images/liethisMadas.jpg'

const Mission = () => {
  const videoWidth = getComputedStyle(document.documentElement).getPropertyValue('--video-youtube-Width');
  const videoHeight = getComputedStyle(document.documentElement).getPropertyValue('--video-youtube-Height');
  const [play, setPlay] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [num, setNum]  = useState(0)
  const [description, setDescriptions] = useState('false')
  const videos = ['https://www.youtube.com/embed/CmSeqBoslKg?controls=0&showinfo=1',
                   'https://www.youtube.com/watch?v=nDjmoFa8rYA&feature=youtu.be',
                    'https://www.youtube.com/watch?v=J0IXBQcyhgg&feature=youtu.be']


function handelVideos (e){
  console.log(e.target.id)
  if(Number(e.target.id) === 1 && num !== 1){
    setPlay(true)
    setPlay2(false)
    setPlay3(false)
    setNum(Number(e.target.id) )
  }else if(Number(e.target.id)  === 2 && num !== 2){
    setPlay(false)
    setPlay2(true)
    setPlay3(false)
    setNum(Number(e.target.id) )
  }else if(Number(e.target.id)  === 3 && num !== 3){
    setPlay(false)
    setPlay2(false)
    setPlay3(true)
    setNum(Number(e.target.id) )
  }else if(Number(e.target.id) === 1 && num === 1 && play === true){
    setPlay(false)
    setNum(0)
  }else if(Number(e.target.id) === 2 && num === 2 && play2 === true){
    setPlay2(false)
    setNum(0)
  }else if(Number(e.target.id) === 3 && num === 3 && play3 === true){
    setPlay3(false)
    setNum(0)
  }
}

  return (
    <div className='mainAfro'>
      <div className='mainAfroWrapper' >
        <div className='mainAfroWrapper-DivImg' >
           <img src={Liethis} alt =''  />
        </div>
        <div className='secondContainer-AfroShadesDiv' >
            <div className='secondContainer-AfroShadesDiv-Title' >Mujeres Afrodescendentes of all shades </div>
            <div className='secondContainer-AfroShadesDiv-Parragraph' >Hello Mujeres! My name is Liethis Hechavarria am a proud Afro-Hispana  Born in Santiago de Cuba with 
              African and Spanish roots. I have a passion for community, dance, Travel, and wellness.  Welcome to the
               Mujere Agojie tribe!</div>

            <div  className='secondContainer-AfroShadesDiv-Bottom' 
                  onClick={(()=> setDescriptions('true'))} >See more</div>

            {description === 'true' && <div className='description'>
                <div className='description-Close' 
                      onClick={(()=> setDescriptions('false'))}>Close</div>

                <div className='description-Title' > WHAT IS Mujeres Afrodescendentes of all shades?</div>
                
                <div className='description-Parragraph' >Mujeres Afrodescendentes of all shades is a dance  community that strives to help women find their voice 
                and embrace it confidently on the dance floor. Mujeres Afrodecendientes of all shade's mission is to support
                women worldwide through community building, dance workshops, performances, and connections. Here at MADAS, we 
                LOVE to dance. Helping the women in our community feel and look beautiful is at the top of our to-do list. We 
                know that dancing beauty comes from within, but we also want you to show up as the best version of yourself. 
                Join our community, and let's connect! </div>
               
                <div className='description-Quote' >“𝐌ADAS 𝐢𝐬 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐚 𝐦𝐨𝐯𝐞𝐦𝐞𝐧𝐭. 𝐌ADAS 𝐢𝐬 𝐚 𝐥𝐢𝐟𝐞𝐬𝐭𝐲𝐥𝐞. 𝐀𝐜𝐜𝐞𝐩𝐭𝐚𝐧𝐜𝐞, 𝐥𝐨𝐯𝐞, 𝐩𝐚𝐬𝐬𝐢𝐨𝐧, movement, and 𝐠𝐫𝐨𝐰𝐭𝐡.</div>
              
            </div>}

        </div>
       
      </div>
      <div className='containerPlayer-Channel' >
          <div className='containerPlayer-DivTilte' >
                <h2 >Digital Work</h2>
          </div>

          <div className='containerPlayer-Wrapper'  >
         
              <div>
                      <div className='containerPlayer-Wrapper-Div-Inside_ReactPlayer' >
                        <ReactPlayer 
                        url={videos[0]} 
                        playing={play} 
                        progressInterval={1000}
                        controls={true}
                        width={videoWidth} 
                        height={videoHeight} 
                        muted={false} 
                        className="react-player"
                      />
                      </div>
                      <div id={1} 
                           className='containerPlayer-Wrapper-Div-Bottom'
                           onClick={handelVideos}>
                          <div id={1} 
                               className='containerPlayer-Wrapper-Div-Bottom_bottom' 
                             >{play === false ? 'Watch' : 'Pause'}</div>
                      </div>
              </div>


              <div>
                      <div className='containerPlayer-Wrapper-Div-Inside_ReactPlayer'>
                        <ReactPlayer 
                        url={videos[1]} 
                        playing={play2} 
                        progressInterval={1000}
                        controls={true}
                        width={videoWidth} 
                        height={videoHeight} 
                        muted={false} 
                        className="react-player"
                      />
                      </div>
                      <div id={2} 
                           className='containerPlayer-Wrapper-Div-Bottom'
                           onClick={handelVideos}>
                          <div id={2} 
                               className='containerPlayer-Wrapper-Div-Bottom_bottom' 
                             >{play2 === false ? 'Watch' : 'Pause'}</div>
                      </div>
              </div>


              <div>
                      <div  className='containerPlayer-Wrapper-Div-Inside_ReactPlayer' >
                        <ReactPlayer 
                        url={videos[2]} 
                        playing={play3} 
                        progressInterval={1000}
                        controls={true}
                        width={videoWidth} 
                        height={videoHeight} 
                        muted={false} 
                        className="react-player"
                      />
                      </div>
                      <div id={3} 
                           className='containerPlayer-Wrapper-Div-Bottom'
                           onClick={handelVideos}>
                          <div id={3}
                               className='containerPlayer-Wrapper-Div-Bottom_bottom' 
                             >{play3 === false ? 'Watch' : 'Pause'}</div>
                      </div>
              </div>
        </div>
              
      </div>
       
    </div>
  )
}

export default Mission