import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='mainFooter'>
        <div className='mainFooterWrap'>
            <Link to={'/about'} className='footerlinks'>About</Link>
            <Link to={'/afrocusoul'} className='footerlinks'>Afrocusoul Dance & Wellness</Link>
            <Link to={'/galery'} className='footerlinks'>Galery</Link>
            <Link to={'/contact'} className='footerlinks'>Contact</Link>
        </div>
        <div className='footerlinksSocial'>
            
           <div ><Link to={'/'} className='footerHome'>Soul@NY</Link></div>
           <div className='footerYear'> 
             Year {new Date().getFullYear()}</div>
           <div className='footerIcons'>
               <div><a href='https://www.youtube.com/channel/UCkHRgHPb_iWdW4dRaf3uMLg' arial-label='Youtube' className='footeraTag'><FaYoutube /></a></div> 
               <div><a href='https://www.instagram.com/afrocusoul/' aria-label='Instagram' className='footeraTag'><FaInstagram /></a></div> 
               <div><a href='https://www.facebook.com/liethis5hechavarria' aria-label='Facebook' className='footeraTag'><FaFacebook /></a></div> </div>
        </div>
    </div>
  )
}

export default Footer

// <img src={'https://cdn0.iconfinder.com/data/icons/symbols-symbols-add-on-3-vol-1/48/v-13-512.png'} alt='c' className='footerC' />