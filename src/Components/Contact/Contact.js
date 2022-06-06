import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
   const form = useRef();
   let nameUser = '';

   function greet() {
    alert(`Thanks you  Mrs./Ms. ${nameUser}`);
   }
   
   const userTarget = (e)=> {
    let {value} = e.target
     nameUser = value
   }

   //change the server to liethis email address
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_l9ugyfa', 'template_sg2t9wa', form.current, '3QmzbJgYVWWAUxKwm')
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
    <div className="contact"> 
            <form ref={form}  onSubmit={handleSubmit} className='contactForm'>
                <label className='contactLabel' > Name and Last Name :</label>
                <input id='from_name' type="text" name="from_name" onChange={userTarget} className="contactInput" required />
                <label className='contactLabel' >Email :</label>
                <input type="email" name="from_email"  className="contactInput" required />
                <label  className='contactLabel'>Phone :</label>
                <input  type="text" name="phone" className="contactInput"  />
                <label className='contactLabel'>Message :</label>
                <textarea name="message" className="contactTextarea" required/>
                <button type="submit" className="contactSubmit" value="Send" >Send Message</button>
            </form>

    </div>
  )
}

export default Contact