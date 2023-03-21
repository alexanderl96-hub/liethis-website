import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import liethi2 from '../../Images/imagesliethis2.jpeg'

const Contact = () => {
  const [inputValue, setInputValue] = useState('');
  // const [emailError, setEmailError] = useState('');
  const [inputValueEmail, setInputValueEamil] = useState('');
   const form = useRef();
   let nameUser = '';

   function greet() {
    alert(`Thanks you  Mrs./Ms. ${nameUser}`);
   }
   
   const userTarget = (e)=> {
    let {value} = e.target
     nameUser = value
   }

   const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

 

  function formatPhoneNumber(value) {
 
    if (!value) return value;
  
   
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
  
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
  
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }



  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ayuont9', 'template_fz660jg', form.current, '3QmzbJgYVWWAUxKwm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    setTimeout(greet); 
  }
console.log(nameUser)
  return (
    <div className='mainContainerForm' > 
            <div className="contact">
              <form ref={form}  onSubmit={handleSubmit} className='contactForm'>
                  <label className='contactLabel' > Name and Last Name :</label>
                  <input id='from_name' type="text" name="from_name" onChange={userTarget} className="contactInput" required />
                  <label className='contactLabel' >Email :</label>
                  <input type="email" name="from_email"  className="contactInput" required />
                  <label  className='contactLabel'>Phone :</label>
                  <input  type="text" name="phone" className="contactInput" 
                   onChange={(e) => handleInput(e)} value={inputValue}  />
                  <label className='contactLabel'>Message :</label>
                  <textarea name="message" className="contactTextarea" required/>
                  <button type="submit" className="contactSubmit" value="Send" >Send</button>
              </form>
            </div>
            <div className="homeImgDiv" > 
                <img src={liethi2} alt='Liethis' className='imag3' />
            </div>

    </div>
  )
}

export default Contact