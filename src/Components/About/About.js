import React from 'react'
import './About.css'
import Liethis from '../../Images/liethisAbout.jpg'

const About = () => {
  return (
    <div className="mainAbout">
        <div>
            <h3 className="aboutH3"><em>My dance background :</em></h3>
            <div className='aboutVision'>
                <div className='visionText'>
                Ms. Hechavarria began her artistic career at the age of 4 in the community cultural movement of her native 
                city of Santiago de Cuba, the Adiro Omode children's dance group. Early in her adolescence, she moved with 
                her mother to the USA as a resident, where she continues her artistic life and is the founder of the creative 
                project "Afro Cuban Experimental Dance Ensemble Oyu Oro" based in New York City (NYC), becoming a Leading dancer, 
                choreographic collaborator and assistant to the Artistic Direction of the Company. She has extended her learning 
                for the past 25 years, training in other styles of the African Diaspora in the continent and purely African dances,
                 acquiring an outstanding projection that strengthens her repertoire as a dancer and teacher, not only Afro-Cuban 
                 but also of the styles: Congolese, West Africa (Senegal Ganha) Brazilian, Latin dance.
                </div>
                <div >
                    <img src={Liethis} alt="Liethis About" 
                    className='image' />
                </div>
            </div>
        </div>
        <div>
            <h3 className="aboutH3"> <em>PROFESSIONAL  EXPERIENCE :</em></h3>
            <div className='storyText'>
            Lead Dancer | Afro-Cuban Experimental Dance Ensemble Oyu Oro
The Caribbean Festival, | Jacob Pillow Dance Festival | African Dance Festival| La Mama Annex Theater, | 
WOFABE, NJ | African Music and Dance Festival, Los Angeles | Harlem Havana Music and Culture Festival | 
Folkloric Ballet of the East in Cuba, | Folkloric Ballet Cutumba Cuba | The Salsa Congress of New York, Canada, 
San Francisco, Washington| Mella Theater Season, Room | Street Dance Festival, Old Havana|

            </div>
        </div>
        <div>
            <h3 className="aboutH3"> <em>My dance teaching background:</em></h3>
            <div className='storyText'>
            I’ve been a guest choreographer and teacher for the Ballet Folklorico Cutumba in Santiago de Cuba and studios 
            around the U.S. I also have experience as a staff member of several dance studios, teaching Afro-Cuban, Salsa, 
            Rumba, and Latin jazz. I currently teach part-time at a local dance studio and offer private lessons.
            I enjoy working with dancers of all ages and backgrounds; the only thing I expect from each client is a good attitude, 
            a work ethic, and never giving up!


            </div>
        </div>
        <div>
            <h3 className="aboutH3"> <em>Why I’m so passionate about Movement and Wellness:</em></h3>
            <div className='storyText'>
            During my senior year in college, I took various classes in somatic, yoga, and the laban technique. It made me 
            see and appreciate dance differently; beyond movement, I saw the potential of holistic and healing body language.
             We can touch our souls and others with a motion that fascinated me. I spent 9 months working with my professor and 
             realized how beneficial this movement technique was for the dancers and me. Dancers should be exposed to wellness
              and healing movements that can bring many benefits physically, mentally, and emotionally!
            This led me to try yoga, dance Therapy, and Somatic practice.  I learned about wellness, healing, string, and resistance 
            training and started sharing the concepts I learned with the internet and my students.
            </div>
        </div>
        <div>
            <h3 className="aboutH3"> <em>Fun facts:</em></h3>
            <div className='storyText'>
              I’m Cuban and speak Spanish. <br/>
              I have a degree in Liberal and Interdisciplinary studies.<br/>
               I work in marketing, Content creation, and travel agent daily, teaching dance and performing by night.<br/>
               I am looking to start my YouTube channel for my community locally, nationally, and internationally!<br/>

            </div>
        </div>
    </div>
  )
}

export default About