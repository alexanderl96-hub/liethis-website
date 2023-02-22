import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
// import navIcon1 from '../../Images/nav-icon1.svg'
import navIcon2 from '../../Images/nav-icon2.svg'
import navIcon3 from '../../Images/nav-icon3.svg'
import navIcon4 from '../../Images/nav-icon4.svg'

const Navbar = () => {
  const [open , setOpen] = useState('false')
  console.log(open)

  return (
    <div className="mainContainer">
       <div  className= 'nameWrapp2'> </div>
      
       <div  className= 'nameWrapp'> Liethis Hechavarria</div>
         {/* <div className="mainWrap">
              <div ><Link to={'/Home'} className='linksWrapper'>Home </Link></div> 
              <div ><Link to={'/about'} className='linksWrapper'>About</Link></div> 
              <div ><Link to={'/afrocusoul'} className='linksWrapper'>Afrocusoul Dance & Wellness</Link></div> 
              <div ><Link to={'/galery'} className='linksWrapper'>Galery</Link></div> 
              <div ><Link to={'/contact'} className='linksWrapper'>Contact</Link></div>
         </div> */}
         <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px'}}>
         <div className="mainWrap">
              <div><Link to={'/Home'} className='linksWrapper'>Home </Link></div> 
              <div><Link to={'/Events'} className='linksWrapper'>Upcoming Events</Link></div> 
              <div><Link to={'/galery'} className='linksWrapper'>Galery</Link></div> 
              <div style={{cursor: 'pointer', color: 'white', marginLeft: '10px'}}
               
                onMouseEnter={()=> setOpen('true')}
                onMouseLeave={()=> setOpen('false')}
               
               > More</div> 
               {open === 'true' &&
              <div 
              onMouseEnter={()=> setOpen('true')}
              onMouseLeave={()=> setOpen('false')}
              className='submenu'>
                 <div style={{margin:'3px'}}><Link to={'/about'} className=''>About</Link></div> 
                 <div style={{margin:'3px'}}><Link to={'/galery'} className=''>Galery</Link></div> 
                 <div style={{margin:'3px'}}><Link to={'/contact'} className=''>Contact</Link></div> 
                 <div style={{margin:'3px'}}><Link to={'/afrocusoul'} className=''>Afrocusoul Dance & Wellness</Link></div> 
                
                </div>}

              {/* <div><Link to={'/about'} className='linksWrapper'>About</Link></div> 
              <div><Link to={'/afrocusoul'} className='linksWrapper'>Afrocusoul Dance & Wellness</Link></div> 
              <div><Link to={'/galery'} className='linksWrapper'>Galery</Link></div> 
              <div><Link to={'/contact'} className='linksWrapper'>Contact</Link></div> */}
         </div>
         <div className='social-icon'>
               {/* <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon1} alt='' /></a> */}
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon3}  alt='' /></a>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon2}  alt='' /></a>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon4}  alt=''  /></a>
         </div>
         </div>
    </div>
  )
}

export default Navbar