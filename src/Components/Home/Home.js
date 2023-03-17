import React from 'react'
import './Home.css'
// import './../NavBar/NavBar.css'
import liethiPresentation from '../../Images/IMG_6550.JPG'
// import liethiMiddle from '../../Images/FB_IMG_1450260439547.jpg'
import liethiCreative from '../../Images/LiethisCreative.jpeg'
// import liethi from '../../Images/imagesliethis.jpeg'
// import liethi2 from '../../Images/imagesliethis2.jpeg'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className="home">
        <div  className= 'nameWrapp'> Liethis Hechavarria</div>
        <div className="mainDivWrap">
            <div className="homeImgDiv">
                <img src={liethiPresentation} alt='Liethis' className='imag' />
            </div>
            <h3><em>"Performing arts is not a luxury but a necessity for humanity"</em></h3>
        </div>

        <div className="mainDivWrap2" >
            <div className="homeImgDiv">
                <img src={liethiCreative} alt='Liethis' className='imag2' />
            </div>
            <div className="divTextwrap" >
                <h2 className="divTextwraph2" >The power of creative Art </h2>
                <div className='divTextwraph3'>
                COMUNIDADES Afrodesendientes together, we can rewrite our story, amend what freedom is, and find joy in our shades. OUR NARRATIVES ARE HERE!</div>
            
                <div className='divTextwraph4'>
                "I would like to offer a space where movement can help  humanity in an artistic & holistic  
                form."</div>
                <div className='div-buttomChannel' >
                    <p >
                       <a href="https://www.youtube.com/@Cubanclassrooms5/channels" >Subscribe!</a>
                    </p>
                </div>
             </div>
        </div>
        <div>
            <div className='joinComunity' >Join our community.</div> 
            <div className='joinComunity-quote' >WE LOVE DANCE, MUSIC, CREATIVE ART,  COMMUNITY, AND EMPOWERING WOMEN.</div>
        </div>
        <div className='componentContact' >
           <Contact />
        </div>
       
    </div>
  )
}

export default Home