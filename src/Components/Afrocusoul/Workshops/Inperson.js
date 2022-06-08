import React from 'react'
import {Link } from 'react-router-dom'

const Inperson = () => {
  return (
    <div className='mainAfro'>
       <h3 style={{textAlign: 'start', marginLeft: '15px', paddingTop: '8px'}}><Link to={'/afrocusoul'} style={{textDecoration: 'none', color: 'white'}} >Back</Link> </h3>
      <h2 className='mainAfroH2'>Afrocusoul Dance & Wellness</h2>
      <h3>Mission Statement</h3>
      <div className='missionAfro'>
          AfroCuSoul, is a company that  acknowledges the authenticity of under represent 
          individuals in the African diaspora within the performing arts.  We seek to provide 
          opportunities for artists and the community to connect,  educate and represent 
          creative arts locally  and internationally. 
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
         <div style={{textAlign: 'center', width: '30%', color: 'white', fontSize: "20px", padding: '10px', cursor: 'pointer'}}><Link to={'/afrocusoul/workshops/online'} style={{textDecoration: 'none', color: 'white'}}>Online Events</Link></div>
         <div style={{textAlign: 'center', width: '30%', color: 'white', fontSize: "20px",padding: '10px', cursor: 'pointer', backgroundColor: 'red'}}>In-Person Events</div>
      </div>
   </div>
  )
}

export default Inperson