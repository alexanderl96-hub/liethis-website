import React from 'react'
import { Link } from 'react-router-dom'

const Sandunga = () => {
  const videos = ['https://www.youtube.com/watch?v=xiiCjuUIM4o&feature=youtu.be', 
                  'https://www.youtube.com/watch?v=Lzp_ig7JRVM',
                  'https://www.youtube.com/watch?v=PyJq6r03Vpo',
                  'https://www.youtube.com/watch?v=BIGubWZ6aLo']
  return (
    <div>
       <h3 style={{textAlign: 'start', marginLeft: '15px'}} ><Link to={'/afrocusoul'} style={{textDecoration: 'none', color: 'black'}} >Back</Link> </h3>
         <div>
          <div>Artist Work</div>
         </div>
         <div>
              <div>PROFESSIONAL  EXPERIENCE:</div>
              <div>Lead Dancer | Afro-Cuban Experimental Dance Ensemble Oyu Oro
                   The Caribbean Festival, | Jacob Pillow Dance Festival | African Dance Festival| La Mama Annex 
                   Theater, | WOFABE, NJ | African Music and Dance Festival, Los Angeles | Harlem Havana Music and 
                   Culture Festival | Folkloric Ballet of the East in Cuba, | Folkloric Ballet Cutumba Cuba | The Salsa 
                   Congress of New York, Canada, San Francisco, Washington| Mella Theater Season, Room | Street Dance 
                   Festival, Old Havana|
              </div>
         </div>
         <div>
              <div>
                  <div>Articles/Artist Highlights</div>
              </div>
              <div>
                   <div>PBS. Barre Feet with Mickela Mallozzi // Cubano </div>
                   <div><a href='https://www.pbs.org/video/cubanos-hZdff3/' >Bare Feet With Mickela Mallozzi | Cubanos | Season 5 | Episode 502 | PBS </a></div>
              </div>
              <div>
                   <div>ABC News Corazon de america</div>
                   <div><a href='https://abcnews.go.com/US/video/soul-nation-presents-corazn-de-amrica-80054961' >Video Soul of a Nation presents Corazón de América: Preserving identity - ABC News.</a></div>
              </div>
              <div>
                   <div>Pavement Pieces</div>
                   <div><a href='https://pavementpieces.com/liethis-hechavarria-channels-the-forces-of-nature/' > Bare Feet With Mickela Mallozzi | Cubanos | Season 5 | Episode 502 | PBS </a></div>
              </div>
              <div>
                   <div>Somos</div>
                   <div><a href='https://www.refinery29.com/en-us/2021/11/10726408/black-latinas-heal-ancestral-dance?utm_campaign=later-linkinbio-r29somos&utm_content=later-22326561&utm_medium=social&utm_source=linkin.bio' > Liethis Hechavarria Channels the Forces of Nature - Pavement Pieces  </a></div>
              </div>
         </div>

    </div>
  )
}

export default Sandunga