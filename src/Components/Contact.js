import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import './Contact.css'


 const Contact = () => {
   const [name,setname]=useState('');
   const [email,setemail]=useState('');
   const [message,setmessage]=useState('');
   
   const handlname=(e)=>{
     setname(e.target.value)


   }

   const handlemail=(e)=>{
     setemail(e.target.value)

   }

   const handlmessage=(e)=>{
    setmessage(e.target.value)

   }
  


   function sendemail(e){
     e.preventDefault();

     emailjs.sendForm('service_x6ekzps','template_rq81ymj',e.target,
     'btC3gzIM9pKhGDPUl'
     ).then(res=>{
       console.log(res);
     }).catch(err=> console.log(err));

     setname('');
     setemail('');
     setmessage('');

   }
   

  return (
    <div className='body'>
    
    <div className='con'>Contact Us</div>
    <form className='form'onSubmit={sendemail} >

    
    <br/>
    <input className='names' type='text' name='name'
    required placeholder='Enter Name' value={name}
    onChange={handlname}
    ></input>
    

    <br/>
    
    <input className='names' type='email' name='User_Email'
    required placeholder='Enter Email' value={email}
    onChange={handlemail}
    />
    

   <br/><br/>
    <textarea className='names' name='message' rows='3'
     value={message} onChange={handlmessage}
    required placeholder='Type Your Message'/>
    

    <br/>
    <button className='btns' type='submit' value='send'>Send</button>
    </form>
    <br/><br/>
   <div className='text'>Mail Me I will try to 
   Replay
   <br/><br/>

   You can Also Follow Me on Instagram OR Facebook

   <br/>
   <a href='https://www.instagram.com/dh________jay'
    className='insta'>
   <FontAwesomeIcon  className='icon' icon={faInstagram} size='2x'/>

   </a>
   
   <a href='https://www.facebook.com/dhananjay.gupta.5268750'
    className='facebook'>
   <FontAwesomeIcon  className='faicon' icon={faFacebook} size='2x'/>
   
   </a>
   


   
   </div>
    

   
    </div>
  )
} 
export default Contact;
