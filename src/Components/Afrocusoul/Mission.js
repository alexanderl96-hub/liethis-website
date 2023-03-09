import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import AfrosoulNYC from './Programs/AfrosoulNYC'
import AfrosoulYouth from './Programs/AfrosoulYouth'
import WomenMotion from './Programs/WomenMotion'
import './Afrocusoul.css'
import Liethis from '../../Images/liethisMadas.jpg'

const Mission = () => {
  const [description, setDescriptions] = useState('false')
  return (
    <div className='mainAfro'>
      <div style={{display: 'flex', justifyContent:'space-around', marginTop: '50px'}}>
        <div style={{width: '50%'}}>
           <img src={Liethis} alt ='' style={{width: '410px', height: '500px'}}/>
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
                {/* <br/> */}
                <div>Mujeres Afrodescendentes of all shades is a dance  community that strives to help women find their voice 
                and embrace it confidently on the dance floor. Mujeres Afrodecendientes of all shade's mission is to support
                women worldwide through community building, dance workshops, performances, and connections. Here at MADAS, we 
                LOVE to dance. Helping the women in our community feel and look beautiful is at the top of our to-do list. We 
                know that dancing beauty comes from within, but we also want you to show up as the best version of yourself. 
                Join our community, and let's connect! </div>
                 {/* <br/> */}
                <div>“𝐌ADAS 𝐢𝐬 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐚 𝐦𝐨𝐯𝐞𝐦𝐞𝐧𝐭. 𝐌ADAS 𝐢𝐬 𝐚 𝐥𝐢𝐟𝐞𝐬𝐭𝐲𝐥𝐞. 𝐀𝐜𝐜𝐞𝐩𝐭𝐚𝐧𝐜𝐞, 𝐥𝐨𝐯𝐞, 𝐩𝐚𝐬𝐬𝐢𝐨𝐧, movement, and 𝐠𝐫𝐨𝐰𝐭𝐡.</div>
              
                </div>}
        </div>
       
      </div>
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
              <h3><Link to={'/afrocusoul/workshops/online'} style={{textDecoration: 'none', color: 'black'}} >Workshops</Link></h3>
              {/* <div style={{display:'flex', justifyContent: 'center', gap: '30px'}}>
                        <div><Link to={'/afrocusoul/workshops/online'} >Online Events</Link></div>
                        <div><Link to={'/afrocusoul/workshops/inperson'} >In-person events</Link></div>
                    </div> */}
           </div>
           <div>
               <h3><Link to={'/afrocusoul/workshops/events'}  style={{textDecoration: 'none', color: 'black'}}  >Events</Link></h3>
               {/* <div style={{display:'flex', justifyContent: 'center', gap: '30px'}}>
                        <div><Link to={'/afrocusoul/workshops/events'} >Sandunga Cuban Party</Link></div>
                    </div> */}
           </div>
       </div>
    </div>
  )
}

export default Mission