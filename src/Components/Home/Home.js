import React from 'react'
import './Home.css'
import './../NavBar/NavBar.css'
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
            {/* <div className="divTextwrap">
                <h2 className="divTextwraph2">The power of creative Art </h2>
                Movement has healing properties  in general, dance  
                has been known to heal people mentally, spiritually,  in some cases  physically.  
                According to the article published by Shannon Sexton, “Dancing can boost mood, 
                self-esteem, and fitness levels; reduce stress and even help us recover from trauma.“ 
                I would like to offer a space where movement can help  humanity in an artistic, holistic  
                form.
             </div> */}
        </div>

        <div className="" style={{display: 'flex', marginTop: '100px', paddingLeft: '3%',paddingRight: '3%',  marginBottom: '100px'}}>
            <div className="homeImgDiv">
                <img src={liethiCreative} alt='Liethis' className='imag' />
            </div>
            <div className="divTextwrap" style={{margin: 'auto',  backgroundColor: '#f2f2f2', height: '530px', }}>
                <h2 className="divTextwraph2" style={{marginTop: '70px'}}>The power of creative Art </h2>
                <div style={{fontWeight: 'normal', lineHeight: '1.5', wordSpaing: '1px',textAlign: 'justify', width: '380px'}}>
                COMUNIDADES Afrodesendientes together, we can rewrite our story, amend what freedom is, and find joy in our shades. OUR NARRATIVES ARE HERE!</div>
            
                <div style={{fontWeight: 'normal', lineHeight: '1.6', padding: '8%'}}>
                "I would like to offer a space where movement can help  humanity in an artistic & holistic  
                form."</div>
                <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', width: '180px',  
                 backgroundColor: '#fdc03b', color: 'white', marginTop: '40px'}}><p style={{fontSize: '16px'}}>
                    <a href="https://www.youtube.com/@Cubanclassrooms5/channels" style={{textDecoration:'none', color:'white'}}>Subscribe!</a></p></div>
             </div>
        </div>
        <div>
                <div style={{fontSize: '20px'}}>Join our community.</div> 
                <div style={{marginTop: '25px', fontWeight: '400'}}>WE LOVE DANCE, MUSIC, CREATIVE ART,  COMMUNITY, AND EMPOWERING WOMEN.</div>
            </div>
        <div style={{display: 'flex', justifyContent:'space-around',  marginBottom: '100px'}}>
           <Contact />
        </div>
       
    </div>
  )
}

export default Home