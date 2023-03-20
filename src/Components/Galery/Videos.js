import React, { useState} from 'react'
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
  const widthVideo = getComputedStyle(document.documentElement).getPropertyValue('--width-video');
  const heightVideo = getComputedStyle(document.documentElement).getPropertyValue('--height-video');
   console.log(widthVideo, heightVideo)
  return (
    <div className='coursesContainer'>
    
              {checkVideo === 'false' && Number(id) !== 1 ? <div style={{backgroundImage: `url(${Liethis})`}} className='coursesContainer-Wraaper1' >
                  <div   onClick={getId}  className='coursesContainer-Wraaper2'>
                    <div 
                    onClick={getId}
                    id={1}
                    className='coursesContainer-Icon'>
                      <FaPlay  onClick={getId} id={1}  /> 
                    </div>
                    <h4   id={1}  >Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&
              <ReactPlayer 
                url={videos[0]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={widthVideo} 
                height={heightVideo} 
                muted={false} 
                className='reactSizeVideo'
              />}
             </div>}
             <div className='coursesContainer-Wraaper3' >
                  <div >Liethis Yelena</div>
                  <div >"DCBX 2019 Afrocuban Dance Basics Demo by Liethis Hechavarria"</div>
                  <div >Liethis Hechavarria (Cuba/NY) demonstrates the Afrocuban dance steps she taught at her
                 workshop at the DCBX 2019 Latin Dance Festival in Washington DC!.</div>
              </div> 

             {checkVideo === 'false' && Number(id) !== 2 ? <div style={{backgroundImage: `url(${Liethis})`,}} className='coursesContainer-Wraaper1' >
                  <div  onClick={getId} className='coursesContainer-Wraaper2'>
                    <div 
                    onClick={getId}
                    id={2}
                    className='coursesContainer-Icon' >
                      <FaPlay onClick={getId} id={2}  /> 
                    </div>
                    <h4 id={2} >Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&
              <ReactPlayer 
                url={videos[1]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={widthVideo} 
                height={heightVideo} 
                muted={false} 
              />}
             </div>}
             <div  className='coursesContainer-Wraaper3'>
                  <div >Liethis Yelena</div>
                  <div >"Liethis Hechavarria & Hansell Vaillant perform Guaguanco"</div>
                  <div >Liethis Hechavarria and Hansell Vaillant perform Guaguanco at Eric Balmir dance stidio salsa social.</div>
              </div> 

              { allIndex2 === 'true' && <div>
              {checkVideo === 'false' && Number(id) !== 3  ? <div style={{backgroundImage: `url(${Liethis})`,}} className='coursesContainer-Wraaper1' >
                  <div  onClick={getId} className='coursesContainer-Wraaper2-1'>
                    <div 
                    onClick={getId}
                    id={3}
                     className='coursesContainer-Icon2' >
                      <FaPlay  onClick={getId} id={3}  /> 
                    </div>
                    <h4 id={3} >Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&  allIndex2 === 'true' &&
              <ReactPlayer 
                url={videos[2]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={widthVideo} 
                height={heightVideo} 
                muted={false} 
              />}
             </div>}
             {allIndex2 === 'true' && <div className='coursesContainer-Wraaper3-1'>
                  <div >Liethis Yelena</div>
                  <div >"Orisha Femininity Flow Workshop & Performing Art Conext Company"</div>
                  <div >Connections through the Performing art, Culture Consciousness  and the African Diaspora art equality. A 
                platform who welcome all types of Art forms and educate the community and preserve and promote creative art 
                Through Dance, Music, Theater, Art and much more.</div>
              </div> }
             {checkVideo === 'false' && Number(id) !== 4  ? <div style={{backgroundImage: `url(${Liethis})` }} className='coursesContainer-Wraaper1' >
                  <div   onClick={getId} className='coursesContainer-Wraaper2-1' >
                    <div 
                    onClick={getId}
                    id={4}
                    className='coursesContainer-Icon2' >
                      <FaPlay  onClick={getId} id={4}  /> 
                    </div>
                    <h4 id={4}  >Play Video</h4>
                </div>
              </div> : <div>
              { Number(id) && current === 'true' &&  allIndex2 === 'true' &&
              <ReactPlayer 
                url={videos[3]} 
                playing={true} 
                progressInterval={1000}
                controls={true}
                width={widthVideo} 
                height={heightVideo} 
                muted={false} 
              />}
             </div>}
             {allIndex2 === 'true' && <div  className='coursesContainer-Wraaper3-1'>
                  <div >Liethis Yelena</div>
                  <div >"Liethis Hechavarria & Jonathan Cabrera perform Son Traditional"</div>
                  <div >Jonathan Cabrera & Liethis Hechavarria In Antia Arruez Event Bailando En El Algarrobo Sponsored by Joturo Theater.</div>
              </div> }
              </div>} 
           
            
          
               <div  className='buttomContainer'>
                <div  onClick={()=> allIndex2 === 'false' ? setAllIndex2('true') : setAllIndex2('false')}>{allIndex2 === 'false' ? 'Load More' : 'Show Less'}  </div>
               </div>

 
    </div>
  )
}

export default Viedos