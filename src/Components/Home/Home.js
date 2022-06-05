import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <h3><em>"Performing arts is not a luxury but a necessity for humanity"</em></h3>
        <div className="mainDivWrap">
            <div className="homeImgDiv">
                <img src='https://i.imgur.com/2PO5VlQ.jpg' alt='Liethis' className='imag' />
            </div>
            <div className="divTextwrap">
                <h2>The power of creative Art </h2>
                Movement has healing properties  in general, dance  
                has been known to heal people mentally, spiritually,  in some cases  physically.  
                According to an article published last year by Shannon Sexton, “Dancing can boost mood, 
                self-esteem, and fitness levels; reduce stress and even help us recover from trauma.“ 
                I would like to offer a space where movement can help  humanity in an artistic, holistic  
                form.
             </div>
        </div>
    </div>
  )
}

export default Home