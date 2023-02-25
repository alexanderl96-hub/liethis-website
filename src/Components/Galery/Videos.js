import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import { FaPlay } from "react-icons/fa"
import Liethis from '../../Images/imagesliethis2.jpeg'
import './Galery.css'

const Viedos = () => {
  const [videos, setVideos] = useState(['https://youtu.be/Lzp_ig7JRVM', 'https://youtu.be/Z-7FelbC5lY', 'https://youtu.be/44V55U55rOM','https://youtu.be/MYiR7oIGjbA'  ])
  const [checkVideo, setCheckVideo] = useState('false')
  const [allIndex, setAllIndex] = useState('false')
  const [allIndex2, setAllIndex2] = useState('false')
  const [current, setCurrent] = useState('false')
  const [id, setId] = useState('')
  function getId(e) {
   if(e.target){
    setCurrent('true')
    setAllIndex('false')
    setId(e.target.id)
   }else{
    setCurrent('true')
   }

    setId(e.target.id)
  }

  console.log(  Number(id))
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}>
    
              {checkVideo === 'false' && Number(id) !== 1 ? <div style={{backgroundImage: `url(${Liethis})`,   backgroundSize: '100% 100%', width: '830px', height: '470px'}} >
                  <div   onClick={getId} style={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginTop: '38%',cursor: 'pointer', gap: '10px'}}>
                    <div 
                    onClick={getId}
                    id={1}
                    style={{ borderRadius: '50px', width: '40px', height: '40px', border:'3px solid white', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                      <FaPlay style={{fill: 'white'}}  onClick={getId} id={1}  /> 
                    </div>
                    <h4   id={1} style={{color: 'white'}}>Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&
              <ReactPlayer 
                url={videos[0]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={'830px'} 
                height={'470px'} 
                muted={false} 
              />}
             </div>}
             <div style={{marginTop: '15px', marginBottom: '30px' ,width: '830px', lineHeight: '1.9'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '300'}}>Liethis Yelena</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '700'}}>"DCBX 2019 Afrocuban Dance Basics Demo by Liethis Hechavarria"</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', textAlign: 'justify', fontWeight: '300', 
                lineHeight: '1.2'}}>Liethis Hechavarria (Cuba/NY) demonstrates the Afrocuban dance steps she taught at her
                 workshop at the DCBX 2019 Latin Dance Festival in Washington DC!.</div>
              </div> 

             {checkVideo === 'false' && Number(id) !== 2 ? <div style={{backgroundImage: `url(${Liethis})`,   backgroundSize: '100% 100%',width: '830px', height: '470px'}} >
                  <div  onClick={getId} style={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginTop: '38%', cursor: 'pointer', gap: '10px'}}>
                    <div 
                    onClick={getId}
                    id={2}
                    style={{ borderRadius: '50px', width: '40px', height: '40px', border:'3px solid white', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                      <FaPlay style={{fill: 'white'}}  onClick={getId} id={2}  /> 
                    </div>
                    <h4 id={2} style={{color: 'white'}}>Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&
              <ReactPlayer 
                url={videos[1]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={'830px'} 
                height={'470px'} 
                muted={false} 
              />}
             </div>}
             <div style={{marginTop: '15px', marginBottom: '30px' ,width: '830px', lineHeight: '1.9'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '300'}}>Liethis Yelena</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '700', }}>"Liethis Hechavarria & Hansell Vaillant perform Guaguanco"</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', textAlign: 'justify', fontWeight: '300', 
                lineHeight: '1.2'}}>Liethis Hechavarria and Hansell Vaillant perform Guaguanco at Eric Balmir dance stidio salsa social.</div>
              </div> 

              { allIndex2 === 'true' && <div>
              {checkVideo === 'false' && Number(id) !== 3  ? <div style={{backgroundImage: `url(${Liethis})`,   backgroundSize: '100% 100%',width: '830px', height: '470px'}} >
                  <div  onClick={getId} style={{display: 'flex',alignItems: 'center',justifyContent: 'center', cursor: 'pointer', gap: '10px'}}>
                    <div 
                    onClick={getId}
                    id={3}
                    style={{ borderRadius: '50px', width: '40px', height: '40px', border:'3px solid white', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginTop: '38%',}}>
                      <FaPlay style={{fill: 'white'}}  onClick={getId} id={3}  /> 
                    </div>
                    <h4 id={3} style={{color: 'white', marginTop: '40.5%'}}>Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&  allIndex2 === 'true' &&
              <ReactPlayer 
                url={videos[2]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={'830px'} 
                height={'470px'} 
                muted={false} 
              />}
             </div>}
             {allIndex2 === 'true' &&<div style={{marginTop: '15px', marginBottom: '30px' ,width: '830px', lineHeight: '1.9'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '300'}}>Liethis Yelena</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '700', }}>"Orisha Femininity Flow Workshop & Performing Art Conext Company"</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', textAlign: 'justify', fontWeight: '300', 
                lineHeight: '1.2'}}>Connections through the Performing art, Culture Consciousness  and the African Diaspora art equality. A 
                platform who welcome all types of Art forms and educate the community and preserve and promote creative art 
                Through Dance, Music, Theater, Art and much more.</div>
              </div> }
             {checkVideo === 'false' && Number(id) !== 4  ? <div style={{backgroundImage: `url(${Liethis})`,   backgroundSize: '100% 100%',width: '830px', height: '470px'}} >
                  <div   onClick={getId} style={{display: 'flex',alignItems: 'center',justifyContent: 'center', gap: '10px', cursor: 'pointer',}}>
                    <div 
                    onClick={getId}
                    id={4}
                    style={{ borderRadius: '50px', width: '40px', height: '40px', border:'3px solid white', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginTop: '38%',}}>
                      <FaPlay style={{fill: 'white'}}  onClick={getId} id={4}  /> 
                    </div>
                    <h4 id={4}  style={{color: 'white', marginTop: '40.5%'}}>Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&  allIndex2 === 'true' &&
              <ReactPlayer 
                url={videos[3]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={'830px'} 
                height={'470px'} 
                muted={false} 
              />}
             </div>}
             {allIndex2 === 'true' &&<div style={{marginTop: '15px', marginBottom: '30px' ,width: '830px', lineHeight: '1.9'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '300'}}>Liethis Yelena</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: '700', }}>"Liethis Hechavarria & Jonathan Cabrera perform Son Traditional"</div>
                  <div style={{display: 'flex', justifyContent: 'flex-start', textAlign: 'justify', fontWeight: '300', 
                lineHeight: '1.2'}}>Jonathan Cabrera & Liethis Hechavarria In Antia Arruez Event Bailando En El Algarrobo Sponsored by Joturo Theater.</div>
              </div> }
              </div>} 
           
            
          
               <div style={{margin: '15px', paddingBottom: '30px'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '150px',height: '50px', 
                 border: '1px solid gray', cursor: 'pointer', color: 'gray'}} onClick={()=> allIndex2 === 'false' ? setAllIndex2('true') : setAllIndex2('false')}> Load More </div>
               </div>

              
       
       
{/*       

{checkVideo === 'false'  &&  Number(id) !== 2 &&<div style={{backgroundImage: `url(${Liethis})`,   backgroundSize: '100% 100%',width: '330px', height: '260px'}} >
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginTop: '30%', gap: '10px'}}>
            <div 
            onClick={getId}
            id={2}
            style={{ borderRadius: '50px', width: '40px', height: '40px', border:'3px solid white', 
            display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
              <FaPlay style={{fill: 'white' }}  id={2} /> 
            </div>
            <h4 style={{color: 'white'}}>Play Video</h4>
         </div>
      </div>}
      {Number(id) === 2 &&
        <ReactPlayer 
        url={videos[1]} 
         playing={true} 
        // loop={false}
        progressInterval={1000}
        controls={true}
        width={'330px'} 
        height={'260px'} 
        muted={true} /> } */}
    </div>
  )
}

export default Viedos