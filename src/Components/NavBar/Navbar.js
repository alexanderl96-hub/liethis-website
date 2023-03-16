import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
// import navIcon1 from '../../Images/nav-icon1.svg'
import navIcon2 from '../../Images/nav-icon2.svg'
import navIcon3 from '../../Images/nav-icon3.svg'
import navIcon4 from '../../Images/nav-icon4.svg'
import navIcon5 from '../../Images/wireframe-globe.svg'


const Navbar = () => {
  const [open , setOpen] = useState('false')

  return (
    <div className="mainContainer">
    
         <div className="NavBarHolder">

         <div className="mainWrap">
              <div><Link to={'/'} className='linksWrapper'>Home </Link></div> 
              <div><Link to={'/Events'} className='linksWrapper'>Upcoming Events</Link></div> 
              <div><Link to={'/galery'} className='linksWrapper'>Courses</Link></div> 
              <div 
                className='nav-sectionMore'
                onMouseEnter={()=> setOpen('true')}
                onMouseLeave={()=> setOpen('false')}
                > More</div> 
               {open === 'true' &&
              <div 
              onMouseEnter={()=> setOpen('true')}
              onMouseLeave={()=> setOpen('false')}
              className='submenu'>
                 <div className='linksDance' >
                    <Link to={'/about'} className='linksDanceEnside' >About</Link>
                 </div> 
                 <div  className='linksDance'>
                    <Link to={'/afrocusoul'} className='linksDanceEnside' >MADAS</Link>
                 </div> 
                 <div className='linksDance' >
                    <Link to={'/afrocusoul/ArtistWork/ArtistWork'} className='linksDanceEnside' >Artist Work</Link>
                 </div> 
                 <div className='linksDance' >
                    <Link to={'/afrocusoul/Service/Service'} className='linksDanceEnside' >Service</Link>
                 </div> 
                 <div className='linksDance' >
                    <Link to={'/contact'} className='linksDanceEnside' >Contact</Link>
                 </div> 
                </div>}
         </div>

         <div className='social-icon'>
               {/* <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon1} alt='' /></a> */}
               <a href="https://www.instagram.com/afrocusoultravel/"><img src={navIcon3}  alt='' /></a>
               <a href="https://www.facebook.com/liethis5hechavarria"><img src={navIcon2}  alt='' /></a>
               <a href="https://www.youtube.com/@Cubanclassrooms5/about"><img src={navIcon4}  alt=''  /></a>
               <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinktr.ee%2FAfrocusoul%3Ffbclid%3DIwAR04wcsjTdVMAU-lZN1Ckhql-ElX-A0kCOhXRtSSi3osw1Mr9grKuUnNLtM&h=AT3HzCck1yj9PtZ-gLjiRMucri3b2BR6ECVFaNhpKzKaZz-wmKsh2BUT5Ckx9Mjxi0S_usL28JrKzmnVTNnm8xzkuHogTrWS3TkNHo2fCkjmjERgBfgKaRV9i0G_ym-ZPTCetD5Quuk_47jyE8rkMspy3gM"><img src={navIcon5}  alt=''  /></a>
         </div>
         </div>
    </div>
  )
}

export default Navbar