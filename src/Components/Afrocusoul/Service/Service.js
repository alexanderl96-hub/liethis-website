import React, {useState} from 'react'
import './Service.css'

const numbersSquare = [1,2,3,4,5,6,7,8]

const AfrosoulNYC = () => {
  const [classNumber, setClassNumber] = useState(0)
  const [open , setOpen] = useState('flase')
  const image = 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/u5af76jhqhcyvtng1rku'

  function handelId (e){
    if(Number(e.target.id)){
      setClassNumber(Number(e.target.id))
    }
  }
  return (
    <div>
        {/* <h1 className='title'></h1>
        <div className='afrosoulNYtext'> 
            
        </div> */}
        {/* <div 
        style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', padding: '10px', marginTop: '50px'}}>
            <div style={{fontSize: '30px', fontWeight: 'bold',marginLeft: '80px' }} >Orders</div>
            {open === 'false' &&  <div
                onClick={(()=> open === 'false' ? setOpen('true') : setOpen('false'))} 
                style={{fontSize: '30px', fontWeight: 'bold', marginRight: '80px'}} >⌵</div>}
           {open === 'true' && <div
            onClick={(()=> open === 'false' ? setOpen('true') : setOpen('false'))} 
            style={{fontSize: '30px', fontWeight: '300', marginRight: '80px'}} >⌃</div>}

        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  margin:'5%', flexWrap: 'wrap'}}>
          {numbersSquare.map((a, ind)=>{
            return(
              <div id={a} className={classNumber === a  ? 'wrap2' : 'wrap'}  onClick={handelId}  >{a}</div>
            )

          })}
          {open === 'true' && <div></div>}

          <div id={1} className={classNumber === 1  ? 'wrap2' : 'wrap'}  onClick={handelId} >
            <div className='container1'>
              <div>Winter Harvest</div>
              <div>Homemade Cauliflower Broccoli Rice, Shredded Kale, Oven Roasted Chicken Creamy Goat, Roasted...</div>
            </div>
             <div className='container2'>
                <div >$9.95+</div>
                <img src={image} alt='' className='my-Image' />
             </div>
          </div>
          <div id={2} className={classNumber === 1  ? 'wrap2' : 'wrap'}  onClick={handelId} >
            <div className='container1'>
              <div>Winter Harvest</div>
              <div>Homemade Cauliflower Broccoli Rice, Shredded Kale, Oven Roasted Chicken Creamy Goat, Roasted...</div>
            </div>
             <div className='container2'>
                <div >$9.95+</div>
                <img src={image} alt='' className='my-Image' />
             </div>
          </div>
          {open === 'true' &&   <div id={3} className={classNumber === 1  ? 'wrap2' : 'wrap'}  onClick={handelId} >
            <div className='container1'>
              <div>Winter Harvest</div>
              <div>Homemade Cauliflower Broccoli Rice, Shredded Kale, Oven Roasted Chicken Creamy Goat, Roasted...</div>
            </div>
             <div className='container2'>
                <div >$9.95+</div>
                <img src={image} alt='' className='my-Image' />
             </div>
          </div>}
          {open === 'true' &&  <div id={4} className={classNumber === 1  ? 'wrap2' : 'wrap'}  onClick={handelId} >
            <div className='container1'>
              <div>Winter Harvest</div>
              <div>Homemade Cauliflower Broccoli Rice, Shredded Kale, Oven Roasted Chicken Creamy Goat, Roasted...</div>
            </div>
             <div className='container2'>
                <div >$9.95+</div>
                <img src={image} alt='' className='my-Image' />
             </div>
          </div>}
          <div id={2} className={classNumber === 2  ? 'wrap2' : 'wrap'}   onClick={handelId} >2</div>
          <div id={3} className={classNumber === 3  ? 'wrap2' : 'wrap'}  onClick={handelId} >3</div>
          <div id={4} className={classNumber === 4  ? 'wrap2' : 'wrap'}  onClick={handelId} >4</div>
          <div id={5} className={classNumber === 5  ? 'wrap2' : 'wrap'}   onClick={handelId} >5</div>
        </div> */}
    </div>
  )
}

export default AfrosoulNYC