import React, { useState} from 'react'
// import {Link } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
// import Service from './Service/Service'
// import Artistwork from './ArtistWork/ArtistWork'
import './Mission.css'
import Liethis from '../../Images/liethisMadas.jpg'

const Mission = () => {
  const [play, setPlay] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [num, setNum]  = useState(0)
  const [description, setDescriptions] = useState('false')
  const videos = ['https://www.youtube.com/watch?v=CmSeqBoslKg&feature=youtu.be',
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
      <div style={{display: 'flex', justifyContent:'space-around', marginTop: '50px'}}>
        <div style={{width: '50%'}}>
           <img src={Liethis} alt ='' style={{marginTop: '3.5%',width: '410px', height: '500px', borderRadius: '1px', boxShadow: '0px 0px 9px 7px #cccc7d'}}/>
        </div>
        <div style={{width: '50%', display: 'flex',flexDirection: 'column', justifyContent: 'center', 
        alignItems: 'center', padding: '5%',}}>
            <div style={{margin: '10px', fontWeight: 'bold', fontSize: '25px'}}>Mujeres Afrodescendentes of all shades </div>
            <div style={{margin: '10px', lineHeight: '25px'}}>Hello Mujeres! My name is Liethis Hechavarria am a proud Afro-Hispana  Born in Santiago de Cuba with 
              African and Spanish roots. I have a passion for community, dance, Travel, and wellness.  Welcome to the
               Mujere Agojie tribe!</div>
               <div style={{margin: '10px', width: '100px', height: '50px', border: '1px solid', display: 'flex',
                justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={(()=> setDescriptions('true'))} >See more</div>
               {description === 'true' && <div className='description'>
                <div style={{fontSize: '15px', height: '20px',cursor: 'pointer', display: 'flex',
                 marginLeft: '90%', color: '#fff'}}  onClick={(()=> setDescriptions('false'))}>Close</div>
                 <div style={{display: 'flex', justifyContent: 'center', textDecoration: 'underline', marginBottom: '10px'}}> WHAT IS Mujeres Afrodescendentes of all shades?</div>
                
                <div>Mujeres Afrodescendentes of all shades is a dance  community that strives to help women find their voice 
                and embrace it confidently on the dance floor. Mujeres Afrodecendientes of all shade's mission is to support
                women worldwide through community building, dance workshops, performances, and connections. Here at MADAS, we 
                LOVE to dance. Helping the women in our community feel and look beautiful is at the top of our to-do list. We 
                know that dancing beauty comes from within, but we also want you to show up as the best version of yourself. 
                Join our community, and let's connect! </div>
               
                <div>“𝐌ADAS 𝐢𝐬 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐚 𝐦𝐨𝐯𝐞𝐦𝐞𝐧𝐭. 𝐌ADAS 𝐢𝐬 𝐚 𝐥𝐢𝐟𝐞𝐬𝐭𝐲𝐥𝐞. 𝐀𝐜𝐜𝐞𝐩𝐭𝐚𝐧𝐜𝐞, 𝐥𝐨𝐯𝐞, 𝐩𝐚𝐬𝐬𝐢𝐨𝐧, movement, and 𝐠𝐫𝐨𝐰𝐭𝐡.</div>
              
                </div>}
        </div>
       
      </div>
      <div style={{margin: '2%', display:'flex', flexDirection:'column', 
                  alignItems: 'center', textAlign: 'center',}}>
        <div style={{margin: '50px'}}>
              <h2 style={{fontSize: '30px'}}>Digital Work</h2>
        </div>
        <div style={{ display:'flex',  justifyContent: 'space-around', gap: '20%', flexWrap: 'wrap', marginBottom: '50px'}}>
         

          <div>
              <div style={{width: '250px', height: '250px', borderRadius: '50%', boxShadow: '0px 0px 8px 7px #cccccc',
              display:'flex', justifyContent: 'center', alignItems: 'center',  position: 'relative', paddingTop: '4%'}}>
                <ReactPlayer 
                url={videos[0]} 
                playing={play} 
                progressInterval={1000}
                controls={true}
                width={'250px'} 
                height={'260px'} 
                muted={false} 
                className="react-player"
              />
              </div>
              <div id={1} style={{display:'flex',  justifyContent: 'center',alignItems: 'center',marginTop: '15px'}}
              onClick={handelVideos}>
                  <div id={1} style={{ width: '110px', backgroundColor: 'orange', boxShadow: '3px 5px 7px gray' ,
                   padding: '6px', fontSize: '18px', color: '#fff', cursor: 'pointer'}}
                   >{play === false ? 'Watch' : 'Pause'}</div>
              </div>
          </div>


          <div>
              <div style={{width: '250px', height: '250px', borderRadius: '50%', boxShadow: '0px 0px 8px 7px #cccccc',
              display:'flex', justifyContent: 'center', alignItems: 'center',  position: 'relative', paddingTop: '4%'}}>
                <ReactPlayer 
                url={videos[1]} 
                playing={play2} 
                progressInterval={1000}
                controls={true}
                width={'250px'} 
                height={'260px'} 
                muted={false} 
                className="react-player"
              />
              </div>
              <div id={2} style={{display:'flex',  justifyContent: 'center',alignItems: 'center',marginTop: '15px'}}
              onClick={handelVideos}>
                  <div id={2} style={{ width: '110px', backgroundColor: 'orange', boxShadow: '3px 5px 7px gray' ,
                   padding: '6px', fontSize: '18px', color: '#fff', cursor: 'pointer'}}
                   >{play2 === false ? 'Watch' : 'Pause'}</div>
              </div>
          </div>


          <div>
              <div style={{width: '250px', height: '250px', borderRadius: '50%', boxShadow: '0px 0px 8px 7px #cccccc',
              display:'flex', justifyContent: 'center', alignItems: 'center',  position: 'relative', paddingTop: '4%'}}>
                <ReactPlayer 
                url={videos[2]} 
                playing={play3} 
                progressInterval={1000}
                controls={true}
                width={'250px'} 
                height={'260px'} 
                muted={false} 
                className="react-player"
              />
              </div>
              <div id={3} style={{display:'flex',  justifyContent: 'center',alignItems: 'center',marginTop: '15px'}}
              onClick={handelVideos}>
                  <div  id={3} style={{ width: '110px', backgroundColor: 'orange', boxShadow: '3px 5px 7px gray' ,
                   padding: '6px', fontSize: '18px', color: '#fff', cursor: 'pointer'}}
                   >{play3 === false ? 'Watch' : 'Pause'}</div>
              </div>
          </div>
        </div>
              
      </div>
       
    </div>
  )
}

export default Mission