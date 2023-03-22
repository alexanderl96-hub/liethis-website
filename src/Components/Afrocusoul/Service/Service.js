import React, {useState, PureComponent} from 'react'
import './Service.css'
import jsPDF from 'jspdf'
import imageDog from '../../../Images/imagesDog.jpeg'

const numbersSquare = [1,2,3,4,5,6,7,8]

const AfrosoulNYC = () => {
  const [classNumber, setClassNumber] = useState(0)
  const [open , setOpen] = useState('flase')
  // const image = 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/u5af76jhqhcyvtng1rku'

  function handelId (e){
    if(Number(e.target.id)){
      setClassNumber(Number(e.target.id))
    }
  }

  function  jsPdfGenerate (){
    
    let doc = new jsPDF('p','pt');
  
    doc.setFontSize(20)
    doc.setFont('arial', 'cursive')
    doc.text(200,50, 'Elsie`s Coffee-Shop')

    doc.setFontSize(15)
    doc.text(40,120, 'Client: Alexander La Rosa Perez')
    doc.text(40,140, 'Order: 12345')
    doc.text(40,160, 'Address: 626 Riderside Drive #24a New York, NY 10031')
  
    doc.addImage(imageDog, 'jpeg', 180,220,220,150, 10,10)

    doc.text(40,450, 'Price: $12.00')
    doc.text(40,470, 'Fee:    $0.30')
    doc.text(40,490, 'Tax:    0.30%')
    doc.text(40,510, 'Total:  $13.50')


    doc.text(40, 600, 'Thanks for visiting our services!')
    doc.text(40, 620, 'We wish you a wonderful day.')

    doc.setFontSize(16)
    doc.text(240, 700, 'Elsie`s Coffee-Shop')


    doc.save('generate.pdf')
  }

  return (
    <div>
      <div 
          onClick={jsPdfGenerate}
           style={{margin: '20px', width: '150px', height: '50px', border: 'none', display: 'flex', boxShadow: '1px 1px 4px 3px #000000',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#20639b', borderRadius: '50px', cursor: 'pointer' }}>Download PDF</div>
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