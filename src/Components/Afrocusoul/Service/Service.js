import React, {useState, PureComponent, useEffect} from 'react'
import './Service.css'
import jsPDF from 'jspdf'
import imageDog from '../../../Images/imagesDog.jpeg'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const numbersSquare = [1,2,3,4,5,6,7,8]

const AfrosoulNYC = () => {
  const [classNumber, setClassNumber] = useState(0)
  const [open , setOpen] = useState('flase')
  const [generateColor, setGenerateColor] = useState('')
  const [storageColor, setStorageColor] = useState([])
  const [guessMyColor, setGuessMyColor] = useState([])
  const { width, height } = useWindowSize()
  const [congrast, setCongrats] =useState('false')
  const [count, setCount] = useState(0)
  const [onEffet, setOnEffet] = useState(false)
  const [wrongColor, setWrongColor] = useState([1, 2, 3])
  const [saveColor, setSaveColor] = useState([])
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

  function generate (){
    let myArray = ['a','b','c','d','e','f', 0,1,2,3,4,5,6,7,8,9]
    let i = 0;
    let guessColor = []
    let stringStorage2 = ''

    while(guessColor.length < 5 ){
      let stringStorage = ''

          while( i < 6){
            const r = myArray[Math.floor(Math.random()* myArray.length)]
            stringStorage += r
            stringStorage2 += r
            i++
          }
          i = 0

          if(guessColor.length % 2 === 0){
            guessColor.unshift('#'.concat(stringStorage))
          }else{
            guessColor.push('#'.concat(stringStorage))
          }
          // guessColor.unshift('#'.concat(stringStorage))
          
    }

    // while( i < 6){
    //   const r = myArray[Math.floor(Math.random()* myArray.length)]
     
    //   i++
    // }
  
   
    // storageArray.push('#'.concat(stringStorage))
    // storageColor.push('#'.concat(stringStorage))
    setStorageColor(storageColor.unshift('#'.concat(stringStorage2.slice(0,6))))
    setGenerateColor('#'.concat(stringStorage2.slice(0,6)))
    // if(storageColor.length > 10 ){
    //   setStorageColor(storageColor.slice(0,10))
    // }
    setOnEffet(true)
    setStorageColor(storageColor.slice(0,10))
    setGuessMyColor(guessColor.sort())
    setCongrats('false')
    setWrongColor([1,2,3])
  }

  function HandelMyColor (e){

  //  console.log(typeof guessMyColor[Math.floor(Math.random()* guessMyColor.length)])
    if(e.target.id ===  generateColor){
          //  alert('Congratulations you found the right color.')
           setCongrats('true')
           setWrongColor([1,2,3])
    }else{
      setCongrats('false')
      setWrongColor(wrongColor.slice(0, (wrongColor.length - 1)))
      for( var i = 0; i < guessMyColor.length; i++){ 
    
        if ( guessMyColor[i] === e.target.id) { 
          guessMyColor.splice(i, 1); 
        }
    
    }
      setGuessMyColor(guessMyColor)
    }

  }
console.log(guessMyColor)
  
    useEffect(()=>{
     
      const interval = setInterval(()=> {
        if(onEffet === true && count < 100){
          generate()
           setCount(count + 1)
        }else{
          setOnEffet(false)
          setCount(0)
        }
       
      } , 1);
      return ()=> clearInterval(interval);
    },[count, onEffet])
   console.log(count, 'check count')

   function handelSaveColor (e) {

      if(!saveColor.includes(e.target.id)){
        setSaveColor(saveColor.concat(e.target.id))
      }
   }
   console.log(saveColor,'asjghja')
 
  return (
    <div>
      {congrast === 'true' &&<Confetti
      width={width}
      height={height}
    />} 
      <div 
          onClick={jsPdfGenerate}
           style={{margin: '20px', width: '150px', height: '50px', border: 'none', display: 'flex', boxShadow: '1px 1px 4px 3px #000000',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#20639b', borderRadius: '50px', cursor: 'pointer' }}>Download PDF</div>
        <h1 className='title'>Holaaaaaaaa</h1>
        <div className='afrosoulNYtext'> Todoooooooo</div>
        <div style={{display: 'flex',}}>
        <div 
            onClick={generate}
            style={{margin: '20px', width: '150px', height: '50px', border: 'none', display: 'flex', boxShadow: '1px 1px 4px 3px #000000',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#20639b', borderRadius: '50px', cursor: 'pointer', color: 'white' }} >Generate</div>
                    <div  style={{width: '300px', height: '300px', backgroundColor: `${generateColor}`, borderRadius: '2px', margin: '0 auto', display: 'flex', justifyContent: 'center',
                     alignItems: 'center', flex: 1}}></div>



         <div 
            //  onClick={generate}
             style={{margin: '0 auto', width: '450px', height: '300px', display: 'flex', flexWrap: 'wrap', 
              justifyContent: 'center', alignItems: 'center', gap: '10px', flex: 3}}>{storageColor.map((a, ind)=>{
                return (
                   <div 
                        
                        style={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}} key={ind} id={a}>
                    <div onClick={handelSaveColor} id={a} style={{display: 'flex', backgroundColor: `${a}`, height: '13px', width: '60px'}}></div>
                     {/* {a} */}
                   </div>
                )
              })}
               </div>
               </div>
               {congrast === 'true' &&  <div style={{transition: '5000ms fontSize',  transform: 'scale(5)', fontSize: '10px'}}>Yes</div>}
               {wrongColor.length === 0 &&  <div style={{transition: '5000ms fontSize',  transform: 'scale(5)', fontSize: '10px'}}>You Lose</div>}
           <div 
            //  onClick={generate}
             style={{margin: '0 auto', width: '450px', height: '300px', display: 'flex', flexWrap: 'wrap', 
              justifyContent: 'center', alignItems: 'center', gap: '10px', flex: 3}}>{guessMyColor.map((a, ind)=>{
                return (
                   <div style={{display: 'flex', flexDirection: 'column'}} key={ind} id={a}>
                    {wrongColor.length > 0 && <div id={a}
                       onClick={HandelMyColor} style={{display: 'flex', backgroundColor: `gray`,
                        justifyContent: 'center', alignItems: 'center', borderRadius: '40px',
                       height: '20px', width: '60px', cursor: 'pointer' , padding: '4px', 
                       color: '#fff', fontSize: '12px'}}>{a}</div>}
                     
                   </div>
                )
              })}
              {wrongColor.map((a)=>{
                return(
                  <>
                    {storageColor.length > 0 &&  <div>{a}</div> }
                  </>
                )
              })}
               </div>

               <div style={{width: '600px',height: '200px', border:'2px solid', marginLeft: '40%',
                display: 'flex',  flexWrap: 'wrap'}}>{ saveColor.map((a,ind)=>{
                return(
                  <div style={{}} >
                     <div 
                     style={{ backgroundColor:`${a}`, display: 'flex', justifyContent: 'center',
                     width: '60px',height: '60px', alignItems: 'center'}}>
                        
                     </div>
                  </div>
                )
               })}</div>
               {/* </div> */}
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