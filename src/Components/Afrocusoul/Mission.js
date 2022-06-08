import React from 'react'
import {Link } from 'react-router-dom'
import AfrosoulNYC from './Programs/AfrosoulNYC'
import AfrosoulYouth from './Programs/AfrosoulYouth'
import WomenMotion from './Programs/WomenMotion'
import './Afrocusoul.css'

const Mission = () => {
  return (
    <div className='mainAfro'>
        <h2 className='mainAfroH2'>Afrocusoul Dance & Wellness</h2>
       <h3>Mission Statement</h3>
       <div className='missionAfro'>
           AfroCuSoul, is a company that  acknowledges the authenticity of under represent 
           individuals in the African diaspora within the performing arts.  We seek to provide 
           opportunities for artists and the community to connect,  educate and represent 
           creative arts locally  and internationally. 
       </div>
       <h4 className="mainAfroH4">“Here where the magic and healing begins”</h4>
       <div className='mainWrapDiv'>
           <div>
                <h3>Programs</h3>
                <div className='allPrograms'>
                        <div><AfrosoulNYC/></div>
                        <div><AfrosoulYouth/></div>
                        <div><WomenMotion/></div>
                </div>
           </div>
           <div>
              <h3>Workshops</h3>
              <div style={{display:'flex', justifyContent: 'center', gap: '30px'}}>
                        <div><Link to={'/afrocusoul/workshops/online'} >Online Events</Link></div>
                        <div><Link to={'/afrocusoul/workshops/inperson'} >In-person events</Link></div>
                    </div>
           </div>
           <div>
               <h3>Events</h3>
               <div style={{display:'flex', justifyContent: 'center', gap: '30px'}}>
                        <div><Link to={'/afrocusoul/workshops/events'} >Sandunga Cuban Party</Link></div>
                    </div>
           </div>
       </div>
    </div>
  )
}

export default Mission