import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact"> 
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label for="Name" style={{margin: '2px', fontFamily: 'cursive', fontSize: '24px'}} > Name and Last Name :</label>
                <input type="text" className="" style={{width: '350px', height: '24px', fontSize: '18px'}} />
                <label for="Email" style={{margin: '2px', fontFamily: 'cursive', fontSize: '24px'}}>Email :</label>
                <input type="email" className="" style={{width: '350px', height: '24px', fontSize: '18px'}}/>
                <label for="phone" style={{margin: '2px', fontFamily: 'cursive', fontSize: '24px'}}>Phone :</label>
                <input type="text" className="" style={{width: '350px', height: '24px', fontSize: '18px'}}/>
                <label for="Message" style={{margin: '2px', fontFamily: 'cursive', fontSize: '24px'}}>Message :</label>
                <textarea id='Message' name='Message' className=""style={{height:"200px", width: '350px',fontSize: '15px'}}/>
                <button type="button" className="" style={{margin: '15px', cursor: 'pointer'}}>Send Message</button>
            </form>
    </div>
  )
}

export default Contact