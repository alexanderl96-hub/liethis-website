import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className="mainContainer">
         <div className="mainWrap">
              <div><Link to={'/'} className='linksWrapper'>Home </Link></div> 
              <div><Link to={'/about'} className='linksWrapper'>About</Link></div> 
              <div><Link to={'/afrocusoul'} className='linksWrapper'>Afrocusoul Dance & Wellness</Link></div> 
              <div><Link to={'/galery'} className='linksWrapper'>Galery</Link></div> 
              <div><Link to={'/contact'} className='linksWrapper'>Contact</Link></div>
         </div>
         <div ><h1 className='nameWrapp'>Liethis Hechavarria</h1></div>
    </div>
  )
}

export default Navbar